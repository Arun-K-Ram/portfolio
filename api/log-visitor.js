export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  try {
    const { location } = req.body;

    console.log('Visitor logged:', location);

    // You can later integrate with Google Sheets or a DB here

    return res.status(200).json({ status: 'success', message: 'Visitor logged', location });
  } catch (error) {
    console.error('Logging error:', error);
    return res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}
