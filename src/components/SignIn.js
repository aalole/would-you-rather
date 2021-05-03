import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import SignInHeader from "./SigninHeader";
import SignInLayout from "./SignInLayout";
import SignInForm from "./SignInForm";
import { Segment, Image } from "semantic-ui-react";
import { setAuthorized } from "../actions/authUser";
import '../index.css'

const MyImage = () => (
  <Image
    src="https://gravatar.com/avatar/9a094ce8d67557f434056fb083e30705?s=400&d=robohash&r=x"
    size="medium"
    centered
  />
);
const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => setLoading(true);
  return (
    <Fragment>
      <Segment.Group>
        <SignInHeader />
        <SignInLayout
          image={<MyImage />}
          form={<ConnectedLoginForm onLoading={handleLoading} />}
          loading={loading}
        />
      </Segment.Group>
      <footer className="footer text-center">
        <small className="text-center"> &copy; aalole 2021; Courtesy of Udacity Nanodegree</small>
      </footer>
    </Fragment>
  );
};

<SignInForm />;

const ConnectedLoginForm = connect(mapStateToProps, { setAuthorized})(
  SignInForm
);

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default SignIn;
