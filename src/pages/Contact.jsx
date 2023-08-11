import { useState } from 'react';
import '../styles/Contact.css';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If successful, we want to clear out the input after registration.
    setName('');
    // TODO: Set the password back to an empty string after the user clicks submit
    setEmail('');

    setMessage('');
    alert(`Thank you, ${name}! Your message was recieved.`);
  };

  return (
    <div className="container text-center">
      <h1>Contact Me</h1>
      <form className="form form-width" onSubmit={handleFormSubmit}>
        <p>Email:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email"
          className="text-fields field-height"
        />
        <p>Name:</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name"
          className="text-fields field-height"
        />
        {/* TODO Add another input field with a value, name, type, and placeholder of "password" */}
        <p>Message:</p>
        <textarea 
            id="message" 
            value={message}
            name="message"
            onChange={handleInputChange}
            type="textarea"
            placeholder="Enter your message here"
            rows="4" 
            cols="50"
            className="text-fields"
        />
        {/* TODO Add a `onChange` attribute with a value of `handleInputChange` */}
        <button type="submit" className="text-fields">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;