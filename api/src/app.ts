require('dotenv').config();

import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.APP_PORT;

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());

export const server = app.listen(port, () => {
  console.log(`API initialized on port ${port}!`);
});

export default app;
