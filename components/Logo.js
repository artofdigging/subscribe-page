import React from 'react';
import Image from 'next/image';
import styles from '../styles/Logo.module.css';

function Logo() {
    return (
        <Image src="/logo.svg" alt="Art Of Digging Logo" height="100" width="100" className={styles.logo}/>
    )
}

export default Logo;