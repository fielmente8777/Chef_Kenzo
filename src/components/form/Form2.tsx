"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import useBookingForm from "@/hooks/useBookingForm";
import {
  ArrowUpIcons,
  CalendarIcon,
  CallIcon,
  FromDropDown,
  MailIcon,
  UserIcon,
} from "@/icons/formIcons";
import { countries } from "@/utils/constent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  gridView?: boolean;
}
const Form2 = ({ gridView }: Props) => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    inCludeEventDate: true,
    onSubmitSuccess: () => {},
  });
  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      value: formData.name,
      onChange: handleChange,
      icon: <UserIcon />,
    },
    {
      name: "phone",
      label: "Ph Number",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
      icon: <CallIcon />,
    },
    {
      name: "email",
      label: "Email Id",
      type: "email",
      value: formData.email,
      onChange: handleChange,
      icon: <MailIcon />,
    },
    {
      name: "Event-Date",
      label: "Event Date",
      type: "date",
      value: formData.eventDate || "",
      onChange: handleChange,
      icon: <CalendarIcon />,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className={`${gridView ? "flex flex-col divide-y divide-p1" : "grid md:grid-cols-5 items-center md:gap-3.5 box-shadow"} py-3 md:px-4 bg-transparent  max-md:divide-y divide-white`}
    >
      {formFields.map((field, index) => (
        <>
          {field.type === "date" ? (
            <div
              className={`flex items-center gap-2.5 ${gridView ? "py-4" : "max-md:py-6"}`}
              key={index}
            >
              <label className="text-white">{field.icon}</label>
              <DatePicker
                selected={
                  formData.eventDate ? new Date(formData.eventDate) : null
                }
                onChange={(date: Date | null) =>
                  handleChange({
                    target: {
                      name: "eventDate",
                      value: date ? date.toISOString() : "",
                    },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
                name="eventDate"
                minDate={minDate}
                maxDate={maxDate}
                placeholderText="Event Date"
                className={`w-full placeholder:text-white bg-transparent focus:outline-none text-white ${gridView ? "" : "border-white md:border-r"}`}
              />
            </div>
          ) : field.type === "tel" ? (
            <div
              className={`flex items-center gap-2.5 ${gridView ? "py-4" : "max-md:py-6"}`}
              key={index}
            >
              <label className="text-white">{field.icon}</label>
              <div className="relative">
                <select
                  className="ps-2 cursor-pointer border-white appearance-none w-full placeholder:text-white bg-transparent focus:outline-none text-white"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  style={{ width: `${formData.countryCode.length * 2}ch` }}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code} className="">
                      {country.code}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <FromDropDown />
                </span>
              </div>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className={`w-full placeholder:text-white bg-transparent focus:outline-none text-white ${gridView ? "" : "border-white md:border-r"}`}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ) : (
            <div
              className={`flex items-center gap-2.5 ${gridView ? "py-4" : "max-md:py-6"}`}
              key={index}
            >
              <label className="text-white">{field.icon}</label>
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className={`w-full placeholder:text-white bg-transparent  focus:outline-none text-white ${gridView ? "" : "border-white md:border-r"}`}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          )}

          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]}</p>
          )}
        </>
      ))}
      <button type="submit" className="bg-white text-lg py-3 rounded-[2rem]">
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex items-center justify-center gap-2.5">
            Enquiry Now{" "}
            <span>
              <ArrowUpIcons />
            </span>{" "}
          </span>
        )}
      </button>
    </form>
  );
};

export default Form2;
