import inquirer from "inquirer";
import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import createDirectoryContents from "./createDirectoryContents.js";
import npmlog from "npmlog";

const CURR_DIR = process.cwd();

const __dirname = dirname(fileURLToPath(import.meta.url));

npmlog.addLevel("info", 2000, {
	fg: "blue",
});
npmlog.addLevel("error", 4000, {
	fg: "red",
	bold: true,
});

const descriptions = {
	evrt2: "Electron Vite React Typescript Tailwind",
};

const choices = fs
	.readdirSync(`${__dirname}/templates`)
	.map((el) => el + " - " + descriptions[el]);

const questions = [
	{
		name: "project-choice",
		type: "list",
		message: "What project template would you like to generate?",
		choices: choices,
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
	{
		name: "run-install",
		message:
			"Would you like us to install all the needed dependencies for you?",
		type: "confirm",
	},
];

inquirer.prompt(questions).then((answers) => {
	const projectChoice = answers["project-choice"].split(" - ")[0];
	const projectName = answers["project-name"];
	const shouldRunInstall = answers["run-install"];

	const templatePath = `${__dirname}/templates/${projectChoice}`;
	try {
		const newProjectPath = `${CURR_DIR}/${projectName}`;

		npmlog.level = shouldRunInstall ? "verbose" : "info";

		npmlog.info("Creating project directory...");

		// let shouldClose = false;

		// if (fs.existsSync(newProjectPath)) {
		// 	inquirer
		// 		.prompt([
		// 			{
		// 				name: "overwrite",
		// 				message:
		// 					"This directory already exists, would you like to overwrite it?",
		// 				type: "confirm",
		// 			},
		// 		])
		// 		.then((answers) => {
		// 			if (answers["overwrite"]) {
		// 				fs.rm(newProjectPath, { recursive: true });
		// 			} else {
		// 				shouldClose = true;
		// 			}
		// 		});

		// 	if (shouldClose) {
		// 		return;
		// 	}
		// }

		fs.mkdirSync(newProjectPath);
		createDirectoryContents(templatePath, projectName);

		if (shouldRunInstall) {
			npmlog.info("Installing all the neded dependencies...");
			const installProcess = exec("yarn", { cwd: newProjectPath }, (error) => {
				if (error) {
					npmlog.error("Error during installation:", error.message);
					throw error;
				}

				npmlog.info(`Project created! path: /${projectName}`);
				npmlog.info(
					`Now all that is left to do is: cd ${projectName} && yarn dev`
				);
			});

			installProcess.stdout.pipe(npmlog.stream);
			installProcess.stderr.pipe(npmlog.stream);
		} else {
			npmlog.info(
				`Now all that is left to do is: cd ${projectName} && yarn && yarn dev`
			);
		}
	} catch (error) {
		npmlog.error(getErrorMessage(error));
	}
});

function getErrorMessage(error) {
	let message = "";
	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else if (typeof error === "string") {
		message = error;
	} else {
		message = "Something went wrong!";
	}

	return message;
}
