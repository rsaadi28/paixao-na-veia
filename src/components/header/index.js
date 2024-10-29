import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <Image 
            src="/images/logo_horizontal_branca.png" 
            width={110}
            height={110}
            alt='Logo Paixão na veia'/>
            <ul>
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
        </header>
    )
}