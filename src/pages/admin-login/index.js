import React from 'react'
import styles from './admin.module.css'
import Link from 'next/link'
import Head from 'next/head'

function index() {
  return (
    <div className={styles.admin_container}>
      <Head>
      <title>Admin Dashboard | Jericho Nursery</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="description" content="Restricted access: Admin dashboard for managing Jericho Nursery content." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

        <div className={styles.admin_inner}>
        <h1>Redirect to AdminPortal</h1>

        <a href='https://jericho-admin-portal.onrender.com/' target="_blank">
        Admin Portal
        </a>
        </div>
      
    </div>
  )
}

export default index
