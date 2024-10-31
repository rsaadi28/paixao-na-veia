import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
                            <Image
                    src="/images/logo_horizontal_branca.png"
                    width={110}
                    height={110}
                    alt='Logo Paixão na veia' 
                    priority={true}/>
            <nav>
                <button className={`${styles.hamburguer} ${isOpen ? styles.active : ' '}`} onClick={toggleMenu}></button>
                <ul className={isOpen ? styles.open : ' '}>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li>Como doar</li>
                    <li>Competições</li>
                    <li>Ranking</li>
                    <li>Depoimentos</li>
                    <li>Eventos</li>
                    <li>Galeria</li>
                    <li>Contato</li>
                    <li>FAQ</li>
                </ul>
            </nav>
        </header>
    )
}