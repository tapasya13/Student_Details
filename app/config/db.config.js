module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "tapasya11",
  DB: "students",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
