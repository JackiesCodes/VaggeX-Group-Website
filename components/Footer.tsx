import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-8 text-white text-center" style={{ background: "#1F2937" }}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col items-center gap-4">
        <Image
          src="/vaggex-logo.png"
          alt="Vaggex Group Logo"
          width={60}
          height={60}
          className="object-contain opacity-90"
        />
        <p className="opacity-90 text-sm">
          &copy; {new Date().getFullYear()} Vaggex Group – Building Excellence
          Across Botswana
        </p>
        <p className="opacity-60 text-xs">
          Construction · Civil Works · Infrastructure · Project Management
        </p>
      </div>
    </footer>
  );
}
