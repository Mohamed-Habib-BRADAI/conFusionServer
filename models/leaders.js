const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    abbr: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        required: true,
        default:false      
    }
},{
     timestamps: true
    
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;