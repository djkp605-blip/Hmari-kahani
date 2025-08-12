import axios from 'axios'

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.dhan.co/screener-endpoint', {
      headers: {
        'Client-Id': process.env.DHAN_CLIENT_ID,
        'Access-Token': process.env.DHAN_ACCESS_TOKEN
      }
    })
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
