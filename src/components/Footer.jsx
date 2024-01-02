import { socials } from "../constants";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <hr class="opacity-25  width:100px; margin: auto;"></hr>
            <br />
            <div className='flex flex-wrap justify-center gap-4'>
                {socials.map((social) => (
                    <div key={social.name}>
                        <a
                            href={social.url}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={social.icon}
                                alt={social.name}
                                className='h-12 w-12'
                                onClick={() => {
                                    window.open(social.link, "_blank");
                                 }}
                            />
                        </a>
                    </div>
                ))}
            </div>
            <br />          
            <p className='text-secondary text-white'
                style={{ textAlign: 'center' }}
            >
                {`Copyright © Vignesh Saravanakumar ${year}`}
            </p>

        </footer>
    );
}

export default Footer;