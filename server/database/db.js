import mongoose from 'mongoose';

const Connection = async (u, p) => {
    const URL = `mongodb+srv://${u}:${p}@ecommers-web.totkb8y.mongodb.net/ecommers-web?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log('conect')

    }
    catch (erroe) {
        console.log("fail")
    }


};

export default Connection;

