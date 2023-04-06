import React from 'react'
import './gmaps.css'

const Gmaps = () => {
    return (
        <div class="container">
        <div id="contact" class="contact-title">
            <h1>Kontak Kami</h1>
        </div>
        <div class="contact">
            <div class="map-and-contact">
                <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.09125900489903!2d107.63030301974595!3d-6.922836332179734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1680762747181!5m2!1sen!2sid"></iframe>
            </div>
            <div class="contact-list-container">
                <ul class="contact-list">
                    <li>Alamat Kos</li>
                    <li>Jl. Siliwangi No.41, Sawah Gede, Cianjur, 43212</li>
                </ul>
                    <ul class="contact-list">
                        <li>instagram</li>
                        <li><a class="contact-link" href="https://www.instagram.com/nazwnhilmi">@nazwnhilmi</a></li>
                    </ul>
                    <ul class="contact-list">
                        <li>Email</li>
                        <li><a class="contact-link" href="mailto:nhr.bzl@gmail.com?cc=&bcc=&subject=&body=">nhr.bzl@gmail.com</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Gmaps
