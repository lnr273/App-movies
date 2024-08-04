import Banner from '../../components/Banner/Banner.jsx';
import Card from '../../components/Card/Card.jsx';
import Category, { categories, filterCategory } from '../../components/Category/Category.jsx';
import Container from '../../components/Container/Container.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';

function Home() {

  return(
    <>
      <Header/>
      <Banner img="favoritos"/>
      <Container>

        {
          categories.map((category, index) => (
            <Category category={category} key={index}>
              <Carousel>
                { filterCategory(index).map(video => (
                  <Card id={video.id} key={video.id} />
                ))}
              </Carousel>
            </Category>
          ))
        }
        
      </Container>
      <Footer/>
    </>
  );
}

export default Home