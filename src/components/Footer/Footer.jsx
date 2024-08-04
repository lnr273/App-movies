import styles from './Footer.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <h2>FlixFlix &copy; Desenvolvido por Luan {new Date().getFullYear()}</h2>
        </footer>
    );
}

export default Footer;