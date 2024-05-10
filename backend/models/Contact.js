import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  termsAndConditions: {
    type: Boolean,
    required: true
  },
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
