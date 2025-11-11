import fs from "fs";
import path from "path";

export async function getAllProjects() {
  const filePath = path.join(
    process.cwd(),
    "src/content/projects/projects.json",
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const projects = JSON.parse(fileContent).projects;

  return { projects };
}
