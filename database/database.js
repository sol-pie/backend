import mongoose from 'mongoose'

// MARK: database init

class Database {
    constructor() {
        this.URI = 'mongodb://127.0.0.1:27017/cherry-pie-db';
    }

    async connect() {
        try {
            console.log('connection to database...')
            let connection = await mongoose.connect(`${this.URI}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
            if (connection) {
                console.log(`Database connection successful, \nURI: ${this.URI}`);
            } else {
                throw Error(connection.Error);
            }
        } catch (e) {
            console.error(`Database connection error ${e}`);
        }
    }

    // async configInit() {
    //     try {
    //         const configService = new this.configService();
    //         await configService.createDefault();
    //     } catch (e) {
    //         console.error(`Config init error ${e}`);
    //     }
    // }

    setURI(URI) {
        if (URI) this.URI = encodeURI(URI);
    }
}

export const db = new Database();
