import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';

function Footer(){
    return(
        <div className='footer'>
            <section>
                <h4>Mehwish Hanif</h4>
                <div className='about-links'>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/MehwishHanif"><FaGithub /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mehwish-hanif-01b3686a/"><FaLinkedin /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://mehwishhanif.github.io/" ><AiOutlineGlobal /></a>
                </div>
            </section>
            <div className='footer-copyright'>© 2025 Mehwish Hanif. All rights reserved.</div>
        </div>        
    )
}

export default Footer;