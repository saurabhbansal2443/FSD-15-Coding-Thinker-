import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { signupUrl } from "../Constants";

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
  const [isLoading, setIsLoading] = useState(false);
  const { infoText, buttonText, buttonText2 } = isSignup
    ? signupText
    : loginText;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    emailError: null,
    passwordError: null,
    error: null,
  });

  function checkValidation() {
    if (!formState.email) {
      setError({
        error: "Please enter the email",
      });
      return false;
    } else if (!formState.password) {
      setError({
        error: "Please enter the password",
      });
      return false;
    } else if (!isValidEmail(formState.email)) {
      setError({
        emailError: "Please enter a valid email",
      });
      return false;
    } else if (!isValidPassword(formState.password)) {
      setError({
        passwordError:
          "Your password must contain small case and uppercase letter , a number and special character",
      });
      return false;
    }
    return true;
  }

  const signup = async () => {
    if (!checkValidation()) {
      return;
    }
    setIsLoading(true);
    console.log("Form State ", formState);
    try {
      const apiData = await fetch(signupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
        credentials: "include",
      });
      const jsonData = await apiData.json();
      console.log(jsonData);
    } catch (err) {
      console.log(JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };
  const login = () => {
    if (!checkValidation()) {
      return;
    }
  };

  const genricError = error?.error;
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
              error: error.emailError,
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
              error: error.passwordError,
              type: "password",
              setValue: (newValue) => {
                setFormState({
                  ...formState,
                  password: newValue,
                });
              },
            }}
          />
          {genricError ? (
            <p className="text-red-500 mt-2">{genricError}</p>
          ) : (
            <></>
          )}
          <button
            onClick={() => {
              isSignup ? signup() : login();
            }}
            className="btn  mt-3 w-2/4"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              buttonText2
            )}
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
  const error = data?.error ?? null;
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
      {error ? <p className="text-red-500 mt-2">{error}</p> : null}
    </fieldset>
  );
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}
function isValidPassword(password) {
  return true;
  // const passwordRegex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // if (passwordRegex.test(password)) {
  //   return true;
  // }
  // return false;
}

// air48912
