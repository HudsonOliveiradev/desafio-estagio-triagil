const timeRoutes = require('./api/routes/timeRoutes');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api/teams', timeRoutes);

const db = require('./api/models');
db.sequelize.sync();

/*app.user(express.static(path.join(__dirname, '../frontend/dist/frontend')));
app.get('*', (req, res) => {
res.sendFile(__dirname, '../frontend/dist/frontend/index.html');
});*/

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});