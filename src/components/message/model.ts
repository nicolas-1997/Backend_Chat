import mongoose from 'mongoose';
// import { Message } from '../../shared/message.model';
const Schema = mongoose.Schema;


const mySchema = new Schema(
    {
        user: {
            type: String ,
            required: true
        },
        message: {
            type: String ,
            required: true
        },
        date:{
            type: Date,
            required: true
        }
    }
)

const model = mongoose.model('Message',mySchema)

export default model;