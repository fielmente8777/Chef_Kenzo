"use client";

import {
  FillCalendar,
  FillMail,
  FillMessage,
  FillPhone,
  FillUser,
} from "@/icons/icons";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { countries } from "@/db/countryCode";

const Form = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          // Domain:'abhijeet',
          Domain: "chefkenzo", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: `${countryCode}${userPhone}`, // Combine country code and phone number
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setCountryCode("+91"); // Reset country code
        setFormRes(false);
        router.push("/thank-you/");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      icon: <FillUser />,
      type: "text",
      name: "name",
      placeholder: "Your Name*",
      required: true,
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      icon: <FillPhone />,
      name: "phone",
      placeholder: "Your Phone*",
      required: true,
      content: (
        <div className="flex gap-2 text-base">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-auto bg-transparent rounded-lg text-[#333333] focus:outline-none"
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-black bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Your Phone*"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent rounded-md placeholder:text-black-primary text-black no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input",
      icon: <FillMail />,
      type: "email",
      name: "email",
      placeholder: "Your Email*",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "textarea",
      icon: <FillMessage />,
      type: "text",
      name: "",
      placeholder: "Your Message*",
      required: true,
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
      },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full gap-4 bg-yellow-primary max-md:px-4 p-6 max-md:mt-6 text-base rounded-md w-full"
      id="contact"
    >
      <h3 className="text-xl lg:text-[2rem]/[2.5rem] font-normal text-black-primary">
        Send <b className="capitalize">Enquiry</b> to Us!
      </h3>

      {formData.map((data, index) => (
        <div key={index} className="flex flex-1 flex-col gap-1">
          <div className="flex gap-2 p-3 bg-white">
            <label
              htmlFor={data.name}
              className={`${data.tag === "textarea" && ""}`}
            >
              {data.icon}
            </label>
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                  id: data.name,
                  type: data.type,
                  name: data.name,
                  value: data.value,
                  onChange: data.onChange,
                  placeholder: data.placeholder,
                  required: data.required,
                  autoComplete: "off",
                  spellCheck: "false",
                  rows: "5",
                  className:
                    "w-full bg-transparent no-spinner resize-none placeholder:text-[#4C4C4C] focus:outline-none valid:outline-blue-primary invalid:outline-Saffron-primary",
                })}
          </div>
          {data.name === "phone" && errorMessage && (
            <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
          )}
          {data.name === "email" && emailErrorMessage && (
            <p className="text-sm text-red-500 mt-2">{emailErrorMessage}</p>
          )}
        </div>
      ))}

      <button className="w-full text-center text-black-primary bg-red-primary justify-center self-center text-md px-8 py-3 font-semibold duration-300 active:scale-75 hover:scale-105">
        {formRes ? "Loading...." : "Get a Quote!"}
      </button>
    </form>
  );
};

export default Form;
