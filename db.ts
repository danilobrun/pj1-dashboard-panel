import { Sequelize } from "sequelize";
require("dotenv").config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD_MAC = process.env.DB_PASSWORD_MAC;

const sequelize = new Sequelize(
  `mysql://${DB_USER}:${DB_PASSWORD_MAC}@localhost:3306/projetoAdminjs`,
  {
    dialect: "mssql",
  }
);

// export instance of sequelize conection
export default sequelize;
