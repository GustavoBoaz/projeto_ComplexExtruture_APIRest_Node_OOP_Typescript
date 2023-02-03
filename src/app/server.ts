import 'dotenv/config';
import app from './App';

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));