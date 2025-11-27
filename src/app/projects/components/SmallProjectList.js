import Link from "next/link";

import { getAllProjects } from "../getAllProjects";

export default async function SmallProjectList() {
  return getAllProjects().then((data) => {
    const allProjects = data.projects;

    return (
      <>
        {allProjects.slice(0, 3).map((project, projectIndex) => (
          <article key={projectIndex} className="">
            {project.status == 0 ? (
              <div className="flex items-center gap-2">
                <p className="w-fit font-bold">{project.title}</p>
                <span className="rounded-full border-1 border-stone-700/20 px-2 py-0.5 font-mono text-sm whitespace-nowrap text-stone-700/70 lowercase">
                  coming soon
                </span>
              </div>
            ) : (
              <Link
                href={project.mainLink}
                className="w-fit font-bold hover:bg-(--dandara) hover:underline hover:underline-offset-2"
              >
                {project.title}
              </Link>
            )}

            <p className="w-11/12 text-sm md:w-10/12 md:text-base">
              {project.description}
            </p>
          </article>
        ))}
      </>
    );
  });
}
