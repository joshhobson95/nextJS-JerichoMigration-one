// pages/api/blog/[id].js
import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  console.log('⚙️  API called with id =', id);

  try {
    const response = await axios.get(`https://jericho-server-eb9k.onrender.com/blog/${id}`);
    console.log('✅  Backend response status:', response.status);
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('❌  Error fetching from backend:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    return res
      .status(error.response?.status || 500)
      .json({ message: error.response?.data?.message || 'Error fetching blog' });
  }
}
