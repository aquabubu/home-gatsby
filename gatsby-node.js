const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");
const { getSlugAndLang } = require("ptz-i18n");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === "MarkdownRemark") {
    const { absolutePath } = getNode(node.parent);

    const options = {
      langKeyDefault: 'en',
      pagesPaths: ['/content/posts/']
    }
    const { slug, langKey } = getSlugAndLang(options, absolutePath);    

    createNodeField({ node, name: "slug", value: slug });
    createNodeField({ node, name: "langKey", value: langKey });
  }
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};
