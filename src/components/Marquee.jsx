const items = [
  "FullStack Developer",
  "IT Support",
  "APPLICATION DEVELOPMENT",
  "CUSTOM APPLICATIONS",
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-ink/10 bg-paper py-4">
    <div className="animate-marquee-reverse flex w-max items-center">
      {[...items, ...items, ...items].map((item, i) => (
        <span
          key={item + i}
          className="micro-label flex items-center text-ink-soft"
        >
          <span className="mx-8">{item}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
