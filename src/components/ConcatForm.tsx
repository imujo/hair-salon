"use client";

import { FC } from "react";
import { Formik } from "formik";
import Input from "./Input";
import * as Yup from "yup";
import { Oval } from "react-loader-spinner";
import TextArea from "./TextArea";

interface ConcatFormProps {}

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name has to be at least 2 characters long!")
    .max(20, "First name has to be at less than 20 characters long!")
    .required("First name is required!"),
  lastName: Yup.string()
    .min(2, "Last name has to be at least 2 characters long!")
    .max(20, "Last name has to be at less than 20 characters long!")
    .required("Last name is required!"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().test(
    "phoneNumber",
    "Phone number is invalid! It needs to start with +385 and have a total of 12 to 13 characters.",
    (value) => {
      if (value == undefined) return true;
      value = value.replace(/\s/g, "");
      let reg = new RegExp("^(?:\\+385|0)\\d{8,9}$");

      return reg.test(value);
    }
  ),

  message: Yup.string().required(),
});

const ConcatForm: FC<ConcatFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      }}
      validationSchema={contactSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Thank you for contacting us!");
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <Input
              type="text"
              id="firstName"
              title="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              errorMsg={errors.firstName}
            />
            <Input
              type="text"
              id="lastName"
              title="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              errorMsg={errors.lastName}
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <Input
              type="text"
              id="email"
              title="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              errorMsg={errors.email}
            />
            <Input
              type="text"
              id="phoneNumber"
              title="Phone Number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
              errorMsg={errors.phoneNumber}
            />
          </div>
          <TextArea
            id="message"
            title="Message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            errorMsg={errors.message}
          />

          <button
            type="submit"
            className="mt-2 h-12 w-full rounded bg-[#284B63] px-3 text-white"
          >
            {isSubmitting ? (
              <div className="flex h-full w-full items-center justify-center">
                <Oval
                  height={25}
                  width={25}
                  color="#ffffff"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#fefefe"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ConcatForm;
