// pages/api/promotions.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://jericho-server-eb9k.onrender.com/promotions");
    const promotionsData = response.data;

    // Send the promotions data as the API response
    res.status(200).json(promotionsData);
  } catch (error) {
    console.error("Error fetching promotions data:", error);
    res.status(500).json({ message: "Error fetching promotions data" });
  }
}
