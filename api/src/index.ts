import App from './App';


import config from './config/index';
import "reflect-metadata";
import {DataSource} from "typeorm";
import {UserInfo} from "./server/user/models/UserInfo";


console.log({
    type: "mysql",
    host: config.dbURL,
    port:  config.dbPort,
    username: config.dbUserName,
    password: config.dbPassword,
    database: config.dbName,
    entities: [
        UserInfo
    ],
    synchronize: true,
    logging: false
})

const dataSource = new DataSource({
    type: "mysql",
    host: config.dbURL,
    port:  config.dbPort,
    username: config.dbUserName,
    password: config.dbPassword,
    database: config.dbName,
    entities: [
        UserInfo
    ],
    synchronize: true,
    logging: false
})

const connection = dataSource.initialize().then(connection => {
    console.log('a new connection is created')
    const app = new App();
    
    app.listen();
}).catch(error => console.log(error));



// call database using class
// how to handle error using database
// improve Schema validation
// improve DAL layuer by implementing super class
// remove constants form here and there
