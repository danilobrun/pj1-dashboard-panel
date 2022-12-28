/* Imports */
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import sequelize from "./db";
import * as AdminJSSequelize from "@adminjs/sequelize";
require("dotenv").config();

import { Category } from "./model/category.entity";
import { Product } from "./model/product.entity";

// Test conection
const PORT = process.env.PORT_HOST;

console.log(PORT);

// Adpaters: server adapters to persist data in the database this is the adminJS model itself
AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

// Express
const start = async () => {
  const adminOptions = {
    resources: [
      Product,
      {
        resource: Category,
        options: 
        {
          properties: 
          {
            createdAt: 
            {
              isVisible: 
              {
                list: true, edit: false, create: false, show: true
              }
            },
            updatedAt: 
            {
              isVisible: 
              {
                list: true, edit: false, create: false, show: true
              }
            }
          }
        }
      }
    ],
    rootPath: "/admin",
    dashboard: {
      handle: async () => {
        console.log("Entrou aqui");
      },
      component: AdminJS.bundle("./components/dashboard"),
    },
    branding: {
      logo: "https://cifraengenharia.com.br/wp-content/uploads/2018/08/logo-site.png",
      favicon:
        "https://cifraengenharia.com.br/wp-content/uploads/2021/05/cropped-icon2-32x32.png",
      companyName: "Cifra Engenharia",
    },
  };

  const app = express();

  //sequelize
  sequelize
    .sync()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

  //instaciar o adminJS
  const admin = new AdminJS(adminOptions);

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
