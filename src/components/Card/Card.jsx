/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import iconFavorite from "./favorite.png"
import iconUnfavorite from "./unfavorite.png"

function Card({ id }) {
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                alt="Capa do vídeo" className={styles.cover}/>
            </Link>
            <figure className={styles.icon}>
                <img src={iconFavorite} alt="favorite icon" />
            </figure>
        </section>
    );
}

export default Card