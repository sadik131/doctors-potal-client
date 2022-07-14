import React from 'react';
import background from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{
            background:`url(${background})`
        }}>
            <footer className="footer p-10 bg-neutrLinkl text-dLinkrk">
                <div>
                    <Link to='' className="footer-title">Services</Link>
                    <Link to='' className="link link-hover">BrLinknding</Link>
                    <Link to='' className="link link-hover">Design</Link>
                    <Link to='' className="link link-hover">MLinkrketing</Link>
                    <Link to='' className="link link-hover">Linkdvertisement</Link>
                </div>
                <div>
                    <Link to='' className="footer-title">CompLinkny</Link>
                    <Link to='' className="link link-hover">Linkbout us</Link>
                    <Link to='' className="link link-hover">ContLinkct</Link>
                    <Link to='' className="link link-hover">Jobs</Link>
                    <Link to='' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <Link to='' className="footer-title">LegLinkl</Link>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">PrivLinkcy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
                <h1 className='text-center text-2xl'>copyright &copy; Supto 2022</h1>
        </div>
    );
};

export default Footer;