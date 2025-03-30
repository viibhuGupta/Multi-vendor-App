import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField, resetForm } from "../auth/formSlice";

const InputField = React.memo(({ label, type, name, placeholder }) => {
  const value = useSelector((state) => state.form[name]);
  const dispatch = useDispatch();

  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => dispatch(updateField({ name, value: e.target.value }))}
        className="inputClass"
        placeholder={placeholder}
        required
      />
    </div>
  );
});

const ComTry = () => {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    console.log(
      "Form Submitted",
      useSelector((state) => state.form)
    );
    dispatch(resetForm());
  };

  return (
    <form onSubmit={submit}>
      <InputField
        label="Full Name "
        type="text"
        name="fullname"
        placeholder="Enter your name"
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default ComTry;
export { InputField };
