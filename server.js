const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./default.yaml');
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/api/v1/register", (req,res)=>{
  const age = req.body.age;
  const username = req.body.username;
  if(!req.body || !req.body.age || !req.body.username) return res.status(400).send("Bad request!");
  if(age > 70){
    return res.status(401).send(`Game over, ${username}! `);
  }
  if(age < 18){
    return res.status(401).send(`Grow up, ${username}!`);
  }
  res.status(200).send(`Success, ${username}!`);
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
