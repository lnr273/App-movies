
import styles from './Search.module.css';
import videos from '../../json/videos.json';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Container from '../../components/Container/Container.jsx';
import SearchVideoList from '../../components/SearchVideoList/SearchVideoList.jsx';
import ScrollToTopBtn from '../../components/ScrollToTopBtn/ScrollToTopBtn.jsx';

function Search() {
    return(
        <>
            <ScrollToTopBtn />
            <Header />
            <Container>
                <section className={styles.search}>
                    <SearchVideoList videos={videos}/>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Search;
