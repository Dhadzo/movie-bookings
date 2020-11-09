// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
        host: process.env.POSTGRESS_DEV_HOST,
        port: process.env.POSTGRESS_DEV_PORT,
        user: process.env.POSTGRESS_DEV_USER,
        // password: process.env.POSTGRESS_DEV_PASSWORD,
        database: process.env.POSTGRESS_DEV_DATABASE,
    },
    migrations: {
        directory: "./database/migrations"
    },
    seeds: {
        directory: "./database/seeds"
    }
},
production: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: "./database/migrations"
    },
    seeds: {
        directory: "./database/seeds"
    }
}

};
