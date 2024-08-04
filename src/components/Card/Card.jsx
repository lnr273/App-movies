/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

function Card({ id }) {
    return(
        <section className={styles.card}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} 
                alt="Capa do vídeo" />
            </Link>
        </section>
    );
}

export default Card