import styles from './ProductPage.module.scss';

import {ReactComponent as CrossIcon} from '../../shared/icon/cross-icon.svg';
import {ReactComponent as ClipIcon} from '../../shared/icon/paper_clip.svg';
import {ReactComponent as AddIcon} from '../../shared/icon/add_icon.svg';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../components/TextInput/TextInput';

import { useNavigate } from 'react-router';


function ProductPage() {
  
  const productList = useSelector(state => state.productList.productList);
  const dispatch = useDispatch();
  const [isSelectedAll, setIsSelectedAll] = useState(false)

  const [nameValue, setNameValue] = useState('')
  const [descriptionValue, setDescriptionValue] = useState('')
  const [articleValue, setArticleValue] = useState('')
  const [priceValue, setPriceValue] = useState('')
  const [quantityValue, setQuantityValue] = useState('')
  const navigate = useNavigate();
  
  useEffect(() => {
    
  }, [])

  function addProduct(){

    let newProduct = {
      bot_id: 110,
      name: nameValue,
      category: [0],
      description: descriptionValue,
      article: articleValue,
      price: priceValue,
      count: quantityValue,
      picture: ["string"],
      extra_options: []
    }

    const url = `https://ezbots.ru:1537/api/products/add_product?bot_id=110`;
    const body = JSON.stringify(newProduct);
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

  }

  return (
    <div className={styles.main_content}>


      <div className={styles.product_scroll}>
      <div className={styles.product_scroll_content}>

      <div className={styles.header}>
        <p className={styles.title}>Товар</p>
        <CrossIcon onClick={ () => navigate("/app/productlist") }></CrossIcon>
      </div>

      <div className={styles.product_main_info}>
        <p className={styles.product_main_info_title}>Заполните поля</p>
        <div className={styles.input_container}>

          <TextInput 
          placeholder={"Выберите категорию"} 
          title="Категория" isRequired={false} 
          className={styles.main_info_input}
          ></TextInput>

          <TextInput 
          placeholder={"Выберите подкатегорию"} 
          title="Подкатегория" 
          isRequired={false} 
          className={styles.main_info_input}
          ></TextInput>

          <TextInput 
          placeholder={"Введите название"} 
          title="Название товара" 
          isRequired={true} 
          className={styles.main_info_input}
          setInputValue={setNameValue}
          ></TextInput>

          <TextInput 
          placeholder={"Напишите описание"} 
          title="Описание" 
          isRequired={false} 
          className={styles.main_info_input}
          setInputValue={setDescriptionValue}
          ></TextInput>

          <TextInput 
          placeholder={"Введите артикул"} 
          title="Артикул" 
          isRequired={true} 
          className={styles.main_info_input}
          setInputValue={setArticleValue}
          ></TextInput>

          <div className={styles.input_container_2}>

            <TextInput 
            placeholder={"Цена"} 
            title="Цена" 
            isRequired={true} 
            className={styles.main_info_input}
            setInputValue={setPriceValue}
            ></TextInput>

            <TextInput 
            placeholder={"Количество"} 
            title="Кол-во на складе" 
            isRequired={false} 
            className={styles.main_info_input}
            setInputValue={setQuantityValue}
            ></TextInput>

          </div>
        </div>
      </div>

      <div className={styles.image_info}>
        <p className={styles.product_main_info_title}>Заполните поля</p>

        <div className={styles.add_image_container}>
          <ClipIcon></ClipIcon>
          <p className={styles.add_image_text}>Добавить файл</p>
        </div>

      </div>

      <div className={styles.add_option_container}>
        <AddIcon></AddIcon>
        <p className={styles.add_option_text}>Добавить опцию</p>
      </div>

      </div>
      </div>

    { true ?
    <div className={styles.bottom_container}>
        <div className={styles.edit_btn} onClick={addProduct}>Добавить товар</div>
    </div>
    :
    <></>
    }

    </div>
  );
}

export default ProductPage;