export default function BootcampFooter() {
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;

  if (!adresse) return;

  return (
    <footer className="w-full border-t border-[#D8D2C8] bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto py-8 px-6 text-center">
        <p className="text-xs font-normal uppercase tracking-widest text-[#6F6F6F] mb-3">
          Impressum
        </p>

        <p className="text-sm text-[#6F6F6F] font-light">{adresse}</p>
      </div>
    </footer>
  );
}
