const mongoose = require('mongoose');
const Schema = mongoose.Schema

const roomSchema = new Schema({
  numTables: {
    type: Number,
    required: true
  },
  roomCode: {
    type: String,
    required: true,
    unique: true
  }
});

roomSchema.post('save', function(doc, next) {
  console.log('new room was created and saved', doc);
  next();
});

const RoomModel = mongoose.model('rooms', roomSchema);

module.exports = RoomModel;