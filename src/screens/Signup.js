import React from "react";
import { Card, Button, Form, Modal } from "react-bootstrap";
import ModalAgreement from "../components/Modal";

function Signup() {
  const [show, setShow] = React.useState(false);
  const [read, setRead] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const validateInputs = () => {
    //not interested inchecking values now,
    //move to home page
    window.location.href = "Home";
  };

  const handleClose = () => {
    setShow(false);
    setRead(true);

    if (submitted) {
      //method to validate user input

      validateInputs();
    }
  };
  const handleShow = () => setShow(true);

  const submit = e => {
    //method to submit form info to backend for signing up
    e.preventDefault();
    //first lets check if user have already read the agressment?
    if (read) {
      //agreement read

      window.location.href = "Home";
    } else {
      //agreement not read
      setShow(true);
      //this boolean value would allow us to check if sumit button was
      //cliked after returning from terms and conditions page

      setSubmitted(true);
    }
  };

  return (
    //   page wrapper
    <div className="App">
      <header className="App-header">
        {/* signup card */}
        <Card className="text-center cardLogin">
          {/* card header */}
          <Card.Header className="text-dark">New User SignUp</Card.Header>
          <Card.Body>
            {/* card Title */}
            <Card.Title className="text-dark">
              Welcome to AgricShared!
            </Card.Title>
            {/* form for email and password for signup 
              form created using bootstrap forms
            */}
            <Form onSubmit={submit}>
              {/* input group for email address */}
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              {/* input group for password */}
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              {/* input group for handling terms and conditions */}
              <Form.Group controlId="formBasicCheckbox">
                <div className="col-sm-12">
                  <div className="text-danger agreement">
                    <a
                      href="#"
                      onClick={handleShow}
                      className={read ? "text-primary" : "text-danger"}
                    >
                      {" "}
                      By Clicking on continue, you agree with all the terms and
                      conditions and the contract binding You and AgricShared
                    </a>
                  </div>
                </div>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            {/* end of form */}
          </Card.Body>
          {/* copyright info on card footer */}
          <Card.Footer className="text-muted copyright">
            AgricShared copyright@2019
          </Card.Footer>
        </Card>
        {/* card ends here */}
      </header>
      {/* modal for hadling the content of the terms and conditions */}
      <ModalAgreement show={show} close={handleClose} handleshow={handleShow} />
    </div>
  );
}

export default Signup;
