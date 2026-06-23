"use client";

import { useState, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import Link from "next/link";
import ResumePDF from "./ResumePDF";

export default function ResumeView({ resumeData }) {
  const [lang, setLang] = useState("en");

  async function triggerDownload(targetLang) {
    const blob = await pdf(
      <ResumePDF data={resumeData} lang={targetLang} />,
    ).toBlob();
    const filename = "Nicoly_Dandara_ProductDesigner.pdf";
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }

  useEffect(() => {
    function handleKey(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;
      if (e.altKey && e.key === "e") {
        e.preventDefault();
        triggerDownload("en");
      }
      if (e.altKey && e.key === "p") {
        e.preventDefault();
        triggerDownload("pt");
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [resumeData]);

  const d = resumeData[lang];

  const labels = {
    en: { summary: "Summary", experience: "Professional Experience", education: "Education", projects: "Projects" },
    pt: { summary: "Resumo", experience: "Experiência Profissional", education: "Formação", projects: "Projetos" },
  }[lang];

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
          Resumé
        </h1>

        {/* Controls */}
        <div className="flex w-full items-center justify-between">
          {/* Language toggle */}
          <div className="flex gap-1 rounded border border-stone-200 p-1">
            <button
              onClick={() => setLang("en")}
              className={`rounded px-3 py-1 text-sm font-medium transition-all ${
                lang === "en"
                  ? "bg-(--dandara) font-semibold"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`rounded px-3 py-1 text-sm font-medium transition-all ${
                lang === "pt"
                  ? "bg-(--dandara) font-semibold"
                  : "text-stone-500 hover:text-stone-700"
              }`}
            >
              PT
            </button>
          </div>

          {/* Download button */}
          <button
            onClick={() => triggerDownload(lang)}
            className="rounded border border-stone-200 px-3 py-1.5 text-sm transition-all hover:border-stone-400"
          >
            {lang === "en" ? "Download CV" : "Baixar Currículo"}
          </button>
        </div>
      </header>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400">
          {labels.summary}
        </h2>
        <p className="font-work text-base leading-relaxed text-stone-700">
          {d.summary}
        </p>
      </section>

      {/* Professional Experience */}
      <section className="space-y-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400">
          {labels.experience}
        </h2>
        {d.experience.map((job, i) => (
          <div key={i} className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="font-semibold text-stone-800">
                  {job.company}
                </span>
                <span className="ml-2 text-stone-500">{job.title}</span>
              </div>
              <span className="font-mono text-sm text-stone-400">
                {job.period}
              </span>
            </div>
            <ul className="font-work space-y-2 text-sm leading-relaxed text-stone-700">
              {job.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-[--dandara]">·</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400">
          {labels.education}
        </h2>
        {d.education.map((edu, i) => (
          <div key={i} className="space-y-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-semibold text-stone-800">
                {edu.institution}
              </span>
              <span className="font-mono text-sm text-stone-400">
                {edu.period}
              </span>
            </div>
            <p className="text-stone-600">{edu.degree}</p>
            {edu.note && (
              <p className="font-work text-sm text-stone-400">{edu.note}</p>
            )}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400">
          {labels.projects}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {d.projects.map((proj, i) => {
            const Tag = proj.url ? "a" : "div";
            const linkProps = proj.url
              ? { href: proj.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
            <Tag
              key={i}
              {...linkProps}
              className="group rounded border border-stone-200 p-4 transition-all hover:border-(--dandara) hover:bg-(--dandara)/10"
            >
              <p className="font-semibold text-stone-800 group-hover:text-stone-900">
                {proj.name}
              </p>
              <p className="font-work mt-1 text-sm text-stone-500">
                {proj.description}
              </p>
            </Tag>
            );
          })}
        </div>
      </section>
    </div>
  );
}
