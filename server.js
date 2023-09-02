const express = require("express");
const routes = require("./routes");
// import sequelize connection

// added "const sequelize"
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// added serquelize.sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

// cloned code
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
