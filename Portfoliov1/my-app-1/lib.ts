import { readFile,writeFile } from "fs/promises";
import { Project } from "./dataReader";


export async function getProjectData () {
    const data = await readFile('./projectinfo.json', "utf-8");
    const parsedData = JSON.parse(data) as Project [];
    return parsedData;
}

export async function updateProjectData (newData: Project []) {
    await writeFile('./projectinfo.json', JSON.stringify(newData))
}