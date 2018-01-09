import React, { Component } from 'react';
import logo from './header-bg.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="navbar">
            <div className="title Kaushan-Script">Start Bootstrap</div>
            <div className="nav-collapse">
              <ul className="hide-for-smaller-display">
                <li className="menu-li">SERVICES</li>
                <li className="menu-li">PORTFOLIO</li>
                <li className="menu-li">ABOUT</li>
                <li className="menu-li">TEAM</li>
                <li className="menu-li">CONTACT</li>
              </ul>
              <button className="show-for-smaller-display">Menu <i className="fa fa-bars"></i></button>
            </div>
        </div>
        <header className="masthead">
          <div className="container">
            <div className="intro">
              <div className="">Welcome To Our Studio!</div>
              <div className="intro-heading">It's Nice To Meet You</div>
              <a className="btn btn-primary btn-xl" href="#services">Tell Me More</a>
            </div>
          </div>
        </header>
        <section className="services">
        <div className="container">
          <div className="">
            <div className="center">
              <h2 className="section-heading">Services</h2>
              <h3 className="light-gray">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x yellow"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="">E-Commerce</h4>
              <p className="light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="column">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x yellow"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="">Responsive Design</h4>
              <p className="light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="column">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x yellow"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="">Web Security</h4>
              <p className="light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
    );
  }
}

export default App;
