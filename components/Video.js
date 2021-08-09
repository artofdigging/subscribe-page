import react from 'react'



function Video(){
    return (
        <video autoPlay muted loop id="myVideo">
            <source src="/me.mp4" type="video/mp4" />
        </video>
    )
}

export default Video;