import mongoose from 'mongoose'
const messageSchema = mongoose.Schema({
 message: {
    type:String,
    required: true,},
 name: {
    type:String,
    required: true,},
 timestamp: {
    type: String,
    default: () => new Date().toISOString()},
 received: {
    type:Boolean,
    required: true},
})
export default mongoose.model("Message", messageSchema);