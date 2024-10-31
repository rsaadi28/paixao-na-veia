import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Header({menuItens,scrollToSection}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
                            <Image
                    src="/images/logo_horizontal_branca.png"
                    width={100}
                    height={50.46296296296296}
                    alt='Logo Paixão na veia' 
                    priority={true}/>
            <nav>
                <button className={`${styles.hamburguer} ${isOpen ? styles.active : ' '}`} onClick={toggleMenu}></button>
                <ul className={isOpen ? styles.open : ' '}>
                    {
                        Object.entries(menuItens).map(([key, item]) => (
                            <li key={key} onClick={() => scrollToSection(item.ref)}>
                                {item.name}
                            </li>
                        ))
                    }                    
                </ul>
            </nav>
        </header>
    )
}