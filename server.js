import express from 'express';

const app = express();
// App agr representa todo o servidor
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas Vindas à imersão");
})
