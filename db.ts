import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql://root:Cifra@2021@localhost:3306", {
  dialect: "mssql",
});

console.log(sequelize);
