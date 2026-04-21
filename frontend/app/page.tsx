import { Header } from "./components/Header";
import Link from "next/link";
import {
  Spade,
  Heart,
  Diamond,
  Club,
  Sparkles,
  Users,
  Trophy,
  Zap,
  ArrowRight,
} from "lucide-react";

const gameCards = [Spade, Heart, Diamond, Club];

const features = [
  {
    icon: Users,
    title: "მეგობრებთან თამაში",
    desc: "შექმენი მაგიდა და მოიწვიე მეგობრები ერთი ბმულით.",
  },
  {
    icon: Trophy,
    title: "რეიტინგი და ტურნირები",
    desc: "ითამაშე უკეთესებისთვის და აიმაღლე შენი პოზიცია.",
  },
  {
    icon: Zap,
    title: "სწრაფი რაუნდები",
    desc: "დინამიური და მარტივად დასაწყები პარტიები ნებისმიერ დროს.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <div className="relative min-h-screen overflow-x-hidden bg-[#180408] text-[#f3e7d0]">
        {/* GLOBAL BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,#6d2232_0%,#44121d_42%,#180408_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,205,120,0.06),transparent_38%)]" />
          <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.22)_0.6px,transparent_0.7px)] [background-size:6px_6px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-[#d8ad62]/30" />
        </div>

        {/* HERO */}
        <section className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8ad62]/25 bg-[#d8ad62]/[0.04] px-4 py-2 text-xs font-medium tracking-[0.22em] text-[#d8ad62] shadow-[0_0_0_1px_rgba(216,173,98,0.04)] backdrop-blur-sm uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              ქართული კარტის ლეგენდა
            </div>

            <div className="relative mt-8 w-full max-w-4xl">
              <div className="absolute inset-0 mx-auto h-[320px] w-[320px] rounded-full bg-[#d8ad62]/[0.07] blur-3xl sm:h-[420px] sm:w-[420px]" />

              <div className="relative">
                <h1
                  className="text-[56px] font-semibold leading-none tracking-tight text-[#f6ecdc] sm:text-[88px] md:text-[120px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  BURA
                </h1>

                <h2
                  className="mt-4 text-[42px] font-semibold leading-[0.95] tracking-tight text-[#e0ae4b] sm:text-[64px] md:text-[55px]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  ONLINE
                </h2>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-[#e8d9c7]/78 sm:text-lg md:text-[21px]">
              ითამაშე ბურა მეგობრებთან ერთად, საიტი გაძლევს ყველა საშულებას რომ
              ზუსტად ისეთი იყოს როგორც რელობაში
            </p>

            <div className="mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-[#f1c75f]/70 bg-[#efc24f] px-8 text-[17px] font-semibold text-[#2c140d] shadow-[0_0_30px_rgba(241,199,95,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(241,199,95,0.38)] sm:w-auto"
              >
                დაიწყე თამაში
              </Link>
            </div>

            <div className="mt-14 flex items-center justify-center gap-3 sm:gap-4">
              {gameCards.map((Icon, i) => (
                <div
                  key={i}
                  className="flex h-16 w-14 items-center justify-center rounded-2xl border border-[#d8ad62]/25 bg-[#22070d]/25 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:h-20 sm:w-16"
                >
                  <Icon
                    className={`h-6 w-6 ${
                      i === 1 || i === 2
                        ? "fill-[#b42845] text-[#b42845]"
                        : "fill-[#f3e7d0] text-[#f3e7d0]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
