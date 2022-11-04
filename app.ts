/* Imports */
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
require("dotenv").config();

// Test conection
const PORT = process.env.PORT_HOST;

console.log(PORT);

// Express
const start = async () => {
  const app = express();
  const admin = new AdminJS({});
  //criando a rota /admin como parametro nós injetamos o AdminJS
  const adminRouter = AdminJSExpress.buildRouter(admin);
  //executando nosso express (param1: opções para receber rota, retorna um obj que seja executado: nossa Rota)
  //ou seja queremos que quando ele entre em nosso adminRouter que será executado? nosso adminRouter é uma função
  //como parâmetro ela recebe admin ou seja quem é adminRouter é o nosso cara AdminJS
  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log("Projeto Rodando!");
  });
};

start();
