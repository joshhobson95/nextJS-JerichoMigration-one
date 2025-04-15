'use client';
import React from 'react';
import FlipCard from './FlipCard';
import seasonalTasks from './seasonalTasks'; 
import styles from './FC.module.css';

function FC() {
  return (
    <div className={styles.mg_outer}>
      <div className={styles.month_grid}>
        <div className={styles.month_row}>
          <div className={styles.jan_shell}>
            <FlipCard id='jan' name='January' tasks={seasonalTasks.jan} />
          </div>
          <div className={styles.feb_shell}>
            <FlipCard id='feb' name='February' tasks={seasonalTasks.feb} />
          </div>
          <div className={styles.mar_shell}>
            <FlipCard id='mar' name='March' tasks={seasonalTasks.mar} />
          </div>
          <div className={styles.apr_shell}>
            <FlipCard id='apr' name='April' tasks={seasonalTasks.apr} />
          </div>
          <div className={styles.may_shell}>
            <FlipCard id='apr' name='May' tasks={seasonalTasks.may} />
          </div>
          <div className={styles.jun_shell}>
            <FlipCard id='apr' name='June' tasks={seasonalTasks.jun} />
          </div>
          <div className={styles.jul_shell}>
            <FlipCard id='apr' name='July' tasks={seasonalTasks.jul} />
          </div>
          <div className={styles.aug_shell}>
            <FlipCard id='apr' name='August' tasks={seasonalTasks.aug} />
          </div>
          <div className={styles.sep_shell}>
            <FlipCard id='apr' name='September' tasks={seasonalTasks.sep} />
          </div>
          <div className={styles.oct_shell}>
            <FlipCard id='apr' name='October' tasks={seasonalTasks.oct} />
          </div>
          <div className={styles.nov_shell}>
            <FlipCard id='apr' name='November' tasks={seasonalTasks.nov} />
          </div>
          <div className={styles.dec_shell}>
            <FlipCard id='apr' name='December' tasks={seasonalTasks.dec} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FC;
