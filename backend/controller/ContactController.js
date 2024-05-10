// controllers/contactController.js
import Contact from '../models/Contact.js';
import twilio from 'twilio';

// Replace 'YOUR_ACCOUNT_SID' and 'YOUR_AUTH_TOKEN' with your actual Twilio credentials
const client = twilio('AC3f016e77ace7abf82eea736425da802d', '66a1e2da0bf10596a1b077c814c30890');

export const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { to, message } = req.body;

    // Assuming `client` is defined properly
    await client.messages.create({
      from: 'whatsapp:+919754392029', // Twilio sandbox number
      to: `whatsapp:${to}`,
      body: message
    });

    // If message is sent successfully
    res.send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Error sending message');
  }
};
