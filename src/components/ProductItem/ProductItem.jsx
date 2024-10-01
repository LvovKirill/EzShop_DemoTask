import styles from './ProductItem.module.scss';
import { useTranslation } from 'react-i18next';
import checkbox_icon from '../../shared/icon/components/checkbox/off_checkbox.svg';
import checkbox_icon_on from '../../shared/icon/components/checkbox/on_checkbox.svg';
// import drop_down_icon from '../../../shared/icon/drop-down-icon.svg';
import {ReactComponent as DropDownIcon} from '../../shared/icon/drop-down-icon.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchProductActive } from '../../shared/redux/action/ProductListAction';
import { editProductCount } from '../../shared/redux/action/ProductListAction';
import { useNavigate } from "react-router-dom";


function ProductItem({ product }) {

    const {t, i18n} = useTranslation();

    const [isDropDown, setIsDropDown] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productList = useSelector(state => state.productList.productList);

    function counterAction(value){

        if (product.count == 0 && value == -1){
            return
        }

        dispatch(editProductCount(productList, product.id, value));

        const url = `https://ezbots.ru:1537/api/products/edit_product`;
        const body = JSON.stringify(product);
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

        })
        .catch(error => {
            console.error('Error:', error);
        });


    }




    return (
        <div className={styles.drop_down_card}>
            <div onClick={(event) => {navigate("/app/product", { state: { product }}) }} className={styles.top_container}>
                
                {/* <pre className={styles.title}>Блок</pre>
                <DropDownIcon className={isDropDown ? styles.icon : styles.icon_active}></DropDownIcon> */}

                <img className={styles.checkbox} onClick={(event) => { event.stopPropagation(); dispatch(switchProductActive(productList, product.id)); }} src={product.selected ? checkbox_icon_on : checkbox_icon}></img>
                <p className={styles.product_name}>{product.name}</p>
                <div className={styles.separator}></div>
                <p className={styles.product_id}>{product.id}</p>
                <div className={styles.separator}></div>
                <p className={styles.product_count}>{product.count}</p>
                {/* <div className={styles.trash}> */}
                <DropDownIcon className={isDropDown ? styles.icon : styles.icon_active} onClick={(event) => { event.stopPropagation(); setIsDropDown(!isDropDown); }}></DropDownIcon>
                {/* </div> */}

            </div>

            { isDropDown ?
            <div className={styles.content}>
                <div className={styles.separator_2}/>
                <div className={styles.product_info_item}>
                    <p className={styles.text}>Обувь</p>
                    <p className={styles.hint}>{product.categories}</p>
                </div>
                {/* <div className={styles.separator_2}/>
                <div className={styles.product_info_item}>
                    <p className={styles.text}>Обувь</p>
                    <p className={styles.hint}>{product.category}</p>
                </div> */}
                <div className={styles.separator_2}/>
                <div className={styles.product_info_item}>
                    <p className={styles.text}>{product.price} ₽</p>
                    <p className={styles.hint}>Цена</p>
                </div>
                <div className={styles.separator_2}/>
                <div className={styles.product_info_item}>
                    <p className={styles.text}>Количество:</p>
                    <div className={styles.counter}>
                        <p className={styles.minus} onClick={() => counterAction(-1)}>-</p>
                        <p className={styles.count}>{product.count}</p>
                        <p className={styles.plus} onClick={() => counterAction(1)}>+</p>
                    </div>
                </div>
            </div>
                :
            <></>
            }       

        </div>
    );

}

export default ProductItem;