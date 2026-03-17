import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main menu endpoint
app.get('/api/menu', (req, res) => {
  const menuItems = [
    { id: '1', name: 'Bun Maska', price: 50, category: 'Food' },
    { id: '2', name: 'Irani Chai', price: 20, category: 'Drinks' },
    { id: '3', name: 'Omelette', price: 70, category: 'Food' },
    { id: '4', name: 'Sandwich', price: 90, category: 'Food' },
    { id: '5', name: 'Cold Coffee', price: 80, category: 'Drinks' },
    { id: '6', name: 'Keema Pav', price: 150, category: 'Food' },
    { id: '7', name: 'Apple Juice', price: 40, category: 'Drinks Highlight' },
    { id: '8', name: 'Mattha with Boondi', price: 25, category: 'Drinks Highlight' },
    { id: '9', name: 'Mango Lassi', price: 50, category: 'Drinks Highlight' },
  ];
  res.json(menuItems);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
