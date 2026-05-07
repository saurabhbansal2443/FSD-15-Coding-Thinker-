import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const signupText = {
  infoText: "Already a user",
  buttonText: "Login",
  buttonText2: "Signup",
};
const loginText = {
  infoText: "Don't have an account",
  buttonText: "Signup",
  buttonText2: "Login",
};

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const { infoText, buttonText, buttonText2 } = isSignup
    ? signupText
    : loginText;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log("formstate", formState);
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="h-full w-full flex justify-center items-center">
        <div className="glass h-2/3 w-1/3 flex justify-center items-center flex-col pb-13">
          <h1 className="text-3xl"> Welcome to Shopsy </h1>
          {isSignup ? (
            <FieldSet
              data={{
                label: "Name",
                placeholder: "Enter your name",
                value: formState.name,
                setValue: (newValue) => {
                  setFormState({
                    ...formState,
                    name: newValue,
                  });
                },
              }}
            />
          ) : null}
          <FieldSet
            data={{
              label: "Email",
              placeholder: "Enter your email",
              value: formState.email,
              setValue: (newValue) => {
                setFormState({
                  ...formState,
                  email: newValue,
                });
              },
            }}
          />
          <FieldSet
            data={{
              label: "Password",
              placeholder: "Enter your password",
              value: formState.password,
              type: "password",
              setValue: (newValue) => {
                setFormState({
                  ...formState,
                  password: newValue,
                });
              },
            }}
          />
          <button className="btn  mt-3 w-2/4">
            {/* <span className="loading loading-spinner"></span> */}
            {buttonText2}
          </button>
          <p className="mt-5">
            {infoText}
            <button
              onClick={() => {
                setIsSignup(!isSignup);
              }}
              className="text-blue-300 ml-2"
            >
              {buttonText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

function FieldSet({ data }) {
  if (!data) return null;
  const { label, placeholder, value, setValue } = data;
  const type = data?.type ?? "text";
  return (
    <fieldset className="fieldset w-2/3 mb-5">
      <legend className="fieldset-legend">{label}</legend>
      <input
        value={value}
        type={type}
        className="input"
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </fieldset>
  );
}
