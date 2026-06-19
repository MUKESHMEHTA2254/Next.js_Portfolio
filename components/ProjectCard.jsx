import Image from "next/image";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tags }) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_-36px_rgba(15,23,42,0.95)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-white/[0.05] hover:shadow-[0_40px_100px_-60px_rgba(34,211,238,0.7)]">
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-80" />
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-x-4 bottom-4 z-20 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="interactive-pill rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-5 p-6 text-white">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={gitUrl}
            target="_blank"
            rel="noreferrer"
            className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:border-cyan-300/30 hover:bg-white/10"
          >
            <CodeBracketIcon className="h-5 w-5" />
            Source Code
          </a>
          <a
            href={previewUrl}
            target="_blank"
            rel="noreferrer"
            className="magnetic-button inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-24px_rgba(59,130,246,0.95)]"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            Live Preview
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
