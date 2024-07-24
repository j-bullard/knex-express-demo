const express = require("express");
const knex = require("knex")(
  require("../knexfile")[process.env.NODE_ENV || "development"],
);

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (_, res) => {
  knex("pet")
    .select("*")
    .then((data) => res.status(200).json(data))
    .catch(() =>
      res.status(404).json({
        message: "The data you are looking for could not be found",
      }),
    );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
