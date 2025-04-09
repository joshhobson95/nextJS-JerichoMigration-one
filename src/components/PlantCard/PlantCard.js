import React from "react";
import styles from "./plantcard.module.css";

function PlantCard({ plant }) {
  return (
    <div className={styles.plant_card}>
      <div className={styles.plant_card_top}>
        <img className={styles.plant_card_image} src={plant.image} alt={plant.name} />
        <h2>{plant.name}</h2>
        <h3>({plant.scientificName})</h3>
        <div className={styles.plant_card_paragraph}>
          <p>{plant.description}</p>
        </div>
      </div>
      <div className={styles.plant_card_bottom}>
        <div className={styles.card_icon_sub_section}>
          <img className={styles.sun_icon} src={plant.sunIcon} alt="Sun" />
          <p>{plant.sunRequirement}</p>
        </div>
        <div className={styles.card_icon_sub_section}>
          <img className={styles.water_icon} src={plant.waterIcon} alt="Water" />
          <p>{plant.waterRequirement}</p>
        </div>
        <div className={styles.card_icon_sub_section_size}>
          <p>Zone Hardiness:<br />{plant.hardinessZones}</p>
        </div>
        <div className={styles.card_icon_sub_section}>
          <p>Mature Size:<br />{plant.matureSize}</p>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
