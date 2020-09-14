const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQveGJikigjCjFR8xyt3BVOG4dvLifxRT6Uiab4ZSQ1LBl1rNa7WZE8xl7rLrynX9lyozbZWuSQaljxmoO0wX0100X9Sh6nZ3"
);

// API

// App config
const app = express();

// 미들웨어
app.use(cors({ origin: true }));
app.use(express.json()); // 요청을 json으로 파싱함

// API 라우터
app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("hello, world!");
});

app.get("/chanmin", (req, res) => {
  console.log(req);
  res.status(200).send("hi, chanmin!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("payment request recieved >> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen
exports.api = functions.https.onRequest(app);

// http://localhost:5001/challenge-87510/us-central1/api
