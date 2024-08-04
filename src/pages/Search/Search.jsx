
import styles from './Search.module.css';
import videos from '../../json/videos.json';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Container from '../../components/Container/Container.jsx';
import SearchVideoList from '../../components/SearchVideoList/SearchVideoList.jsx';

function Search() {
    return(
        <>
            <Header />
            <Container>
                <section className={styles.search}>
                    <h2>Pesquisa</h2>
                </section>
                <SearchVideoList videos={videos}/>
            </Container>
            <Footer />
        </>
    );
}

export default Search;
