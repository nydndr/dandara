import Link from "next/link";

import ProjectList from "./components/ProjectList";

export const metadata = {
  title: "Work",
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
          <h2 className="text-xl font-medium text-gray-700 md:text-3xl md:leading-10">
            <span className="textmarker-effect-auto">
              Everything I have created
            </span>
            : digital products, written material and whatever else I please.
          </h2>
          <h3 className="text-lg font-medium text-gray-700/80 md:leading-9">
            Plus, some accompanying writings for most projects.
          </h3>
        </div>
      </section>

      <section className="mt-12 w-4/5 space-y-12">
        <ProjectList display="full" />
      </section>
    </div>
  );
}
