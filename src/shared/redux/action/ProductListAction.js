


export const setProductList = (productList) => {
    return {
      type: 'SET_PRODUCT_LIST',
      payload: productList
    };
};



export const switchProductActive = (productList, id) => {
  return {
    type: 'SWITCH_PRODUCT_ACTIVE',
    payload: productList,
    id: id
  };
};

export const switchProductsAllActive = (productList, id, value) => {
  return {
    type: 'SWITCH_PRODUCT_ALL_ACTIVE',
    payload: productList,
    id: id,
    value: value
  };
};

export const editProductCount = (productList, id, editValue) => {
  return {
    type: 'EDIT_PRODUCT_COUNT',
    payload: productList,
    id: id,
    editValue: editValue
  };
};

export const deleteProduct = (productList) => {

  return {
    type: 'DELETE_PRODUCT',
    payload: productList
  };

};





