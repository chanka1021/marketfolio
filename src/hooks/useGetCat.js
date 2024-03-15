const categories = require('../data/categories');

function getCategoryByName(name) {
    return categories.find(category => category.name === name);
}

module.exports = getCategoryByName;