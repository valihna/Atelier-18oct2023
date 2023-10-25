const express = require("express");
const app = express();

const port = 5000;

const welcome = (req, res) => {
  res.send("Welcome to Valihna Express");
};

app.get("/", wren);

const welcomeName = (req, res) => {
  res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", welcomeName);


const animals = [
    {
      id: 1,
      name: "Butternut",
      race: "Europeen Cat",
      year: "2021",
      colors: false,
      lifeDuration: 15,
    },
    {
      id: 2,
      name: "Royaltie du Parc",
      race: "French saddle horse",
      year: "2015",
      colors: true,
      lifeDuration: 25,
    },
    {
      id: 3,
      name: "Tyson",
      race: "Doberman",
      year: "2016",
      color: true,
      lifeDuration: 12,
    },
    {
      id: 4,
      name: "Sockette",
      race: "Hairy cat",
      year: "2016",
      color: true,
      lifeDuration: 15,
      },
  ];

  app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });

  app.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`server is listening on ${port}`);
    }
  });