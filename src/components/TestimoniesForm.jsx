import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const TestimoniesForm = () => {
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [modal, setModal] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Thank you ${name} for your testimonial: ${testimonial}` + modal
    );
    alert(`Thank you ${name} for your testimonial: ${testimonial}`);
  };

  return (
    <div>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="testimonial">Testimonial</Label>
          <Input
            type="textarea"
            id="testimonial"
            name="testimonial"
            onChange={(event) => setTestimonial(event.target.value)}
            onBlur={() =>
              setModal({
                modal: false,
              })
            }
          />
        </FormGroup>
        <Button type="submit" className="btn-blue">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TestimoniesForm;
