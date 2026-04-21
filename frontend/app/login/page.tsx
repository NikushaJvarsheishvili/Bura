"use client";

import { Formik, Form } from "formik";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import FormField from "../components/auth/FormField";
import SubmitButton from "../components/auth/SubmitButton";
import { loginSchema, LoginValues } from "../lib/validationSchemas";

const initialValues: LoginValues = {
  email: "",
  password: "",
};

const Login = () => {
  const handleSubmit = async (values: LoginValues) => {
    // TODO: შენი ავტორიზაციის ლოგიკა აქ
    console.log("Login:", values);
  };

  return (
    <AuthLayout
      badge="შესვლა"
      title="კეთილი იყოს დაბრუნება"
      subtitle="გაიარე ავტორიზაცია და განაგრძე თამაში"
      footer={
        <>
          არ გაქვს ანგარიში?{" "}
          <Link
            href="/register"
            className="text-auth-gold hover:text-auth-gold-bright underline-offset-4 hover:underline"
          >
            რეგისტრაცია
          </Link>
        </>
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
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
              autoComplete="current-password"
            />
            <div className="flex justify-end -mt-2 mb-5">
              <Link
                href="/forgot-password"
                className="text-auth-gold/80 hover:text-auth-gold text-sm"
              >
                პაროლი დაგავიწყდა?
              </Link>
            </div>
            <SubmitButton loading={isSubmitting}>შესვლა</SubmitButton>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Login;
