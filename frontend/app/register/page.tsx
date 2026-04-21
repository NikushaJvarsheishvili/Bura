"use client";

import { Formik, Form } from "formik";
import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import FormField from "../components/auth/FormField";
import SubmitButton from "../components/auth/SubmitButton";
import { registerSchema, RegisterValues } from "../lib/validationSchemas";

const initialValues: RegisterValues = {
  nickname: "",
  email: "",
  password: "",
};

const Register = () => {
  const handleSubmit = async (values: RegisterValues) => {
    // TODO: შენი რეგისტრაციის ლოგიკა აქ
    console.log("Register:", values);
  };

  return (
    <AuthLayout
      badge="რეგისტრაცია"
      title="შემოუერთდი BURA-ს"
      subtitle="შექმენი ანგარიში და დაიწყე თამაში მეგობრებთან ერთად"
      footer={
        <>
          უკვე გაქვს ანგარიში?{" "}
          <Link
            href="/login"
            className="text-auth-gold hover:text-auth-gold-bright underline-offset-4 hover:underline"
          >
            შესვლა
          </Link>
        </>
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <FormField
              name="nickname"
              label="ნიქნეიმი"
              placeholder="მაგ: kingofcards"
              icon={<User size={18} />}
              autoComplete="username"
            />
            <FormField
              name="email"
              label="ემაილი"
              type="email"
              placeholder="you@example.com"
              icon={<Mail size={18} />}
              autoComplete="email"
            />
            <FormField
              name="password"
              label="პაროლი"
              type="password"
              placeholder="••••••••"
              icon={<Lock size={18} />}
              autoComplete="new-password"
            />
            <SubmitButton loading={isSubmitting}>რეგისტრაცია</SubmitButton>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Register;
