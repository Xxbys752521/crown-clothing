import "./authentication-style.scss";
import SignUpForm from "../../components/sign-up-form/sign-up-components";
import SignInForm from "../../components/sign-in-form/sign-in-components";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
