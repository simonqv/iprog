import fs from "fs";
import path from "path";
import parseGitConfig from 'parse-git-config';

/*
 *
 * this code is run server-side at npm startup to determine the telemetry info
 *
 */
const telemetryConfig = fs.readFileSync("./telemetry.config.json");
let telemetryUserInfo;
try {
    telemetryUserInfo = JSON.parse(telemetryConfig)["userInformation"];
    telemetryUserInfo = ["full", "anonymous", "none"].find(x => x === telemetryUserInfo) ? telemetryUserInfo : "full";
} catch (e) {
    telemetryUserInfo = "full";
}


let currentDirectory;
try {
    const gitConfig = parseGitConfig.sync();
    currentDirectory = gitConfig['remote "origin"'].url.split('/').slice(-1)[0].replace(".git", "");
} catch(e) {
    try {
        currentDirectory = path.basename(__dirname);
    } catch(e) {
        currentDirectory = "unknown";
    }
}

if (currentDirectory === "npm-tutorial") {
    telemetryUserInfo = "none";
}

let username, semester;
if (currentDirectory !== "unknown") {
    const usernameRegex = new RegExp("(.*)-[vh]t[0-9]{2}-(1|2_3)", "g");
    let regexResult = usernameRegex.exec(currentDirectory);
    username = regexResult ? regexResult[1] : "anonymous";

    const semesterRegex = new RegExp("(.*)-([vh]t[0-9]{2})-(1|2_3)", "g");
    regexResult = semesterRegex.exec(currentDirectory);
    semester = regexResult ? regexResult[2] : "unknown";
} else {
    username = "anonymous";
    semester = "unknown";
}

export {username, semester, telemetryUserInfo};
