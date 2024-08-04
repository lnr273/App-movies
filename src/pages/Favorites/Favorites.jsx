import styles from './Favorites.module.css'
import Header from '../../components/Header/Header.jsx'
import Container from '../../components/Container/Container.jsx'
import Footer from '../../components/Footer/Footer.jsx'

function Favorites() {
    return(
        <>
            <Header/>
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    Lista de favs
                </section>
            </Container>
            <Footer/>
        </>
    );   
}

export default Favorites;