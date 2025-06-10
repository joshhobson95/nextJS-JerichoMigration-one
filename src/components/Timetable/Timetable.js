import { useState } from 'react';
import styles from './timetable.module.css';

export default function Timetable() {


  

  const rows = [
    [ 'Monday-Friday', '8:00 AM – 4:00 PM'],
    [ 'Saturday', '8:00 AM – 5:00 PM'],
    [ 'Sunday', '11:00 AM – 5:00 PM']
  ];


  return (
    <div className={styles.timetable_wrapper}>

      <div className={styles.phone}>
        <h3>Phone: (505) 899-7555
        </h3>
      </div>
 
  <div className={styles.table_container}>
      <table className={styles.schedule_table}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([day, hours], i) => (
            <tr key={i}>
              <td>{day}</td>
              <td>{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

    <div className={styles.address}>
      <h3>Address: 101 Alameda Blvd NW, Albuquerque, NM 87114</h3>
    </div>




    </div>

    
  );
}
