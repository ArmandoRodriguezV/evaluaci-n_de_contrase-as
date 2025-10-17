import express from 'express';
const app = express();
import router from './routers/password.router.js';

app.use(express.json());
app.use('/api/v1/password', router);

const PORT = 3000;
app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
