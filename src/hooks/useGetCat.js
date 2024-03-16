import { Categories } from "../data/categories";

export function getCategoryByName(name) {
    function searchCategory(category) {
        if (category.name === name) {
            return category;
        }
        if (category.childrens) {
            for (const child of category.childrens) {
                const found = searchCategory(child);
                if (found) {
                    return found;
                }
            }
        }
        return null;
    }
    for (const category of Categories) {
        const found = searchCategory(category);
        if (found) {
            return found;
        }
    }
    return null;
}
