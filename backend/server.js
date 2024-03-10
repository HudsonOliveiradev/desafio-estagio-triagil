const timeRoutes = require('./api/routes/timeRoutes');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/teams', timeRoutes);

const db = require('./api/models');
db.sequelize.sync();

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});