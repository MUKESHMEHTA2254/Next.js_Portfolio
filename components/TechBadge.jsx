const TechBadge = ({ shortName, name, className = "" }) => {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(34,211,238,0.95)] ${className}`}
      aria-hidden="true"
      title={name}
    >
      {shortName}
    </div>
  );
};

export default TechBadge;
