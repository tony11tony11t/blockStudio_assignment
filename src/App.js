import './styles/global.scss';
import Main from './components/blocks/main/main.components';
import Home from './components/blocks/home/home.component';
import Video from './components/blocks/video/video.component';
import CardList from './components/blocks/cardList/cardList.component';
import Footer from './components/footer/footer.component';
import Parallax from './components/parallax/parallax.component';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  AOS.init();
  console.log(window.innerWidth * 0.2)
  const parallaxNode = [{
    pos : {
      top:`${window.innerWidth > 1200 ? 877 : 670}px`,
      left:`${window.innerWidth > 1200 ? 83 : -20}px`
    },
    width : 90,
    height: 90,
    level : 10
  },{
    pos : {
      top:'1288px',
      right:'39px'
    },
    width : 39,
    height: 39,
    level : 100
  },{
    pos : {
      top:'2619px',
      left:`${(window.innerWidth - 1200) / 2 - 20}px`
    },
    width : 30,
    height: 138,
    level : 30,
    mobile:false
  },{
    pos : {
      top:'2669px',
      left:'38%'
    },
    width : 30,
    height: 138,
    level : 50,
    mobile:false
  },{
    pos : {
      top:'3062px',
      right:`${(window.innerWidth - 1200) / 2 + 380}px`
    },
    width : 73,
    height: 73,
    level : 10,
    mobile:false
  }]

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
