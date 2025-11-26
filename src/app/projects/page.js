import Link from "next/link";

import ProjectList from "./components/FullProjectList";

export const metadata = {
  title: "Projects",
  description: "All Dandara's creative projects.",
};

export default async function Projects() {
  return (
    <div className="mx-auto my-24 max-w-4xl space-y-12 font-sans">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-stone-700 md:text-6xl md:leading-16">
          <Link
            href="/"
            className="text-stone-700/20 transition-all hover:text-stone-700"
          >
            Dandara \
          </Link>{" "}
          Projects
        </h1>
      </header>

      <section className="space-y-12">
        <ProjectList display="full" />
      </section>

      <footer className="space-y-6">
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
        </p>
      </footer>
    </div>
  );
}
