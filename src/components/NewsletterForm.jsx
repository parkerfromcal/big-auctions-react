import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(true);
  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(
      `Thank you. You will receive out next newsletter at: ${email}` + modal
    );
    alert(`Thank you. You will receive out next newsletter at: ${email}`);
  };
  return (
    <Form onSubmit={(event) => handleSignUp(event)}>
      <FormGroup>
        <Label htmlFor="email">email</Label>
        <Input
          type="text"
          id="newsEmail"
          name="newsEmail"
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() =>
            setModal({
              modal: false,
            })
          }
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" value="submit" className="btn-blue">
          submit
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewsletterForm;
