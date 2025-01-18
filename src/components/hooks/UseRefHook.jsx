import React, { useRef } from 'react';

function UncontrolledForm() {
  // Create a ref to access the input DOM node
  const nameRef = useRef();

  // Handle form submission and access the input value via the ref
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${nameRef.current.value}`);  // Accessing value directly from the DOM
  };
  console.log("once rendered")

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={nameRef}  // Attach the ref to the input element
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;