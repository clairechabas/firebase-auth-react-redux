import { useState, useEffect } from "react";

const useForm = (loginFunction, validate, isReset) => {
  const [errors, setErrors] = useState({});
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Checking if any error occurred during validation
    // and if a form is still submitting
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // If no errors and form still haven't been submitted
      // We sign up or in the user according to the login function passed
      loginFunction();

      // Cleaning inputs after signup/in
      setCredentials({ email: "", password: "" });

      // Now that the form has been submitted we set isSubmitting back to false
      // This prevents the form being submitted again and again each time useEffect is activated
      setIsSubmitting(false);
    }
  }, [errors, isReset, isSubmitting, loginFunction]);

  const handleSubmit = e => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    // Checking credentials for validation
    // And passing validate output (which return eventual errors) into setErrors
    setErrors(validate(credentials, isReset));
  };

  const handleChange = e => {
    e.persist();
    setCredentials(credentials => ({
      ...credentials,
      [e.target.name]: e.target.value
    }));
  };

  return [credentials, handleChange, handleSubmit, errors];
};

export default useForm;
