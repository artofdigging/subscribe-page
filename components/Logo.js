import React from 'react';
import Image from 'next/image';

function Logo() {
    return (
        <Image src="/logo.svg" alt="Art Of Digging Logo" height="500" width="500" layout="responsive"/>
    )
}

export default Logo;