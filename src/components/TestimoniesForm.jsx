import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const TestimoniesForm = () => {
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Thank you for your testimonial: " + name + testimonial);
    alert("Thank you for your testimonial: " + name + testimonial);
  };

  // const handleChange = () => {
  //   setName("");
  // };
  return (
    <div>
      {/* <Button onClick={handleChange}>change name</Button>
      <div>{name}</div> */}
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
