import Admission from '../models/Admission.js';

export const createAdmission = async (req, res) => {
    try {
      const newAdmission = new Admission(req.body);
      const savedAdmission = await newAdmission.save();
      res.status(201).json(savedAdmission);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  export const getAllAdmission = async (req, res) => {
    try {
      const admission = await Admission.find();
      res.status(200).json(admission);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };