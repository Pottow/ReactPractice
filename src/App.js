import './App.css';
import { Link, Outlet } from "react-router-dom";


function Home(){
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My website</h1>
      <h1>learn react</h1>
    </div>
  )
}

export function About(){
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Aboiut us</h1>
      <Outlet />
    </div>
  )
}

export function History() {
  return(
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function Contact(){
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact us</h1>
    </div>
  )
}

export function App() {

  return (
   <Home />
  );
}
