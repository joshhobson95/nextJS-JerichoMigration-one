import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://jericho-server-eb9k.onrender.com/blog");
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching blog list:", error);
    res.status(500).json({ message: "Error fetching blogs" });
  }
}
