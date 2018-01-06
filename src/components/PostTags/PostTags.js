import React from "react";
import _ from "lodash";
import Link from "gatsby-link";
import Chip from "react-md/lib/Chips";
import "./PostTags.scss";

const PostTags = ({ tags, langKey }) => {
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map(tag => (
          <Link
            key={tag}
            style={{ textDecoration: "none" }}
            to={`/${langKey}/${_.kebabCase(tag)}`}
          >
            <Chip label={tag} className="post-preview-tags" />
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
