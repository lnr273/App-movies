import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import erro404 from './erro404.png'
import styles from './Page404.module.css';

function Page404() {
    return(
        <>
            <Header/>
            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado.</h2>
                <img src={erro404} alt="Logo de página não localizada" />
            </section>
            <Footer/>
        </>
        
    );
}

export default Page404;