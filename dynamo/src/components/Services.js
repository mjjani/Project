/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import telegram from './images/telegram.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';
import whatsapp from './images/whatsapp.png';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>How to Join us</h1>
            <h5>Clck on one of the below link</h5>
            <br />

            <ul>
                <h5>
                    <li>
                        <Link to={'https://t.me/+6GxpQPSAND5iMmY1'}>Telegram&nbsp;<img src={telegram}/></Link>
                    </li>
                    <li>
                        <Link to={'#'}>Instragram&nbsp;<img src={instagram}/></Link>
                    </li>
                    <li>
                        <Link to={'https://www.youtube.com/@chauhanpruthviraj5153'}>YouTube&nbsp;<img src={youtube}/></Link>
                    </li>
                    <li>
                        <Link to={'https://chat.whatsapp.com/DQkOmlFd7Ez1wi2h2eFQHd'}>Whatsapp&nbsp;<img src={whatsapp}/></Link>
                    </li>
                </h5>
            </ul>
        </div>
    );
};

export default Services;
