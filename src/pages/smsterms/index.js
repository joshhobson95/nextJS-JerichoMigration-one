import React from 'react'
import styles from './smsterms.module.css'
import Link from 'next/link'
import Head from 'next/head'

function SMS() {
  return (
    <div className={styles.sms_terms_outer}>
      <Head>
        <title>SMS Terms - Jericho Nursery</title>
        <meta name="description" content="Read the terms and conditions for receiving SMS messages from Jericho Nursery. Learn about message frequency, data rates, and how to opt out at any time." />
        <meta property="og:title" content="SMS Terms & Conditions - Jericho Nursery" />
        <meta property="og:description" content="Review our SMS program terms and conditions. Understand how we handle messaging, privacy, and your options for opting in or out of Jericho Nursery text alerts." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
      </Head>

<div className={styles.sms_terms_inner}>

<h1>
Jericho Nursery SMS Terms and Conditions
</h1>

<ul>
<li>
    1. Jericho Text Alerts are sent to individuals who have subscribed to receive them, and provide alerts to
pop up sales, major inventory deliveries, and other timely events. The system also may be used to
confirm appointments and remind customers of upcoming events they registered to attend.
</li>
<li>
2. You can cancel the SMS service at any time. Simply text &quot;STOP&quot; in reply to any text message. Upon
sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS. Following this confirmation, you will
no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume
sending SMS messages to you.
</li>
<li>
3. If you experience issues with the messaging program, reply with the keyword HELP for more assistance,
or reach out directly to manager@jerichonursery.com
</li>
<li>
4. Carriers are not liable for delayed or undelivered messages.
</li>
<li>
5. As always, message and data rates may apply for messages sent to you from us and to us from you.
You may receive up to 3 messages a month. For questions about your text plan or data plan, contact
your wireless provider.
</li>
<li>
6. For privacy-related inquiries, please refer to our privacy policy: <Link href='/privacypolicy'>here</Link>.
</li>

</ul>
</div>

    </div>
  )
}

export default SMS;