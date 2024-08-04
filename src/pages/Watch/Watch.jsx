import styles from './Watch.module.css';
import Header from '../../components/Header/Header.jsx';
import Container from '../../components/Container/Container.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useParams } from 'react-router-dom';
import videos from '../../json/videos.json';
import Page404 from '../Page404/Page404.jsx';

function Watch() {
    const params = useParams()
    const video = videos.find((video) => video.id === params.id)
    if (!video) return <Page404/>

    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <iframe 
                        width="854" 
                        height="480" 
                        src={ `https://www.youtube.com/embed/${video.id}` }
                        title="YouTube video player" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Watch;