import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "../getAllProjects";

export default async function ProjectList() {
  return (
    <>
      {getAllProjects().then((data) => {
        const allProjects = data.projects;

        return (
          <>
            {allProjects.map((project, projectIndex) => (
              <article key={projectIndex} className="space-y-4 py-12">
                <div className="flex flex-col items-center space-y-4 rounded-md border-1 border-gray-700/20 py-4">
                  <div className="relative h-96 w-full overflow-hidden rounded-md">
                    <Image
                      src={`/projects/${project.title.replace(/\s/g, "").toLowerCase()}.png`}
                      fill={true}
                      objectFit="contain"
                      className=""
                      alt="Showcase of the project"
                    ></Image>
                  </div>
                </div>

                <div>
                  {project.status == 0 ? (
                    <div className="flex items-center gap-2">
                      <p className="w-fit text-lg font-bold">{project.title}</p>
                      <span className="rounded-full border-1 border-stone-700/20 px-2 py-0.5 font-mono text-sm whitespace-nowrap text-stone-700/70 lowercase">
                        coming soon
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={project.mainLink}
                      className="w-fit text-lg font-bold hover:bg-(--dandara) hover:underline hover:underline-offset-2"
                    >
                      {project.title}
                    </Link>
                  )}

                  <p className="text-sm leading-6 font-medium md:text-base md:leading-7">
                    {project.description}.
                  </p>

                  {project.links.length > 0 && (
                    <div className="flex items-end gap-2">
                      <ul className="gap-4 space-y-2 md:flex md:space-y-0">
                        {project.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              href={link.address}
                              className="flex w-fit gap-1 border-b-1 pt-1 text-sm font-medium transition-all hover:bg-(--dandara)"
                            >
                              <p>{link.title}</p>
                              <span className="">↗</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.posts.length > 0 && (
                    <diV className="flex items-end gap-2 pt-4">
                      <p className="font-mono text-sm font-bold text-stone-700/40 uppercase">
                        I also wrote about it:{" "}
                      </p>

                      <ul>
                        {project.posts.map((post, postIndex) => (
                          <li key={postIndex}>
                            <Link
                              href={post.address}
                              className="flex gap-1 border-b-1 pt-1 text-sm font-medium transition-all hover:gap-2 hover:bg-(--dandara)"
                            >
                              <p>{post.title}</p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </diV>
                  )}
                </div>
              </article>
            ))}
          </>
        );
      })}
    </>
  );
}
