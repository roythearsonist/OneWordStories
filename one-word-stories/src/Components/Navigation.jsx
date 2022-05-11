 import logo from '../logo.svg';
 import './ComponentCSS/nav.css';
 function Navigation() {
  return (
    <div className="nav-container">     
    <img src={logo} alt="logo" className="logo" />
        <div className="topnav">
          <a className="active" href="/">Home</a>
        <a href="https://github.com/CharlieS1103/OneWordStories" rel="noreferrer" target="_blank">Github</a>
          <a href="contact">Contact</a>
          <a href="about">About</a>
        </div>
        </div>
  );
 }
 export default Navigation;