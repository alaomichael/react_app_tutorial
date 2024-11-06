import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface FormData {
//   description: string;
//   amount: number;
// }

const categoryOptions = [
  "groceries",
  "utilities",
  "entertainment",
  "other",
] as const;

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." }),
  amount: z.number({ invalid_type_error: "Amount is required." }),
  category: z.enum(categoryOptions, {
    required_error: "Category is required.",
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  // items: object[];
  // heading: string;
  // // onSelectItem: (item: string) => void;
  onFormSubmit: (items: object[]) => void;
}

const ExpenseTrackerForm = ({onFormSubmit}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Submitted form data", data);
    onFormSubmit([data]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
        {/* {errors.description?.type === "required" && (
          <p className="text-danger">This description field is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">The description must be at least 3 characters.</p>
        )} */}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option value="" selected={true}></option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>

        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
        {/* {errors.description?.type === "required" && (
          <p className="text-danger">This description field is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">The description must be at least 3 characters.</p>
        )} */}
      </div>
      {/* disabled={!isValid} */}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ExpenseTrackerForm;
