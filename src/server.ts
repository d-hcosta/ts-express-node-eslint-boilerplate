import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'sex' });
});

app.listen(4000, () => {
  console.log('Server started!');
});
