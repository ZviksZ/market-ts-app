const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
   userName: {type: String, required: true, unique: true},
   userEmail: {type: String, required: true, unique: true},
   password: {type: String, required: true},
   userType: {type: String, required: true},
   avatar: {type: String},
  /* wishList: [{type: Types.ObjectId, ref: 'WishList'}],
   buyList: [{type: Types.ObjectId, ref: 'BuyList'}]*/

   /*купленные товары, избранное, */

   /*todos: [{type: Types.ObjectId, ref: 'Todo'}],
   videos: [{type: Types.ObjectId, ref: 'Video'}],
   english: [{type: Types.ObjectId, ref: 'English'}],
   projects: [{type: Types.ObjectId, ref: 'Project'}]*/
})

module.exports = model('User', schema)
