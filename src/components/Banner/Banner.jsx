/* eslint-disable react/prop-types */
import styles from './Banner.module.css';

function Banner({ img }) {
    return(
        <div 
            className={styles.banner}
            style={{ backgroundImage: `url('images/banner-${img}.png')` }}
        ></div>
    );
}

export default Banner;