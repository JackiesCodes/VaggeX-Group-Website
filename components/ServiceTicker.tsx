import Image from "next/image";

const items = [
  "Civil Works",
  "Building Construction",
  "Pipelines & Water Reticulation",
  "Rehabilitation",
  "Facility Maintenance",
  "Project Management",
  "Site Supervision",
];

// Scrolling band of service lines; the list is duplicated so the loop is seamless
export default function ServiceTicker() {
  return (
    <div className="overflow-hidden bg-brand py-5 text-ink" aria-label="Service lines">
      <div className="marquee flex w-max items-center">
        {[...items, ...items].map((item, i) => (
          <span key={i} aria-hidden={i >= items.length} className="flex items-center">
            <span className="display whitespace-nowrap px-8 text-3xl">{item}</span>
            <Image src="/vaggex-mark-dark.png" alt="" width={36} height={31} className="h-7 w-auto" />
          </span>
        ))}
      </div>
    </div>
  );
}
