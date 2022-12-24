import dotenv from 'dotenv'; //trabajar con multientornos

const mode = process.argv.slice(2)[0];
console.log(mode);
dotenv.config({
    path:mode==="PROD"?'src/config/.env.production':'src/config/.env.development'
});

export default {
    app: {
        MODE: process.env.MODE||'PROD',
        PORT: process.env.PORT || 8080,
        DEBUG: process.env.DEBUG||false
    },

    mongo: {
        MONGO_URL: process.env.MONGO_URL,
        MONOG_USER: process.env.MONOG_USER,
        MONGO_PASSWORD: process.env.MONGO_PASS
    }
}