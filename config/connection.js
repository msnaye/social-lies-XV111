const {connect, connection,set} =require('mongoose')
const dotenv =require('dotenv')
dotenv.config()

connect(process.env.MONGODB_URI || process.env.URL,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true
});

set('debug', true);

module.exports=connection;