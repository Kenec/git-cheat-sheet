import mongoose from 'mongoose';

const CheatSchema = mongoose.Schema({
  owner: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  detail: {
    type: Array,
    default: []
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

CheatSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default mongoose.model('Cheat', CheatSchema); 