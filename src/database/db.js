import  Sequelize  from "sequelize";

export const sequelize = new Sequelize('postgres', 'postgres', 'asd', {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

