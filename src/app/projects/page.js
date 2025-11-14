import Link from "next/link";

import ProjectList from "../../../components/projects/ProjectList";

export const metadata = {
  title: "Projects",
  description: "All Dandara's creative projects.",
};

export default async function Projects() {
  return (
    <div className="mx-auto my-24 max-w-4xl font-sans">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter md:text-6xl md:leading-16">
          <Link
            href="/"
            className="opacity-40 transition-all hover:opacity-100"
          >
            Dandara \
          </Link>{" "}
          Projects
        </h1>
        <div className="space-y-2">
          <h2 className="text-xl text-gray-700 md:w-4/5 md:text-2xl md:leading-10">
            <span className="highligther-animated">
              Everything I have created
            </span>
            : digital products, written material and whatever else I please.
          </h2>
        </div>
      </section>

      <section className="mt-12 space-y-12 md:w-4/5">
        <ProjectList display="full" />
      </section>

      <footer className="my-20 space-y-6">
        <p className="text-gray-700/50">
          You can also find me on{" "}
          <Link
            href="https://www.linkedin.com/in/nicolydandara/"
            className="underline underline-offset-2 hover:bg-(--dandara)"
          >
            LinkedIn
          </Link>{" "}
          and{" "}
          <Link
            href="https://x.com/amarelodandara"
            className="underline underline-offset-2 hover:bg-(--dandara)"
          >
            Twitter
          </Link>
          .
        </p>
      </footer>
    </div>
  );
}
