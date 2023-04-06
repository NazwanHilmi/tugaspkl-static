import React from 'react'
import profile from '../../img/profile.jpg'
import './header.css'
import '../../style/homepage.css'
import one from '../../img/1.png'
import two from '../../img/2.png'
import three from '../../img/3.png'

const Header = () => {
    return (
        <div>
            <section className="jumbotron text-center">
                <img src={profile} className='rounded-circle image-thumbnail' alt="photo-profile" width={200} />
                <h1 className="display-4">Nazwan Hilmi</h1>
                <p className="lead">High School Students</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L26.7,170.7C53.3,181,107,203,160,197.3C213.3,192,267,160,320,133.3C373.3,107,427,85,480,96C533.3,107,587,149,640,160C693.3,171,747,149,800,128C853.3,107,907,85,960,101.3C1013.3,117,1067,171,1120,186.7C1173.3,203,1227,181,1280,176C1333.3,171,1387,181,1413,186.7L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </section>

            {/* About */}
            <section className="about">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-4">
                            <p>My name is Nazwan Hilmi, I am 17 years old, I went to SMKN 1 Cianjur in the RPL department, I have learned several programming languages and will continue to master them</p>
                        </div>
                        <div className="col-4">
                            <p>I am currently doing fieldwork practice in a company called PT. LSKK located on Jl. Pelajar Pejuang of Bandung province</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Card */}
            <section className="myCard">
                <div class="container card-style mt-5">
                    <h1 class="text-center mb-4">My Profile</h1>
                    <div class="row justify-content-center">
                    <div class="col-md-3">
                    <div class="card card-modify">
                        <div class="card-body">
                            <h5 class="card-title text-center">Education</h5>
                            <p class="card-text">I am currently attending SMKN 1 Cianjur, Grade 11 RPL Department, I am a graduate of smpn 2 karangtengah.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card card-modify">
                        <div class="card-body">
                            <h5 class="card-title text-center">Biografi</h5>
                            <p class="card-text">I am the first of 3 children, I was born and live in Cianjur, West Java, I have an interest in technology and computers.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                    <div class="card card-modify">
                        <div class="card-body">
                            <h5 class="card-title text-center">Keterampilan</h5>
                            <p class="card-text">I have the skills to master basic javascript, php, mysql, bootstrap, I also understand basic computer components.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* Carousel */}
        <div className='container'>
            <div className='row carousel-style'>
            <div className='carousel-title text-center'>
            <h1>My Project</h1>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={one} className="d-block w-100" alt="website portfolio"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Website Portfolio</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={two} className="d-block w-100" alt="website store"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Website Store</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={three} className="d-block w-100" alt="website school"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Website School</h5>
                    </div>
                </div>
            </div>
                
                <button className="carousel-control-prev prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header