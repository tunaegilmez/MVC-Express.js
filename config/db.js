import Sequelize from "sequelize";

// Veritabanı bağlantısı için gerekli bilgiler
const dbName = "example_db_name";
const username = "example_pgAdmin_username";
const password = "example_password";
const host = "localhost";

// Sequelize ile veritabanı bağlantısı oluşturma
const sequelize = new Sequelize(dbName, username, password, {
  host: host,
  dialect: "postgres",
});

export default sequelize;
