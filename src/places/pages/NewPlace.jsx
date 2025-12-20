import React, { useCallback, useReducer } from "react";
import "./PlaceForm.css";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";

// Reducer for form state

const NewPlace = () => {
 const [formState,InputHandler] =useForm({
    title: { value: "", isValid: false },
    description: { value: "", isValid: false },
    address: { 
      value: "", 
      isValid: false 
    }
  },false);
  // const [formState, dispatch] = useReducer(formReducer, {
  //   inputs: {
  //     title: { value: "", isValid: false },
  //     description: { value: "", isValid: false },
  //     address: { value: "", isValid: false },
  //   },
  //   isValid: false,
  // });

  // Handle input changes from child Input components

  // Handle form submission
  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted!", formState.inputs);
    // Here you can send formState.inputs to backend via API
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={InputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={InputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={InputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
