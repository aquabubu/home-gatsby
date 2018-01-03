import React from "react";
import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";
import config from "../../../data/SiteConfig";
import "./SocialLinks.scss";

const SocialLinks = ({ postNode, postPath, mobile }) => {
  const post = postNode.frontmatter;
  const url = config.siteUrl + config.pathPrefix + postPath;
  const iconSize = mobile ? 36 : 48;
  const filter = count => (count > 0 ? count : "");

  const {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,      
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TumblrShareButton,
    VKShareButton,
    OKShareButton,
  } = ShareButtons;

  const FacebookIcon = generateShareIcon("facebook");
  const GooglePlusIcon = generateShareIcon("google");
  const TwitterIcon = generateShareIcon("twitter");    
  const LinkedinIcon = generateShareIcon("linkedin");
  const PinterestIcon = generateShareIcon('pinterest');
  const RedditIcon = generateShareIcon("reddit");    
  const TumblrIcon = generateShareIcon('tumblr');
  const VKIcon = generateShareIcon('vk');
  const OKIcon = generateShareIcon('ok');

  const {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    PinterestShareCount,
    RedditShareCount,
    TumblrShareCount,
    VKShareCount,
    OKShareCount
  } = ShareCounts;

  return (
    <div className="social-links">
      <FacebookShareButton className="social-button" url={url} title={post.title} picture={post.cover} description={postNode.excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </FacebookShareCount>
      </FacebookShareButton>

      <GooglePlusShareButton className="social-button" url={url}>
        <GooglePlusIcon round size={iconSize} />
        <GooglePlusShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </GooglePlusShareCount>
      </GooglePlusShareButton>

      <TwitterShareButton className="social-button" url={url} title={post.title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>

      <LinkedinShareButton className="social-button" url={url} title={post.title} description={postNode.excerpt}>
        <LinkedinIcon round size={iconSize} />
        <LinkedinShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </LinkedinShareCount>
      </LinkedinShareButton>

      <PinterestShareButton className="social-button" url={url} media={post.cover} description={postNode.excerpt}>
        <PinterestIcon round size={iconSize} />
        <PinterestShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </PinterestShareCount>
      </PinterestShareButton>

      <RedditShareButton className="social-button" url={url} title={post.title}>
        <RedditIcon round size={iconSize} />
        <RedditShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </RedditShareCount>
      </RedditShareButton>

      <TumblrShareButton className="social-button" url={url} title={post.title} caption={postNode.excerpt}>
        <TumblrIcon round size={iconSize} />
        <TumblrShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </TumblrShareCount>
      </TumblrShareButton>

      <VKShareButton className="social-button" url={url} title={post.title} description={postNode.excerpt} image={post.cover}>
        <VKIcon round size={iconSize} />
        <VKShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </VKShareCount>
      </VKShareButton>

      <OKShareButton className="social-button" url={url} title={post.title} description={postNode.excerpt} image={post.cover}>
        <OKIcon round size={iconSize} />
        <OKShareCount url={url}>
          {count => <div className="share-count">{filter(count)}</div>}
        </OKShareCount>
      </OKShareButton>
    </div>
  );
}

export default SocialLinks;
