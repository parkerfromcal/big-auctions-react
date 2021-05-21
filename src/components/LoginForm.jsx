import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const LoginForm = () => {
  return (
    <Form onSubmit={this.handleLogin}>
      <FormGroup>
        <Label htmlFor="username">username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          innerRef={(input) => (this.username = input)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          innerRef={(input) => (this.password = input)}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="remember"
            innerRef={(input) => (this.remember = input)}
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
