export default function ShimmerQuote({ text }: { text: string }) {
  const subtext = process.env.NEXT_PUBLIC_SUBTEXT;

  return (
    <div className="text-center max-w-4xl space-y-6">
      <div className="accent-bar mx-auto" />

      <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-tight shimmer-text">
        „{text}"
      </p>

      {subtext && (
        <p className="text-lg md:text-xl text-[#6F6F6F] font-light opacity-80">
          {subtext}
        </p>
      )}

      <div className="accent-bar mx-auto" />
    </div>
  );
}
