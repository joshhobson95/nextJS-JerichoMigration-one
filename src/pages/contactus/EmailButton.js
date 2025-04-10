'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './emailbutton.module.css';

// Dynamically import ReCAPTCHA to disable SSR
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

function EmailButton() {
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaChange = (response) => {
    setIsCaptchaVerified(true);
  };

  const handleShowCaptcha = () => {
    setIsCaptchaVisible(true);
  };

  const handleSendEmail = () => {
    if (isCaptchaVerified) {
      const recipient = 'manager@jerichonursery.com';
      const subject = 'Customer Inquiry';
      const body = 'Hi Gardening Angel,';
      const mailToUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailToUrl);
    } else {
      alert('Please complete the CAPTCHA challenge.');
    }
  };

  return (
    <div className={styles.email_container}> 
      {isCaptchaVisible ? (
        <div className={styles.captcha_container}>
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          )}
        </div>
      ) : (
        <button onClick={handleShowCaptcha}>Compose Email</button>
      )}

      {isCaptchaVisible && (
        <button onClick={handleSendEmail} disabled={!isCaptchaVerified}>
          Send Email
        </button>
      )}
    </div>
  );
}

export default EmailButton;
