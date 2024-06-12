import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { useState } from 'react';

export const app = express();
const port = 5174;
export const [orders, setOrders] = useState([])

app.use(cors());

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  setOrders(data);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


