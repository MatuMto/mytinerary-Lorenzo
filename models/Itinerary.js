const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
   tittle: {type: String, required: true},
   authorName: {type: String, required: true},
   authorImg: {type: String, required: true},
   price: {type: Number, required:true},
   duration: {type: Number, required:true},
   likes: {type: Number, default: 0},
   comments: [{
      userId: {type: mongoose.Types.ObjectId, ref: 'user'},
      comment: {type: String, required: true}
   }],
   usersLiked: [{
      userId: {type: String, required: true}
   }],
   idCity: {type: mongoose.Types.ObjectId, ref: 'city'}
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary