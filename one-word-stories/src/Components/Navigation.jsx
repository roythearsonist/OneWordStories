 import logo from '../logo.svg';
 import './ComponentCSS/nav.css';
 function Navigation() {
  return (
        <div class="topnav">
          <img src={logo} alt="logo" class="logo" />
          <a class="active" href="/">Home</a>
        <a href="https://github.com/CharlieS1103/OneWordStories" rel="noreferrer" target="_blank">Github</a>
          <a href="contact">Contact</a>
          <a href="about">About</a>
          <p><h1>One Word Stories</h1></p>
        </div>
  );
 }
 export default Navigation;