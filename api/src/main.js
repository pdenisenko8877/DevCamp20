require("dotenv").config({ path: "../.env", silent: true });

const express = require("express");
const app = express();
// const port = process.env.PORT;


const envParam = function(req, res, next) {
  res.params = {
    port: process.env.PORT,
    host: process.env.HOST
  };
  next();
};
app.use(envParam);

app.get("/", (req, res) => {
  res.send(
    `Api server! Run on ${res.params.host} used ${res.params.port} port`
  );
});


function errorHandler (err, req, res, next) {
    res.status(500);
    res.render('error', { error: err })
}

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(
    `Example app listening at http://${process.env.HOST}:${process.env.PORT}`
  );
});
