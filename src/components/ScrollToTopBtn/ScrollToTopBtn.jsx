import styles from './ScrollToTopBtn.module.css'

function ScrollToTopBtn() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button onClick={handleClick} className={styles.scrollBtn}>
            {''}
            &#9650;
        </button>
    );
}

export default ScrollToTopBtn;