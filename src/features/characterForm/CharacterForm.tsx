import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

import {
  fetchSpecies,
  addCharacter,
  filterCharacters,
  editCharacter,
} from "../../api/helpers";
import { Input } from "../../components/Input";
import { Select } from "./Select";
import { Radio } from "./Radio";
import { Button } from "../../components/Button";

export const CharacterForm = ({ edit }: { edit: any }) => {
  const [species, setSpecies] = useState([]); // species state, will contain data from /species api
  const [formIsValid, setFormIsValid] = useState(true); // form validation after submit state,
  const [formValue, setFormValue] = useState({
    nameValue: "",
    speciesValue: "",
    genderValue: "",
    homeworldValue: "",
  }); // main form state handler
  const history = useHistory(); // react-router history

  // form setup handler
  useEffect(() => {
    species.length === 0 && fetchSpecies(setSpecies); // fetching species options from api for <Select/> component
    edit
      ? filterCharacters(
          setFormValue,
          history.location.pathname.split("/")[2],
          true
        )
      : // gathering data from api to fill in form values, applied to edit character form
        setFormValue({
          nameValue: "",
          speciesValue: "",
          genderValue: "",
          homeworldValue: "",
        });
    // form cleanup, fixed bug with changing url from /edit to /add where form values were already set
  }, [edit, species.length, history.location.pathname]);

  // submit form handler with form validation, applied to button not the <form>
  const handleClick = (e: any) => {
    if (nameValue !== "" && speciesValue !== "" && genderValue !== "") {
      // form validation
      edit
        ? editCharacter({
            ...formValue,
            id: history.location.pathname.split("/")[2],
          }) // PUT
        : addCharacter(formValue); // POST
      history.push("/"); // return to List View after succesefull adding / editing
    } else setFormIsValid(false); // form validation
  };
  const { nameValue, speciesValue, genderValue, homeworldValue } = formValue;

  return (
    <section
      className={classNames(
        "container",
        { editForm: edit },
        { addForm: !edit }
      )}
    >
      <h1>{edit ? "Edit View" : "Add View"}</h1>
      <form data-testid="form" className="card px-5 py-3 needs-validation">
        {/* name */}
        <Input
          handleChange={(e: any) =>
            setFormValue({ ...formValue, nameValue: e.target.value })
          }
          value={nameValue}
          id="nameInput"
          label="Name"
          classes={{
            labelClass: "col-md-3 col-lg-2 col-form-label",
            formClass: "form-control col-md-9 col-lg-10",
          }}
          placeholder="New character name..."
          controlled
          invalidFeedback="You have to fill this input with character name."
          required
          formIsValid={formIsValid}
        />
        {/* species */}
        <Select
          species={species}
          speciesValue={speciesValue}
          setFormValue={setFormValue}
          formValue={formValue}
          formIsValid={formIsValid}
        />
        {/* gender */}
        <Radio
          genderValue={genderValue}
          setFormValue={setFormValue}
          formValue={formValue}
          formIsValid={formIsValid}
        />
        {/* homeworld */}
        <Input
          handleChange={(e: any) =>
            setFormValue({ ...formValue, homeworldValue: e.target.value })
          }
          value={homeworldValue}
          id="homeworldInput"
          label="Homeworld"
          classes={{
            labelClass: "col-md-3 col-lg-2 col-form-label",
            formClass: "form-control col-lg-10 col-md-9",
          }}
          placeholder="New character homeworld..."
        />
        <div className="form-group row">
          <div className="col-sm-10">
            {/* submit */}
            <Button
              submit
              classes="btn btn-primary"
              handleClick={(e: any) => handleClick(e)}
              body={edit ? "Submit changes" : "Add character"}
            />
          </div>
        </div>
      </form>
    </section>
  );
};
