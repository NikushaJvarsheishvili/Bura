import Link from "next/link";
import { LogIn } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#d8ad62]/20 bg-[#3a0913]/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#f5ead8]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="text-[#efc24f]">★</span>
          <span className="text-2xl font-semibold tracking-[0.08em]">BURA</span>
          <span className="text-[#efc24f]">★</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#eadcc9]/85 md:flex">
          <Link href="/" className="transition hover:text-[#efc24f]">
            მთავარი
          </Link>
          <Link href="/lobby" className="transition hover:text-[#efc24f]">
            ლობი
          </Link>
          <Link href="/rules" className="transition hover:text-[#efc24f]">
            წესები
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden items-center gap-2 text-sm font-semibold text-[#f3e7d0] transition hover:text-[#efc24f] sm:inline-flex"
          >
            <LogIn className="h-4 w-4" />
            შესვლა
          </Link>

          <Link
            href="/register"
            className="inline-flex h-11 items-center justify-center rounded-2xl border border-[#f1c75f]/80 bg-[#efc24f] px-4 text-sm font-semibold text-[#2c140d] shadow-[0_0_24px_rgba(241,199,95,0.20)] transition hover:bg-[#f3cb63]"
          >
            რეგისტრაცია
          </Link>
        </div>
      </div>
    </header>
  );
};
