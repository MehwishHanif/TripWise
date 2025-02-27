import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  // const [firstName, setFirstName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { closeModal } = useModal();

  useEffect(() => {    
      const newErrors = {};
  
      if (!username) {
        newErrors.username = "Username is required";
      }
      if (username && username.length > 40) {
        newErrors.username = "Username must be less than 40 characters";
      }
      if (!firstName) {
        newErrors.first_name = "First Name is required";
      }
      if (firstName && firstName.length > 50) {
        newErrors.first_name = "First Name must be less than 50 characters";
      }
      if (!lastName ) {
        newErrors.last_name = "Last Name is required";
      }
      if (lastName && lastName.length > 50) {
        newErrors.last_name = "Last Name must be less than 50 characters";
      }
      if (!password) {
        newErrors.password = "Password is required";
      }
      if (password && password.length < 6) {
        newErrors.password = "Password must be atleast 6 characters";
      }
      if (!confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      }
      if (!email) {
        newErrors.email = "Email is required";
      }
      if (email && email.length > 255) {
        newErrors.email = "Email must be less than 255 characters";
      }
      if (email && !isValidEmail(email)) {
        newErrors.email = "Please enter a valid email";
      }
      if( password && confirmPassword && password !== confirmPassword){
        newErrors.confirmPassword = "Confirm Password field must be the same as the Password field";
      }
      
      setErrors(newErrors);
  }, [ username, email, password, confirmPassword, firstName, lastName]);

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
   const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!Object.values(errors).length) {
          
      const serverResponse = await dispatch(
        thunkSignup({
          email,
          username,
          password,
          last_name: lastName,
          first_name: firstName
        })
      );

      if (serverResponse) {
        setErrors(serverResponse);
        setHasSubmitted(true);
      } else {
        closeModal();
      }
    }
  };

  return (
    <div className="signup-form-modal">
      <h1>Sign Up</h1>
      {hasSubmitted && errors.server && <p>{errors.server}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.email && <p>{errors.email}</p>}
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.username && <p>{errors.username}</p>}
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.first_name && <p>{errors.first_name}</p>}
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.last_name && <p>{errors.last_name}</p>}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.password && <p>{errors.password}</p>}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {hasSubmitted && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormModal;
