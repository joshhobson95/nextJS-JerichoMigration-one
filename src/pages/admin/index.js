import React from 'react'
import styles from './admin.module.css'
import Link from 'next/link'

function index() {
  return (
    <div className={styles.admin_container}>

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
