import {Sequelize} from "sequelize"

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('aoPHFu92mhEoxY2X', 'Fai7X6yeglBaLKY5', 'aozbKTNGXTCC0gsv', {
  host: 'educalab.id',
  dialect: 'mysql',
  port: 3307,

});

export default sequelize;