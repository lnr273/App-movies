import styles from './Favorites.module.css'
import Header from '../../components/Header/Header.jsx'
import Container from '../../components/Container/Container.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import VideoList from '../../components/VideoList/VideoList.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import ScrollToTopBtn from '../../components/ScrollToTopBtn/ScrollToTopBtn.jsx'
import { useFavoriteContext } from '../../contexts/Favorites.jsx'

function Favorites() {
    const { favorite } = useFavoriteContext()

    return(
        <>
            <ScrollToTopBtn />
            <Header/>
            <Banner img="favoritos"/>
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    { <VideoList videos={favorite} emptyHeading="Sem Favoritos"/> }
                </section>
            </Container>
            <Footer/>
        </>
    );   
}

export default Favorites;