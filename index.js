const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/receive-order', (req, res) => {
  const order = req.body;
  if (!order || !order.order_id || !order.shop_id) {
    return res.status(400).json({ error: 'Missing order data' });
  }
  console.log("🆕 Received order:", order);
  res.status(200).json({ success: true });
});

app.get('/', (req, res) => {
  res.send("✅ Server working");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
