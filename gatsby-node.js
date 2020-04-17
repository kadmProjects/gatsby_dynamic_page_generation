const path = require('path');
const data = require('./content/data/data.json');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;
    const { pages } = data;
    for (const item in pages) {
        if (pages.hasOwnProperty(item)) {
            let page = data.pages[item];
            createPage({
                path: page.path,
                component: require.resolve("./src/templates/pageTemplate.js"),
                context: {
                    page: page
                },
            });
        }
    }
}