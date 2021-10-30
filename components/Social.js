import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Social.module.css';

function Social() {
    return (
        <React.Fragment>
            <ul className={styles.socialUL}>
                <li className={styles.socialLI}>
                    <a href="https://www.facebook.com/Art-of-Digging-351486369272384" target="_blank">
                        <Image className={styles.invertSVG} src="/facebook.svg" width="40" height="40" />
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://twitter.com/artofdigging" target="_blank">
                        <Image className={styles.invertSVG} src="/twitter.svg" width="40" height="40" />        
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://instagram.com/artofdigging" target="_blank">
                        <Image className={styles.invertSVG} src="/instagram.svg" width="40" height="40" />
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://www.twitch.tv/artofdigging" target="_blank">
                        <Image className={styles.invertSVG} src="/twitch.svg" width="40" height="40" />
                    </a>
                </li>
                <li className={styles.socialLI}>
                    <a href="https://www.youtube.com/channel/UCznpzLfbfSj6Pctxw80vkGw" target="_blank">
                        <Image className={styles.invertSVG} src="/youtube.svg" width="40" height="40" />
                    </a>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Social;