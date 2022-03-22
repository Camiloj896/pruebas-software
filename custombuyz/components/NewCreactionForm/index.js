import React, { useRef, useState } from "react";
import { FaFileImage } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { TEXT_FIELD, PRICE, WHOLENUMBER } from "../../utils/formRules";
import { formErrors } from "../../utils/formErrors";
import Image from 'next/image'

const NewCreationForm = () => {
  const inputCreation = useRef(null);
  const [creation, setCreation] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log("submit");
  };

  const onFileChangeCreation = () => {
    const { current } = inputCreation;
    if (current?.files?.length > 0) {
      const addFiles = current.files[0];
      const tempImg = URL.createObjectURL(addFiles);
      setCreation(tempImg);
    }
  };

  return (
    <form
      className="2xl:w-2/5 xl:w-2/3 lg:w-2/3 md:w-2/3 w-2/3 flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-2xl font-bold mt-20">Decorate your house</span>
      <div className="hidden">
        <input
          ref={inputCreation}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          onChange={onFileChangeCreation}
        />
      </div>
      <div
        id="input-creation"
        className="w-full flex my-2 mt-10 p-1 self-center place-content-center cursor-pointer shadow-[3px_3px_4px_3px_rgba(0,0,0,0.2)] rounded-lg"
        onClick={() => {
          inputCreation.current.click();
        }}
      >
        <div className="flex flex-col">
          {creation ? (
            <Image
              className='h-20 w-40 self-center'
              src={creation}
              alt='image creation'
            />
          ) : (
            <FaFileImage className="h-16 w-32 p-1 self-center" />
          )}
          <span className="self-center text-l font-bold pl-2 my-2">
            +Add some creationz
          </span>
          <text className="p-3 mb-2 pb-1 text-xs text-justify	text-gray-500">
            High quality pictures are ... text text ... High quality pictures
            are ... text text ... High quality pictures are ... text text ...
            High quality pictures are ... text text ... High quality pictures
            are ... text text ...
          </text>
        </div>
      </div>
      <div className="flex flex-col w-full my-2">
        <span className="text-xl font-bold my-1">Name</span>
        <input
          className="h-10 p-1 shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)] rounded-lg"
          type="text"
          placeholder="Enter a Name"
          {...register("name", {
            required: true,
            pattern: {
              value: TEXT_FIELD,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.name && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.name)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <span className="text-xl font-bold my-1">Description</span>
        <textarea
          className="h-14 p-1 shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)] rounded-lg"
          type="text"
          placeholder="Add a Description"
          {...register("description", {
            required: true,
            pattern: {
              value: TEXT_FIELD,
              message: "The pattern entered does not match the field",
            },
          })}
        ></textarea>
        {errors.name && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.name)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <span className="text-xl font-bold my-1">Price</span>
        <input
          className="w-1/2 h-10 p-1 shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)] rounded-lg"
          type="text"
          placeholder="Enter a price"
          {...register("price", {
            required: true,
            pattern: {
              value: PRICE,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.price && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.price)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <span className="text-xl font-bold my-1">Weeks</span>
        <input
          className="w-1/2 h-10 p-1 shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)] rounded-lg"
          type="text"
          placeholder="Weeks"
          {...register("week", {
            required: true,
            pattern: {
              value: WHOLENUMBER,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.week && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.week)}
          </span>
        )}
      </div>
      <input
        className="flex ml-auto mb-2 text-2xl font-bold cursor-pointer"
        type="submit"
        value="Let's go!"
      />
    </form>
  );
};

export default NewCreationForm;
