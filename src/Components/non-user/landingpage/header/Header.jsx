import React, { Component } from 'react';
import Logo from '../../../../assets/TravelPal.png';
import './style.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    render() {
        return (
            <header className='header container'>
                <Link to='/'>
                    <main className="header_logo">               
                        <div className="header_Imglogo">
                            <img src={Logo} alt="Logo" />                      
                        </div>
                        <span className='text'>Travel Pal</span>              
                    </main>
                </Link>
                <section className="header_nav">
                    <nav className="header_navbar">
                        <ul id="nav_nab" className={this.state.clicked ? 'nav_nab active' : 'nav_nab'}>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/resources'>Resources</Link></li>
                            <li><Link to='/support'>Help & Support</Link></li>
                        </ul>                    
                    </nav>
                </section>
                <section className="header_btn" >
                    <div id="btn_main"  className={this.state.clicked ? 'btn_main active' : 'btn_main'}>
                        <Link to='/login'><button className='login_btn'>Log In</button></Link>
                        <Link to='/register'><button className='reg_btn'>Sign Up</button></Link>
                    </div>
                </section>
                
                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </header>
        );
    }
}

export default Header;
