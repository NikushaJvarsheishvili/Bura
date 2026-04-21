import * as Yup from "yup";

export const registerSchema = Yup.object({
  nickname: Yup.string()
    .trim()
    .min(3, "ნიქნეიმი მინიმუმ 3 სიმბოლო")
    .max(20, "ნიქნეიმი მაქსიმუმ 20 სიმბოლო")
    .matches(/^[a-zA-Z0-9_ა-ჰ]+$/, "დაუშვებელი სიმბოლოები")
    .required("ნიქნეიმი სავალდებულოა"),
  email: Yup.string()
    .trim()
    .email("არასწორი ემაილი")
    .required("ემაილი სავალდებულოა"),
  password: Yup.string()
    .min(6, "პაროლი მინიმუმ 6 სიმბოლო")
    .max(50, "პაროლი ძალიან გრძელია")
    .required("პაროლი სავალდებულოა"),
});

export const loginSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("არასწორი ემაილი")
    .required("ემაილი სავალდებულოა"),
  password: Yup.string().required("პაროლი სავალდებულოა"),
});

export const forgotPasswordSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("არასწორი ემაილი")
    .required("ემაილი სავალდებულოა"),
});

export type RegisterValues = Yup.InferType<typeof registerSchema>;
export type LoginValues = Yup.InferType<typeof loginSchema>;
export type ForgotPasswordValues = Yup.InferType<typeof forgotPasswordSchema>;
