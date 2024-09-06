import { useState } from "react";
import FormInput from "./components/FormInput";
import InfoCard from "./components/InfoCard";

function App() {
  const [info] = useState("Try it free 7 days then $20/mo. thereafter");
  const [focusedFields, setFocusedFields] = useState({});
  const [isValidEmail, setIsValidEmail] = useState(true);



  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
  });



  const [inputs] = useState([
    {
      id: 1,
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First Name cannot be empty",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last Name cannot be empty",
      required: true,
    },
    {
      id: 3,
      name: "emailAddress",
      label: "Email Address",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "Looks like this is not an email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password cannot be empty",
      required: true,
    },
  ]);





  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };




  //On User Typing handle changes
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Reset email validation state on change
    if (name === "emailAddress") {
      setIsValidEmail(true);
    }
  };


  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let allValid = true;
    const updatedFocusedFields = {};

    // Validation for all fields
    inputs.forEach((input) => {
      if (!values[input.name]) {
        updatedFocusedFields[input.name] = true;
        allValid = false;
      }

      // Specific validation for email
      if (input.name === "emailAddress" && values[input.name]) {
        if (!validateEmail(values[input.name])) {
          setIsValidEmail(false);
          allValid = false;
        }
      }
    });

    setFocusedFields(updatedFocusedFields);

    if (allValid) {
      console.log("Form Submitted!", values);
    }
  };




  return (
    <>
      <main>
        <div>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time.</p>
        </div>
        <div>
          <InfoCard info={info} />
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                value={values[input.name]}
                onChange={onChange}
                focused={focusedFields[input.name] || false}
                isValidEmail={input.name === "emailAddress" ? isValidEmail : true}
                {...input}
              />
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md">
              Claim your free trial
            </button>
            <div>
              <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
