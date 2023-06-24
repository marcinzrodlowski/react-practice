import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: any) => console.log(data); // FieldValues type (error?)

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });

  //   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     console.log(person);
  //   };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          //   value={person.name}
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   onChange={(event) =>
          //     setPerson({ ...person, age: event.target.value })
          //   }
          //   value={person.age}
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
