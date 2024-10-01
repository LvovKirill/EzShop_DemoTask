import styles from './ProductListPage.module.scss';
import {ReactComponent as SettingsIcon} from '../../shared/icon/settings_icon.svg';
import {ReactComponent as SearchIcon} from '../../shared/icon/search_icon.svg';
import {ReactComponent as PlusIcon} from '../../shared/icon/plus_icon.svg';
import checkbox_icon_off from '../../shared/icon/components/checkbox/off_checkbox.svg';
import checkbox_icon_on from '../../shared/icon/components/checkbox/on_checkbox.svg';
import { useEffect, useState } from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import { deleteProduct, setProductList, switchProductActive, switchProductsAllActive } from '../../shared/redux/action/ProductListAction';
import { useDispatch, useSelector } from 'react-redux';


function ProductListPage() {

  const productList = useSelector(state => state.productList.productList);
  const dispatch = useDispatch();
  const [isSelectedAll, setIsSelectedAll] = useState(false)

  useEffect(() => {

    const url = `https://ezbots.ru:1537/api/products/get_all_products?bot_id=110`;
    const body = JSON.stringify([]);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'authorization-data': 'DEBUG'
        },
        body: body
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        dispatch(setProductList(data))
    })
    .catch(error => {
        console.error('Error:', error);
    });

  }, [])


  function sumActiveProducts(){

    let count = 0;

    console.log("PRODUCT_LIST")
    console.log(productList)

    productList.map(product => {
      if (product.selected){
        count++;
      }
    })

    // if(productList.length == count){
    //   setIsSelectedAll(true);
    // }else{
    //   setIsSelectedAll(false);
    // }

    return count;

  }

  function switchSelectedAll(){
    setIsSelectedAll(!isSelectedAll);
    console.log(isSelectedAll)
    productList.map(product => {
      dispatch(switchProductsAllActive(productList, product.id, !isSelectedAll))
    })
  }

  function deleteProducts(){

    const idDeleteProducts = productList.filter(product => product.selected).map(product => product.id)
    dispatch(deleteProduct(productList.filter(item => !idDeleteProducts.includes(item.id))));

    idDeleteProducts.map(id => {

      const url = `https://ezbots.ru:1537/api/products/del_product/110/${id}`;
      fetch(url, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'authorization-data': 'DEBUG'
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
    })

  }



  return (
    <div className={styles.main_content}>

    <div className={styles.header}>

      <p className={styles.title}>Управление товарами</p>

      <div className={styles.right_icons}>
        <SettingsIcon></SettingsIcon>
        <SearchIcon></SearchIcon>
        <PlusIcon></PlusIcon>
      </div>

    </div>

    <div className={styles.table_header}>
      <img className={styles.checkbox} src={ (isSelectedAll || productList.length == sumActiveProducts()) ? checkbox_icon_on : checkbox_icon_off} onClick={switchSelectedAll}></img>
      <p className={styles.table_title_name}>Название товара</p>
      <div className={styles.separator}></div>
      <p className={styles.table_title_id} onClick={() => console.log((isSelectedAll || productList.length == sumActiveProducts()))}>ID</p>
      <div className={styles.separator}></div>
      <p className={styles.table_title_count}>Кол-во</p>
      <div className={styles.trash}></div>
    </div>

    <div className={styles.product_list_scroll}>
      <div className={styles.product_list}>

        {productList.map(product => {
          return <ProductItem product={product}></ProductItem>
        })}

      </div>
    </div>

    { sumActiveProducts() != 0 ?
      <div className={styles.bottom_container}>
        <div className={styles.delete_btn} onClick={deleteProducts}>Удалить</div>

        {
          sumActiveProducts() == 1 
          ?
          <div className={styles.edit_btn}>Изменить</div>
          :
          <></>
        }

      </div>
      :
      <></>
    }

    </div>
  );
}

export default ProductListPage;