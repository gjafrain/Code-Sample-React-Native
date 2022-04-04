export const initialState = () => ({
    serachProducts: [],
    fetchSearchProductsPending: false,
    fetchSearchProductsFailure: true,
    fetchSearchProductsSuccess: false,
    allProducts: [],
    fetchAllProductsPending: false,
    fetchAllProductsFailure: false,
    fetchAllProductsSuccess: true,
    categoryProducts: {},
    fetchCategoryProductsPending: false,
    fetchCategoryProductsFailure: false,
    fetchCategoryProductsSuccess: true,
});
