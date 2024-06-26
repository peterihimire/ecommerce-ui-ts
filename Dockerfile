# DEVELOPMENT

# Base image
# FROM node:19.6.0-alpine AS development
FROM node:19 as development

# To install python dependency
# RUN apk add g++ make py3-pip

# The build target environment
ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]


# PRODUCTION 

# Base image
# FROM node:19.6.0-alpine AS builder
FROM node:19 as builder

# To install python dependency
# RUN apk add g++ make py3-pip

# The build target environment
ENV NODE_ENV production

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json .
COPY package-lock.json ./
RUN npm install --production

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

# The build target environment
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]