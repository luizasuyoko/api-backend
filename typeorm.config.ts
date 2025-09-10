import { DataSource } from "typeorm";

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'products',

    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    
    migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
})