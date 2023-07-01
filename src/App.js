import './App.css';
import {Navbar, Header, 
  Features, Download, 
  Subscribe, Faq, 
  Footer} from "./components/index.js";


function Home(){
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Header/> 
       
      </header>

     
      <Features/>
        <Download/>
        <Subscribe/>
        <Faq/>
      <Footer/>
    </main>
  )
}

export function App() {

  return (
   <Home />
  );
}
