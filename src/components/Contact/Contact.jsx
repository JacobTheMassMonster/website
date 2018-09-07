import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import './Contact.css';


const Contact = () => (
    <div className='Contact-container'>
        <div className='Contact-item'>
            <a href="mailto:charleschanlok@gmail.com" rel="noopener noreferrer" target="_blank" >
                <FontAwesomeIcon icon={faEnvelope} size="4x" /><p>charleschanlok@gmail.com</p>
            </a>
            
        </div>
        <div className='Contact-item'>
            <a href="https://github.com/charleschanlok" rel="noopener noreferrer" target="_blank" >
                <FontAwesomeIcon icon={faGithub} size="4x" /><p>https://github.com/charleschanlok</p>
            </a>

        </div>

    </div>
);

export default Contact;