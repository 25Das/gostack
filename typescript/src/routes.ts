import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
	const user = createUser({
		email: "daniel@gmail.com",
		password: "12345",
		techs: ["Node.js", "ReactJS", "React Native"],
	});

	return response.json({ message: "Hello World" });
}
