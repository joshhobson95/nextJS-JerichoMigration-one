import { useState } from 'react';
import styles from './timetable.module.css';

export default function Timetable() {
  const [expanded, setExpanded] = useState(false);

  

  const rows = [
    ['June 2–6', 'Mon–Fri', '8:00 AM – 5:00 PM'],
    ['June 7', 'Saturday', '8:00 AM – 5:00 PM'],
    ['June 8', 'Sunday', '11:00 AM – 5:00 PM'],
    ['New Weekday Hours Starting June 9th ', 'Mon–Fri', '8:00 AM – 4:00 PM'],
    ['New Weekend Hours Starting June 14th', 'Saturday', '8:00 AM – 5:00 PM'],
    ['New Weekend Hours Starting June 15th', 'Sunday', '11:00 AM – 5:00 PM']
  ];

  const visibleRows = expanded ? rows : rows.slice(0, 4);

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
            <th>Date</th>
            <th>Day</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map(([date, day, hours], i) => (
            <tr key={i}>
              <td>{date}</td>
              <td>{day}</td>
              <td>{hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className={styles.toggle_button} onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Show New Hours'}
      </button>
    </div>

    <div className={styles.address}>
      <h3>Address: 101 Alameda Blvd NW, Albuquerque, NM 87114</h3>
    </div>




    </div>

    
  );
}
