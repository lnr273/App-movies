import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>Flixflix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/search">Search</Link>
            </nav>
        </header>
    );
}

export default Header;