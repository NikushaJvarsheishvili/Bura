export const TableBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#180408] text-[#d8ad62]">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, #6d2232 0%, #44121d 48%, #180408 100%)",
        }}
      />

      {/* GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.16) 0.6px, transparent 0.7px)",
          backgroundSize: "6px 6px",
        }}
      />

      {/* CENTER GLOW */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[920px] rounded-full bg-[#b9873f]/[0.08] blur-3xl" />
      </div>

      {/* FRAME */}
      <div className="pointer-events-none absolute inset-[14px] rounded-[22px] border border-[#c79644]/30 sm:inset-[20px] sm:rounded-[24px] md:inset-[28px] lg:inset-[34px]" />
      <div className="pointer-events-none absolute inset-[24px] rounded-[18px] border border-[#c79644]/15 sm:inset-[34px] sm:rounded-[20px] md:inset-[44px] lg:inset-[52px]" />

      {/* TABLE CENTER */}
      <div className="relative z-0 flex min-h-dvh items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div className="flex w-full items-center justify-center">
          <div
            className="
              origin-center
              scale-[0.34]
              min-[360px]:scale-[0.4]
              min-[390px]:scale-[0.46]
              min-[430px]:scale-[0.52]
              sm:scale-[0.62]
              md:scale-[0.74]
              lg:scale-[0.88]
              xl:scale-100
            "
          >
            <div className="relative flex h-[290px] w-[860px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#c79644]/25 bg-[#22070d]/18 shadow-[0_18px_50px_rgba(0,0,0,0.26)]" />

              <div className="relative z-10 flex w-full flex-col items-center justify-center px-[42px] py-[28px]">
                <div className="mb-[10px] flex w-full items-center justify-center gap-[16px]">
                  <span className="h-px w-[112px] bg-[#c79644]/45" />
                  <span className="h-[10px] w-[10px] rotate-45 bg-[#d8ad62]" />
                  <span className="h-px w-[112px] bg-[#c79644]/45" />
                </div>

                <div
                  className="mb-[8px] leading-none tracking-[0.34em]"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "24px",
                  }}
                >
                  ONLINE
                </div>

                <h1
                  className="leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "84px",
                  }}
                >
                  BURA
                </h1>

                <p
                  className="mt-[8px] italic leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "36px",
                  }}
                >
                  classic play
                </p>

                <div className="mt-[18px] flex w-full items-center justify-center gap-[16px]">
                  <span className="h-px w-[112px] bg-[#c79644]/38" />
                  <span className="h-[10px] w-[10px] rotate-45 bg-[#d8ad62]" />
                  <span className="h-px w-[112px] bg-[#c79644]/38" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
