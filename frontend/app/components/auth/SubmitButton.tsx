import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

const SubmitButton = ({ loading, children, ...rest }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading || rest.disabled}
      {...rest}
      className="w-full bg-auth-gold hover:bg-auth-gold-bright text-auth-bg font-semibold py-3 rounded-full transition-all duration-200 hover:shadow-auth-glow disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "..." : children}
    </button>
  );
};

export default SubmitButton;
