const SET_CATEGORIES = 'SET_CATERGORIES';

export function setCategories(categories) {
    return {
        type: SET_CATEGORIES,
        categories
    }
}