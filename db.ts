import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mysql://root:cifra@2021@localhost:3306", {
  dialect: "mssql",
});

// export instance of sequelize conection
export default sequelize;
