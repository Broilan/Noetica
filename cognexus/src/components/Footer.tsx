import React from 'react';
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-five fixed bottom-0 left-0 w-full">

                <div className="flex text-sm justify-between p-2 text-white space-x-5">

                    <ol className='flex space-x-4 font-bold'>
                        <li>About Us</li>
                        <li>.</li>
                        <li>Research</li>
                        <li>.</li>
                        <li>Psychometrics</li>
                        <li>.</li>
                        <li>Contact</li>
                    </ol>

                    <div className='flex space-x-4'> 
                        <FaDiscord/>
                        <FaGithub/>
                        <CiLinkedin/>
                    </div>

                </div>

            </footer>
        </>
    );
};

export default Footer;