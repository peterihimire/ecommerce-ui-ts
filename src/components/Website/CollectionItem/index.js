import React from "react";
import SmallHero from "../../ui/smallHero";
import CollectionInfo from "./collectionInfo";

import { Helmet } from "react-helmet";

const CollectionItem = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>Collection Info | Bridget</title>
      </Helmet>

      {/* <SmallHero title={`Our Vision`} /> */}
      <CollectionInfo />
    </div>
  );
};

export default CollectionItem;
