const express = require('express');
const cors = require('cors'); // لتفعيل CORS
const app = express();

const PORT = process.env.PORT || 3000;

// تفعيل CORS لكل الدومينات (أو حدد نطاق معين في السطر هذا لو حبيت)
app.use(cors());

// لتفسير JSON المرسل في body
app.use(express.json());

// Endpoint لتلقي الطلبات من JavaScript Snippet
app.post('/api/receive-order', (req, res) => {
  const order = req.body;

  // تحقق مبدئي من البيانات
  if (!order || !order.order_id || !order.shop_id) {
    return res.status(400).json({ error: 'Missing order data' });
  }

  console.log("✅ Order received:", order);

  // ممكن ترسل للـ API (طرود/أوتو) هنا لاحقًا

  res.status(200).json({ success: true });
});

// Endpoint اختياري لفحص أن السيرفر شغال
app.get('/', (req, res) => {
  res.send("🚀 Webhook server is running!");
});

app.listen(PORT, () => {
  console.log("✅ Server is running on port " + PORT);
});
