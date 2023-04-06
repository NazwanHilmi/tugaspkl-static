import React from 'react'
import '../../style/homepage.css'
import './navbar.css'
import { Component } from "react";

    export class Navbar extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const navbar = document.querySelector('.navigation');
        const scrolled = window.scrollY > navbar.offsetTop;

        if (scrolled) {
        navbar.classList.add('scrolled');
        } else {
        navbar.classList.remove('scrolled');
        }
    }

    render() {
        return (
        <nav className="navigations">
            {
                    <header id="beranda">
                    <section className="navigation">
                        <div class="container">
                            <div class="box-navigation">
                                <div class="box">
                                    <h1>Portfolio</h1>
                                </div>
                                <div class="box menu-nav">
                                <ul>
                                    <li><a href="#beranda">Beranda</a></li>
                                    <li><a href="#profil">Profil</a></li>
                                    <li><a href="#contact">Kontak</a></li>
                                </ul>
                            </div>
                            {/* <div class="box menu-bar">
                                <i class="fa-sharp fa-solid fa-bars"></i>
                            </div> */}
                        </div>
                        
                    </div>
                </section>
                </header>
            }
        </nav>
        );
    }
}

export default Navbar