// routes/contactRoutes.js
import express from 'express';
import { createContact, sendMessage,getAllContacts } from '../controller/ContactController.js';
import { createAdmission,getAllAdmission } from '../controller/AdmissionController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - company
 *         - websiteUrl
 *         - services
 *         - projectType
 *         - budget
 *         - deadline
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the contact
 *         email:
 *           type: string+
 *           format: email
 *           description: The email of the contact
 *         company:
 *           type: string
 *           description: The company of the contact
 *         websiteUrl:
 *           type: string
 *           description: The website URL of the contact
 *         services:
 *           type: array
 *           items:
 *             type: string
 *           description: The services required by the contact
 *         projectType:
 *           type: string
 *           enum:
 *             - one-time project
 *             - ongoing maintenance
 *             - Both
 *           description: The type of project
 *         budget:
 *           type: string
 *           enum:
 *             - '$100-$500'
 *             - '$200 - $1000'
 *             - '$1000+'
 *           description: The budget of the project
 *         deadline:
 *           type: string
 *           enum:
 *             - ASAP
 *             - '1 month'
 *             - '2-3 months'
 *             - '3+ months'
 *           description: The deadline of the project
 *         message:
 *           type: string
 *           description: Any additional message from the contact
 *       example:
 *         name: John Doe
 *         email: johndoe@example.com
 *         company: Example Corp
 *         websiteUrl: https://example.com
 *         services:
 *           - Service 1
 *           - Service 2
 *         projectType: one-time project
 *         budget: '$100-$500'
 *         deadline: ASAP
 *         message: This is a sample message from the contact
 */

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: The Contact_Us API
 */

/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: New contact created successfully
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Bad request, check request body
 */
router.post('/contact', createContact);

router.post('/sendmsg', sendMessage);

router.post('/admission', createAdmission);

router.get('/getall-contact', getAllContacts);

router.get('/getall-admission', getAllAdmission);


export default router;
