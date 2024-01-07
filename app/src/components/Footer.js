import useDestiny from '@/hooks/useDestiny';
import style from '@/styles/Footer.module.css';
import Link from 'next/link';
export default function Footer() {

    const { destinys } = useDestiny();


    return (
        <footer className={`py-5 d-flex flex-column align-items-center ${style.footer} ${destinys ? null : style.float} `}>
            <div className="">
                Feito por:
                <a
                    className="text-decoration-none text-dark"
                    href="https://www.linkedin.com/in/maicon-nunes/"
                    target="_blank"
                >
                    Maicon Nunes
                    <img width="40px" src="images/linkedin.png" alt="icone linkedin" />
                </a>
            </div>
        </footer>

    )
}
