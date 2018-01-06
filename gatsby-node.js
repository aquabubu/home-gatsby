const path = require("path");
const _ = require("lodash");
const webpackLodashPlugin = require("lodash-webpack-plugin");
const { getSlugAndLang } = require("ptz-i18n");

const postNodes = [];

// function addSiblingNodes(createNodeField) {
//   postNodes.sort(
//     ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) =>
//       new Date(date1) - new Date(date2)
//   );
//   for (let i = 0; i < postNodes.length; i += 1) {
//     const nextID = i + 1 < postNodes.length ? i + 1 : 0;
//     const prevID = i - 1 > 0 ? i - 1 : postNodes.length - 1;
//     const currNode = postNodes[i];
//     const nextNode = postNodes[nextID];
//     const prevNode = postNodes[prevID];
//     createNodeField({
//       node: currNode,
//       name: "nextTitle",
//       value: nextNode.frontmatter.title
//     });
//     createNodeField({
//       node: currNode,
//       name: "nextSlug",
//       value: nextNode.fields.slug
//     });
//     createNodeField({
//       node: currNode,
//       name: "prevTitle",
//       value: prevNode.frontmatter.title
//     });
//     createNodeField({
//       node: currNode,
//       name: "prevSlug",
//       value: prevNode.fields.slug
//     });
//   }
// }

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
    postNodes.push(node);
  }
};

// exports.setFieldsOnGraphQLNodeType = ({ type, boundActionCreators }) => {
//   const { name } = type;
//   const { createNodeField } = boundActionCreators;
//   if (name === "MarkdownRemark") {
//     addSiblingNodes(createNodeField);
//   }
// };

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     const postPage = path.resolve("src/templates/post.js");
//     const tagPage = path.resolve("src/templates/tag.js");
//     const categoryPage = path.resolve("src/templates/category.js");

//     resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark {
//               edges {
//                 node {
//                   frontmatter {
//                     category
//                     tags                    
//                   }
//                   fields {
//                     slug
//                     langKey
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           /* eslint no-console: "off" */
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         const categorySet = new Set();        
//         const tagSet = new Set();
//         result.data.allMarkdownRemark.edges.forEach(edge => {
//           if (edge.node.frontmatter.category) {
//             categorySet.add(edge.node.frontmatter.category);
//           }

//           if (edge.node.frontmatter.tags) {
//             edge.node.frontmatter.tags.forEach(tag => {
//               tagSet.add(tag);
//             });
//           }

//           createPage({
//             path: `${edge.node.fields.slug}`,
//             component: postPage,
//             context: {
//               slug: edge.node.fields.slug
//             }
//           });
//         });

//         // const categoryList = Array.from(categorySet);
//         // categoryList.forEach(category => {
//         //   createPage({
//         //     path: `/${_.kebabCase(category)}/`,
//         //     component: categoryPage,
//         //     context: {
//         //       category
//         //     }
//         //   });
//         // });

//         // const tagList = Array.from(tagSet);
//         // tagList.forEach(tag => {
//         //   createPage({
//         //     path: `/${_.kebabCase(tag)}/`,
//         //     component: tagPage,
//         //     context: {
//         //       tag
//         //     }
//         //   });
//         // });
//       })
//     );
//   });
// };

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};
