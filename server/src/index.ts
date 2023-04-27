import express, { Request, Response, Express } from "express";
import cors from "cors";
import fs from "fs";

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "./config/config.env") });

const app: Express = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/pdf/:filename", (req, res) => {
	const { filename } = req.params;
	const pdfPath = path.join(__dirname, "./pdfs", filename);

	fs.readFile(pdfPath, (err, data) => {
		if (err) {
			console.error(err);
			res.status(500).send("Internal Server Error");
			return;
		}

		res.contentType("application/pdf");
		res.send(data);
	});
});

app.get("/", (req: Request, res: Response) => {
	res.send("home");
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
