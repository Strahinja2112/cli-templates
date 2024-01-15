#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import createDirectoryContents from "./createDirectoryContents.js";
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const descriptions = {
	evrt2: "Electron Vite React Typescript Tailwind",
};

const CHOICES = fs
	.readdirSync(`${__dirname}/templates`)
	.map((el) => el + " - " + descriptions[el]);

const QUESTIONS = [
	{
		name: "project-choice",
		type: "list",
		message: "What project template would you like to generate?",
		choices: CHOICES,
	},
	{
		name: "project-name",
		type: "input",
		message: "Project name:",
		validate(input) {
			if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
			else
				return "Project name may only include letters, numbers, underscores and hashes.";
		},
	},
];

inquirer.prompt(QUESTIONS).then((answers) => {
	const projectChoice = answers["project-choice"].split(" - ")[0];
	const projectName = answers["project-name"];
	const templatePath = `${__dirname}/templates/${projectChoice}`;
	try {
		fs.mkdirSync(`${CURR_DIR}/${projectName}`);
		createDirectoryContents(templatePath, projectName);

		console.log(`\nProject created in /${projectName}`);
		console.log("\nNow all that is left to do is: ");
		console.log(`cd ${projectName} && yarn && yarn dev`);
	} catch (error) {
		console.error(error);
	}
});
