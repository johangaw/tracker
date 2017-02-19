"use strict";

const Sequelize = require('sequelize');

let sequelize = null;
if(process.env.PORT) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    sequelize = new Sequelize('memory-db', 'username', 'password', {
        dialect: 'sqlite',
        storage: './sqlite.db'
    });
}



// =============================================
// Models
// =============================================
module.exports = {
    'Position': sequelize.define('position', {
        long: { type: Sequelize.STRING },
        lat: { type: Sequelize.STRING },
        time: { type: Sequelize.INTEGER }
    })
}

sequelize.sync({force: true});


