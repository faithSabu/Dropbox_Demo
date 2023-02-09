const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    userId:String,
    url:String,
    createdAt:{
        type: Date,
        default: () => Date.now()
    },
    updatedAt:{
        type: Date,
        default: () => Date.now()
    }
})

const files = mongoose.model('files', fileSchema)

module.exports = {
    files
}
