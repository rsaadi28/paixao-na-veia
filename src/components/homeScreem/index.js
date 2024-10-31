import styles from './styles.module.css';
import { useRef } from "react";
import About from "../about";
import Header from "../header";

export function HomeScreem() {
    const menuItens = {
         about: { name: 'Sobre', ref: useRef(null) },
         howToDonate: {name: 'Como doar', ref: useRef(null)},
         competitions: {name: 'Competições', ref: useRef(null)},
         ranking: {name: 'Ranking', ref: useRef(null)},
         testimonials: {name: 'Depoimentos', ref: useRef(null)},
         events: {name: 'Eventos', ref: useRef(null)},
         gallery: {name: 'Galeria', ref: useRef(null)},
         contact: {name: 'Contato', ref: useRef(null)},
         faq: {name: 'FAQ', ref: useRef(null)},
    }

    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={styles.container}>
            <header>
                <Header menuItens={menuItens} scrollToSection={scrollToSection} />
            </header>
            <main>
                <About ref={menuItens.about.ref} />
            </main>
            <footer>

            </footer>
        </div>
    )
}

