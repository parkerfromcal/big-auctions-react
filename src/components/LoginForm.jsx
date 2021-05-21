import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [modal, setModal] = useState(true);
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${username} Password: ${password}` +
        " " +
        remember +
        " " +
        modal
    );
    alert(`Username: ${username}`);
  };
  return (
    <Form onSubmit={(event) => handleLogin(event)}>
      <FormGroup>
        <Label htmlFor="username">username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          onBlur={() =>
            setModal({
              modal: false,
            })
          }
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="remember"
            onChange={(event) => setRemember(event.target.value)}
          />
          remember me
        </Label>
      </FormGroup>
      <div className="row">
        <div className="col-md-4 mt-3">
          <Button type="submit" value="submit" color="primary">
            login
          </Button>
        </div>
        <div className="col-md-8 mt-3">
          <a href="/">Don't have an account? Create one now.</a>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
