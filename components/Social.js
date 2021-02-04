import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Social.module.css';

function Social() {
    return (
        <React.Fragment>
            <ul className={styles.socialUL}>
                <li className={styles.socialLI}>
                    <a href="https://www.facebook.com/artofdigging">
                        <Image className={styles.invertSVG} src="/facebook.svg" width="20" height="20" />
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://twitter.com/artofdigging">
                        <Image className={styles.invertSVG} src="/twitter.svg" width="20" height="20" />        
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://instagram.com/artofdigging">
                        <Image className={styles.invertSVG} src="/instagram.svg" width="20" height="20" />
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://www.twitch.tv/artofdigging">
                        <Image className={styles.invertSVG} src="/twitch.svg" width="20" height="20" />
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://www.youtube.com/artofdigging">
                        <Image className={styles.invertSVG} src="/youtube.svg" width="20" height="20" />
                    </a>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Social;