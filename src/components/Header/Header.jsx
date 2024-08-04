import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>FlixFlix</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </header>
    );
}

export default Header;