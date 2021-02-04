import React, { useRef, useState } from 'react';
import subscribe from '../pages/api/subscribe';
import styles from '../styles/Subscribe.module.css';

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Thank you for subscribing!');
  };

  return (
    <div className={styles.subscribeForm} >
        <div className={styles.subscribeTitle}>ART OF DIGGING</div>
        <div className={ `${styles.subscribeSubTitle}`}>Subscribe for more information on when the site goes live!</div>
        <form onSubmit={subscribe} className={ `uk-grid-small uk-grid uk-grid-stack`} data-uk-grid>

            {message ? (<div className="uk-width-3-4@s uk-text-left">{message}</div>) : (
                <React.Fragment>
                    <div className="uk-width-3-4@s">
                        <input
                            id="email-input"
                            name="email"
                            placeholder="Enter your email"
                            ref={inputEl}
                            required
                            type="email"
                            className="uk-input"
                        />
                    </div>
                
                    <div className="uk-width-1-4@s">
                        <button type="submit" className={`${styles.subscribeBtn} uk-button uk-button-default`}>{'SUBSCRIBE'}</button>
                    </div> 
                </React.Fragment>
            )}
        </form>
    </div>
  );
}

export default Subscribe;