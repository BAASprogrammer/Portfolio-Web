import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const SocialLinks = () => {
    return (
        <div className='flex gap-2 justify-center items-center mt-2 md:mt-4'>
            <a className='btn-social' href="https://github.com/BAASprogrammer" title='GitHub' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
            </a>
            <a className='btn-social' href="https://linkedin.com/in/barbara-arias-salvo" title='LinkedIn' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
            </a>
            <a className='btn-social' href="mailto:barbara.arias.salvo@gmail.com" title='Email' target='_blank' rel='noopener noreferrer'>
                <FaEnvelope />
            </a>
        </div>
    );
}