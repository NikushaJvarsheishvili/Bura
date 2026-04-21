"use client";

import { Formik, Form } from "formik";
import Link from "next/link";
import { Mail } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import FormField from "../components/auth/FormField";
import SubmitButton from "../components/auth/SubmitButton";
import {
  forgotPasswordSchema,
  ForgotPasswordValues,
} from "../lib/validationSchemas";

const initialValues: ForgotPasswordValues = {
  email: "",
};

const ForgotPassword = () => {
  const handleSubmit = async (values: ForgotPasswordValues) => {
    // TODO: შენი პაროლის აღდგენის ლოგიკა აქ
    console.log("Forgot password:", values);
  };

  return (
    <AuthLayout
      badge="პაროლის აღდგენა"
      title="დაგავიწყდა პაროლი?"
      subtitle="მიუთითე ემაილი და გამოგიგზავნით აღდგენის ბმულს"
      footer={
        <>
          გახსოვს პაროლი?{" "}
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
        validationSchema={forgotPasswordSchema}
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
            <SubmitButton loading={isSubmitting}>
              აღდგენის ბმულის გამოგზავნა
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default ForgotPassword;
