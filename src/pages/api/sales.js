// pages/api/sales.js

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://jericho-server-eb9k.onrender.com/sales");
    const salesData = response.data;

    // Send the sales data as the API response
    res.status(200).json(salesData);
  } catch (error) {
    console.error("Error fetching sales data:", error);
    res.status(500).json({ message: "Error fetching sales data" });
  }
}
