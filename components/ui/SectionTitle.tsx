type Props = {
  badge: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}
