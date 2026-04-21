import { Field, ErrorMessage } from "formik";
import { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  icon?: React.ReactNode;
}

const FormField = ({
  name,
  label,
  icon,
  type = "text",
  ...rest
}: FormFieldProps) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block text-auth-cream/90 text-sm mb-2 tracking-wide"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-auth-gold/70">
            {icon}
          </span>
        )}
        <Field
          id={name}
          name={name}
          type={type}
          {...rest}
          className={`w-full bg-auth-input/60 border border-auth-gold/20 text-auth-cream placeholder:text-auth-muted/50 rounded-lg px-4 py-3 ${
            icon ? "pl-10" : ""
          } focus:outline-none focus:border-auth-gold/60 focus:ring-2 focus:ring-auth-gold/20 transition-all`}
        />
      </div>
      <ErrorMessage name={name}>
        {(msg) => <p className="text-red-400 text-xs mt-1.5 ml-1">{msg}</p>}
      </ErrorMessage>
    </div>
  );
};

export default FormField;
