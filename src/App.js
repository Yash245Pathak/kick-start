import './App.css';
import Bestseller from './components/BestSeller/Bestseller';
import Body from './components/body/Body';
import Brands from './components/Brands/Brands';
import Feature from './components/features/Feature';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import New from './components/newArrivals/New';
import Why from './components/why/Why';

function App() {
  return (
    <>
      <Header/>
      <Body/>
      <Feature/>
      <Bestseller/>
      <New/>
      <Why/>
      <Brands/>
      <Footer/>
    </>
  );
}

export default App;
