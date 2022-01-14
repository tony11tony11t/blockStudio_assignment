import './styles/global.scss';
import Main from './components/blocks/main/main.components';
import Home from './components/blocks/home/home.component';
import Video from './components/blocks/video/video.component';
import CardList from './components/blocks/cardList/cardList.component';
import Footer from './components/footer/footer.component';
import Parallax from './components/parallax/parallax.component';
import nodeData from './parallaxNode'
import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  const BREAK_POINT   = 1200;
  const parallaxNode  = nodeData[window.innerWidth > BREAK_POINT ? "desktop" : "mobile"]

  AOS.init();

  return (
    <div>
      <Main/>
      <Home />
      <Video />
      <CardList />
      <Footer />
      {
        parallaxNode.map((attr) => (
          <Parallax {...attr}/>
        ))
      }
    </div>
  );
}

export default App;
