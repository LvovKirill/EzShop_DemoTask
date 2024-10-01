const initialState = {
    productList: []
};
  
const productListReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_PRODUCT_LIST':
      return {
        ...state,
        productList: action.payload.map(product => {
          return {
            ...product,
            selected: false
          }
        })
      };

    case 'SWITCH_PRODUCT_ACTIVE':
      return {
        ...state,
        productList: action.payload.map(product => {
          if (product.id == action.id){
            product.selected = !product.selected
          }
          return product
        })
      };

    case 'SWITCH_PRODUCT_ALL_ACTIVE':
      return {
        ...state,
        productList: action.payload.map(product => {
          if (product.id == action.id){
            product.selected = action.value
          }
          return product
        })
    };

    case 'EDIT_PRODUCT_COUNT':
      return {
        ...state,
        productList: action.payload.map(product => {
          if (product.id == action.id){
            product.count = product.count + action.editValue
          }
          return product
        })
    };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        productList: action.payload
    };

    default:
      return state;
  }
};

  
  
export default productListReducer;