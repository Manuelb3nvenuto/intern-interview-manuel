import express from "express";
import serverless from "serverless-http";

const app = express();

// Middleware para manejar JSON
app.use(express.json());

// Ruta para la raíz (/)
app.get("/", (req, res) => {
  res.send("Welcome to the Lambda Function!");
});

// Ruta para métricas (/metrics)
app.get("/metrics", (req, res) => {
  res.json({
    revenue: 2345,
    cost: 1008,
    margin: 1337,
    events: [
      { name: "Invoice Created", percentage: 50 },
      { name: "KYC Completed", percentage: 20 },
      { name: "Support Case Opened", percentage: 10 },
    ],
  });
});

export const handler = serverless(app);
