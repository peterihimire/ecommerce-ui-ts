import React from "react";

const RightBar = () => {
  return (
    <section className={`right-bar`}>
      <div style={{ padding: "20px" }}>
        <h1>Right side</h1>

        <p>
          lorem Separating user & profile make models cleaner, every model will
          be responsible for only one thing: the user for logging/auth - things
          that matters for the user himself only; and the profile for
          information that are viewed on the user's page and matter for
          everybody. As a result, this will make less overhead on the DB. You'll
          need to access/update users table only at logging, and without
          accessing/updating the (possibly big) data of the user's information
          that only matter for viewing. If you have a developers team
          responsible for authentication and another responsible for
          presentation. It's a good idea to separate the resources they're
          dealing with as much as possible. A thing that deserves mention here
          is that such kind of separation not only helps in models, but also in
          controllers and maybe views. Another good reason is when you need to
          give a user more than one profile. Yes that's common if your app is
          somehow "social". LinkedIn allows users to have many profiles, each in
          a specific language.
        </p>
      </div>
    </section>
  );
};

export default RightBar;
