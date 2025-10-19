'use client';
import React from 'react';
import styles from './staffpictures.module.css'




function StaffPictures() {

    const staff_pics = [
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/Indian_Hawthorn_Bloom.jpg",
            name: 'Richard',
            position: 'Co-Owner'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/alba-lilac.jpg",
            name: 'Jennifer',
            position: 'Co-Owner'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/apache-plume-1937218_1920.jpg",
            name: 'Jesse',
            position: 'Manager'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/aphrodite-ROS.jpg",
            name: 'Alfredo',
            position: 'Gardening Angel'
            
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/autumn-sage.jpg",
            name: 'Pam',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/butterflybush-dark-purple.jpg",
            name: 'Kiana',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/catawba-crape.jpg",
            name: 'Scott',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/crape-pink.jpg",
            name: 'Chantelle',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/leucophyllum-4932726_1920.jpg",
            name: 'Kelly',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/pink-potentilla.jpg",
            name: 'Heather',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/redheart-ROS.jpg",
            name: 'Dolly',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/spanish-broom.jpg",
            name: 'Isaac',
            position: 'Gardening Angel'
        },
        {
            src: "https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Things%20we%20Carry/Shrubs/flowerings/tinkerbell-lilac.jpg",
            name: 'Kendra',
            position: 'Gardening Angel'
        },

     
    ]


  return (
    <div className={styles.staff_pics_grid}>
      {staff_pics.map((picture, index) => (
        <div key={index} className={styles.staff_pic}>
          <img src={picture.src} alt='Gardening Angel, Jericho Nursery' className={styles.staff_pics} />
          <h6>{picture.name}</h6>
          <span>{picture.position}</span>
        </div>
      ))}



     
    </div>
  );
}

export default StaffPictures;
