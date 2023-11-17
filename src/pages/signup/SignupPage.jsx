import { Button, Image, Typography } from "antd";
import "./signup.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleSubmit(e){
    e.preventDefault()
    alert("work")
  }
  return (
    <>
      <div className="signup-container">
        <div className="signup-logo">
          <Image preview={false} src="/waveLogo.png" height={35} width={120} />
        </div>
        <div className="signup-header">
          <h1 className="signup-header-title">Check out Wave — it’s free!</h1>
          <h2 className="signup-header-subtitle">
            Wave helps freelancers, consultants, and small businesses <br />
            around the world simplify their finances.
          </h2>

          <div className="signup-form">
            <Form >
              <div className="text-email">
                <Input
                
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontStyle: "italic",
                    fontWeight: "600",
                  }}
                  type="text"
                  size="large"
                  placeholder="Email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                />
              </div>
              <div className="text-password">
                <Input.Password
                  style={{
                    marginTop: "5px",
                    width: "100%",
                    fontStyle: "italic",
                    fontWeight: "600",
                  }}
                  type="text"
                  size="large"
                  placeholder="Password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />

                <div className="anchor-div_span">
                  <span
                    href="#"
                    className="anchor-link"
                    onClick={() =>
                      setPasswordVisible((prevState) => !prevState)
                    }
                  >
                    {passwordVisible ? "Hide" : "Show"}
                  </span>
                </div>
                <button className="submit-btn" type="submit">Sign in</button>
              </div>
              <div className="line">
                <span className="line-line"></span>
                <span id="text">or</span>
                <span className="line-line"></span>
              </div>
              <button className="google-btn">
                <span>Sign in with Google</span>
              </button>
            </Form>
          </div>

          <div className="footer-text">
            <p className="footer-p">
              By continuing, you are indicating that you have read and agree to
              the
              <span> Terms of Use </span>
              and
              <span> Privacy Policy </span>
            </p>
            <div className="footer-text-2">
              <p className="footer-p">
                Don&apos;t have a Wave account yet?
                <Link to="/login">
                  <span id="span_signup"> Sign in now.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
