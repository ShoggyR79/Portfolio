import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:khaidu2002@gmail.com?subject=${
      formData.subject + " " + formData.name
    }&body=${formData.message} (${formData.email})`;
  };
  return (
    <div className="min-h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-52 uppercase tracking-[20px] text-gray-300 text-2xl">
        Contact
      </h3>
      <div className="absolute top-64 flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Feel free to reach out to me for anything!
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#20AAB1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1 (402)840-9995</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#20AAB1] h-7 w-7 animate-pulse" />
            <p className="text-2xl">khaidu2002@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#20AAB1] py-5 px-10 rounded-md  font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
