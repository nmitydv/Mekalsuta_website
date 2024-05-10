// server.js
import dotenv from 'dotenv';
import express from 'express';
import connectDb from './config/db.js';
import Routes from './routes/Routes.js';
import swaggerJSDoc from 'swagger-jsdoc';   
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';

dotenv.config();

// variables declarations
const app = express();
const port = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// Connecting to Database;
connectDb(MONGODB_URI);

// Enable CORS
app.use(cors());

// Json middleware
app.use(express.json());

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Ashu Photography API's",
			version: "1.0.0",
			description: "A simple Express API'S for Personal Portfolio",
		},
		servers: [
			{
				url: "",
			},
		],
	},
	apis: ["./routes/*.js"],
};
const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Load Routes
app.use("/api", Routes);

// listen on port
app.listen(port, () => {
    console.log(`App listening on port https://localhost:${port}`);
});
