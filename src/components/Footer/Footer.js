import React from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

const Footer = ({ userLinks }) => {
  return (
    <footer className={config.fixedFooter ? "footer footer-fixed" : "footer"}>
      {userLinks ? <UserLinks config={config} labeled /> : null}
      <div className="notice-container">
        <div className="copyright">
          <h4>{config.copyright}</h4>
        </div>

        <div className="rss">
          <Link to={config.siteRss}>
            <Button flat secondary iconClassName="fa fa-rss">
              Subscribe
            </Button>
          </Link>
        </div>
        <div className="based-on">
          <h4>
            Powered by {" "}
            <a href="https://github.com/aquabubu">
              AquaBuBu
            </a>.
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
