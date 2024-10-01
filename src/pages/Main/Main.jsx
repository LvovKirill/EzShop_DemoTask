import styles from './Main.module.scss';
import menuIcon1 from '../../shared/icon/menu/menu_1.svg';
import menuIcon2 from '../../shared/icon/menu/menu_2.svg';
import menuIcon3 from '../../shared/icon/menu/menu_3.svg';
import menuIcon4 from '../../shared/icon/menu/menu_4.svg';
import menuIcon5 from '../../shared/icon/menu/menu_5.svg';
// import ava from "../../shared/images/ava.png"
import none_ava_icon from '../../shared/icon/none_ava_icon.svg'
import confetti_img from "../../shared/images/confetti_img.png"
import good_status_img from "../../shared/images/good_status_img.png"
import tg_logo from "../../shared/icon/tg_logo.svg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { parseInitData } from '@telegram-apps/sdk';
// import { TelegramClient } from '@telegram-apps/sdk-react';
// import { retrieveLaunchParams } from '@telegram-apps/sdk';
// import { initBackButton } from '@telegram-apps/sdk';

function Main() {

// const [backButton] = initBackButton();
// backButton.hide();

const [existShop, setExistShop] = useState(false)
const navigate = useNavigate();

// const {initData} = retrieveLaunchParams().initData.user.firstName;

// let firstName = retrieveLaunchParams().initData.user.firstName;
// let photoUrl = retrieveLaunchParams().initData.user.photoUrl;
// let username = retrieveLaunchParams().initData.user.username;

let firstName = "Имя";
let photoUrl = null;
let username = "Фамилия";

console.log(photoUrl)


  return (
    <div className={styles.main}>

        {/* Header */}

        <div className={styles.header}>

            <div className={styles.author}>
                <img className={styles.img_author} src={photoUrl ? photoUrl : none_ava_icon}></img>
                <div className={styles.info_author}>
                    <p className={styles.name_author}>{firstName}</p>
                    <p className={styles.nik_author}>@{username}</p>
                </div>
            </div>

            {/* <div className={styles.tg_link}>
                <img className={styles.tg_logo}></img>
                <div className={styles.tg_author}>
                    <p className={styles.tg_nik}>Дарья</p>
                    <p className={styles.tg_hint}>@darinitg</p>
                </div>
            </div> */}
            <img src={tg_logo}></img>

        </div>

        {/* Меню */}

        <div className={styles.menu}>

            <div className={styles.menu_item}>
                <img className={styles.menu_item_icon} src={menuIcon1}></img>
                <p className={styles.menu_item_name}>О нас</p>
            </div>

            <div className={styles.menu_item}>
                <img className={styles.menu_item_icon} src={menuIcon2}></img>
                <p className={styles.menu_item_name}>Тарифы</p>
            </div>

            <div className={styles.menu_item}>
                <img className={styles.menu_item_icon} src={menuIcon3}></img>
                <p className={styles.menu_item_name}>Инструкция</p>
            </div>

            <div className={styles.menu_item}>
                <img className={styles.menu_item_icon} src={menuIcon4}></img>
                <p className={styles.menu_item_name}>FAQ</p>
            </div>

            <div className={styles.menu_item}>
                <img className={styles.menu_item_icon} src={menuIcon5}></img>
                <p className={styles.menu_item_name}>Каталог товаров</p>
            </div>

        </div>

        {/* Магазины */}

        <p className={styles.our_shop}>Ваши магазины</p>

        {!existShop ?
        <>
        <div className={styles.our_shop_info}>
            <img className={styles.our_shop_img_none} src={confetti_img}></img>
            <p className={styles.our_lable_1_none}>Добро пожаловать!</p>
            <p className={styles.our_lable_2_none}>Здесь будут ваши магазины</p>
        </div>

        <div className={styles.create_shop_button} onClick={() => {setExistShop(true);}}>Добавить магазин</div>
        </>
        :
        <>
        <div className={styles.shop_item} onClick={() => navigate("/app/aboutshop")}>Название магазина</div>
        <div className={styles.our_shop_info}>
            <img className={styles.our_shop_img_none} src={good_status_img}></img>
            <p className={styles.our_lable_1_exist}>Статус магазина</p>
            <p className={styles.our_shop_status}>Работает</p>
        </div>

        <div className={styles.stop_shop_button} onClick={() => setExistShop(false)}>Остановить</div>
        </>
    }


    </div>
  );
}

export default Main;