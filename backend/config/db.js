const mongoose=require('mongoose');
function connectdb(){
    mongoose.connect('mongodb+srv://shaikazeem2069:VypMP7zpqc4P2bfH@cluster0.hbttkyw.mongodb.net/ngodb.net/').then(()=>{
        console.log('connected to db')
    });

}
module.exports=connectdb;
