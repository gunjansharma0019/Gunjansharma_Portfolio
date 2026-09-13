export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight text-ink-light dark:text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-light dark:text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
