import React from 'react';
import FlipCountdown from '@rumess/react-flip-countdown';

function Countdown() {
    return (
        <React.Fragment>
          <FlipCountdown
            dayTitle='Days'
            hourTitle='Hours'
            minuteTitle='Minutes'
            secondTitle='Seconds'
            hideYear
            hideMonth
            endAt={'2021-09-04 01:26:58'} // Date/Time
           />
        </React.Fragment>
    )
}

export default Countdown;