import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElement/Card";
import "./PlaceForm.css";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

  const DUMMY_PLACE=[
   {
      id: "m1",
      title: "The Kingdom of the Two Holy Mosques",
      description: `مMecca is one of the most important cities in Saudi Arabia and is considered the holiest city in Islam. It is located in the western part of the country near the Red Sea. Mecca is famous for being the destination for millions of Muslims performing Hajj and Umrah each year.`,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/250px-Flag_of_Saudi_Arabia.svg.png",
      address: "24° 39′ 0″ N, 46° 46′ 0″ E",
      location: { lat: 40.884884, lng: -38.4848489 },
      creator: 'u1',
    },
    {
    id:"m2",
    title:" The Kin. of the Two Holy Mosques",
  description: `مMecca is one of the most important cities in Saudi Arabia and is considered the holiest city in Islam. It is located in the western part of the country near the Red Sea. Mecca is famous for being the destination for millions of Muslims performing Hajj and Umrah each year.`,
    imageUrl:"https://t3.ftcdn.net/jpg/03/69/05/58/240_F_369055811_Pbu470im7huHANsA3I7uK5bGRRjp2wnH.jpg",
    address:"24° 39′ ″ N, 46° 46′ 0″ E",
    location:{
      lat:40.884884,
      lng:-38.4848489
    },
    creator:'u2',

  },
]

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const [isLoading, setIsLoading] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACE.find(
    (place) => place.id === placeId
  );

  useEffect(() => {
    if (!identifiedPlace) {
      return;
    }
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );

    setIsLoading(false);
  }, [identifiedPlace, setFormData]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  // ✅ LOADING FIRST
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  // ✅ NOT FOUND AFTER LOADING
  if (!identifiedPlace) {
    return (
      <Card>
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
      </Card>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
      />

      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={inputHandler}
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
