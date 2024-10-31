import styles from './styles.module.css';
import { forwardRef } from "react";

function About({}, ref){
    return <section className={styles.section} ref={ref}>About</section>
}

export default forwardRef(About);