import styles from './AboutShop.module.scss';
import { Outlet } from 'react-router';
import copyIcon from '../../shared/icon/copy_icon.svg';
import shoppingIcon from '../../shared/icon/shopping_icon.svg';
import robotIcon from '../../shared/icon/robot_icon.svg';
import gridIcon from '../../shared/icon/grid_icon.svg';
import interrogationIcon from '../../shared/icon/interrogation_icon.svg';
import rightArrowIcon from '../../shared/icon/right_arrow_icon.svg';
import { initNavigator } from '@telegram-apps/sdk';
import { initBackButton } from '@telegram-apps/sdk';
import { useNavigate } from "react-router-dom";


function AboutShop() {

  const navigate = useNavigate();

  // const [backButton] = initBackButton();

  // backButton.show();
  // backButton.on('click', () => {
  //   navigate("/app/main");
  // });

  // backButton.click(function() {
  //   window.alert('back');
  //   navigate("/app/main");
  // });

  // backButton.click(() => {
  //   // history.back();
  //   window.alert('back')
  //   navigate("/app/main");
  // });

  return (
    <div className={styles.about_shop}>
      <p className={styles.shop_name}>Название магазина</p>
      <p className={styles.block_title}>Ссылки</p>

      <div className={styles.block}>

        <div className={styles.block_item}>
            <div className={styles.block_left_content}>
                <img className={styles.left_icon} src={shoppingIcon}></img>
                <p className={styles.block_text}>Мой магазин</p>
            </div>
            <img className={styles.right_icon} src={copyIcon}></img>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.block_item}>
            <div className={styles.block_left_content}>
                <img className={styles.left_icon} src={robotIcon}></img>
                <p className={styles.block_text}>Мой Телеграм бот</p>
            </div>
            <img className={styles.right_icon} src={copyIcon}></img>
        </div>

        <div className={styles.separator}></div>

        <div className={styles.block_item}>
            <div className={styles.block_left_content}>
                <img className={styles.left_icon} src={interrogationIcon}></img>
                <p className={styles.block_text}>Поддержка</p>
            </div>
            <img className={styles.right_icon} src={rightArrowIcon}></img>
        </div>

      </div>


      <p className={styles.block_title}>Управление</p>

      <div className={styles.block}>

        <div className={styles.block_item}>
            <div className={styles.block_left_content}>
                <img className={styles.left_icon} src={gridIcon}></img>
                <p className={styles.block_text}>Товары</p>
            </div>
            <img className={styles.right_icon} src={rightArrowIcon}></img>
        </div>

      </div>
    </div>
  );
}

export default AboutShop;