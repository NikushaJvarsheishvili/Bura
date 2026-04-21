import { ReactNode } from "react";
import Link from "next/link";

interface AuthLayoutProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: ReactNode;
  footer?: ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  badge,
  children,
  footer,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-auth-gradient flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative suit symbols */}
      <div className="absolute top-10 left-10 text-auth-gold/10 text-[120px] select-none pointer-events-none">
        ♠
      </div>
      <div className="absolute bottom-10 right-10 text-auth-gold/10 text-[120px] select-none pointer-events-none">
        ♦
      </div>
      <div className="absolute top-1/3 right-20 text-auth-gold/5 text-[80px] select-none pointer-events-none">
        ♥
      </div>
      <div className="absolute bottom-1/3 left-20 text-auth-gold/5 text-[80px] select-none pointer-events-none">
        ♣
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center gap-3 mb-8 group"
        >
          <span className="text-auth-gold text-xl group-hover:scale-110 transition-transform">
            ★
          </span>
          <span className="text-auth-cream font-serif text-3xl tracking-[0.3em] font-bold">
            BURA
          </span>
          <span className="text-auth-gold text-xl group-hover:scale-110 transition-transform">
            ★
          </span>
        </Link>

        {/* Card */}
        <div className="bg-auth-card/80 backdrop-blur-xl border border-auth-gold/20 rounded-2xl p-8 shadow-auth-card">
          {badge && (
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-auth-gold/30 bg-auth-gold/5 text-auth-gold text-xs tracking-widest uppercase">
                ♣ {badge}
              </span>
            </div>
          )}
          <h1 className="font-serif text-3xl md:text-4xl text-auth-cream text-center mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-auth-muted text-center text-sm mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </div>

        {footer && (
          <div className="mt-6 text-center text-auth-muted text-sm">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
