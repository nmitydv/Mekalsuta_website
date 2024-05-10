import mongoose from 'mongoose';

const { Schema } = mongoose;

const admissionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['parents', 'student', 'other'],
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  class: {
    type: String,
    enum: ['LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'],
    required: true
  },
  termsAndConditions: {
    type: Boolean,
    required: true
  }
});

const Admission = mongoose.model('Admission', admissionSchema);

export default Admission;
