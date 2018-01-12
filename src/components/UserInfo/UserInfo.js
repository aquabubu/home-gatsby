import React from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import IconSeparator from "react-md/lib/Helpers/IconSeparator";
import { Follow } from "react-twitter-widgets";
import UserLinks from "../UserLinks/UserLinks";
import "./UserInfo.scss";

const UserInfo = ({ config, expanded, langKey }) => {
  // const userDescription = require(`../../../data/userDescription/${langKey}`);

  const { userAvatar, userName, userLocation, userLinks, userTwitter } = config;
  const userLinksElement = (
    <UserLinks config={config} labeled={expanded} />
  );
  
  if (!userAvatar && !userName && !userLocation) {
    if (userLinks) {
      return (
        <Card className="md-grid md-cell md-cell--12 user-info">
          {userLinksElement}
        </Card>
      );
    }
    return null;
  }
  
  return (
    <Card className="md-grid md-cell md-cell--12 user-info">
      <CardTitle
        expander={!expanded}
        avatar={userAvatar && <Avatar src={userAvatar} role="presentation" />}
        title={userName && userName}
        subtitle={
          userTwitter ? (
            <Follow
              username={userTwitter}
              options={{ count: expanded ? "none" : "none" }}
            />
          ) : (
            "Author"
          )
        }
      />
      <CardText expandable={!expanded}>
        {userLocation && (
          <IconSeparator label={userLocation} iconBefore>
            <FontIcon iconClassName="fa fa-map-marker" />
          </IconSeparator>
        )}
        {/* <p>{userDescription && userDescription}</p> */}
        <p>
          I like walking in the rain cause no one knows I'm peeing...just kidding, I don't even like rain. But I like to share my life experiences with you. Hope you enjoy this blog!
        </p>
        <p>
          Mình thích đi bộ trong mưa vì không ai biết mình đang *è ra quần...đùa thôi, mình thậm chí còn không thích mưa nữa cơ. Nhưng mình thích chia sẻ những kinh nghiệm cuộc sống của mình. Hy vọng bạn thấy blog này hữu ích!
        </p>
        {userLinksElement}
      </CardText>
    </Card>
  );
}

export default UserInfo;
