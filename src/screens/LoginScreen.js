import { Button, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { EyeOutlined } from "@ant-design/icons"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleForgotPasswordVisibility = () => {
    setForgotPasswordVisible(!forgotPasswordVisible);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });


const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema,
  onSubmit: async (values) => {
    try {
      // Handle form submission logic here
      console.log(values);

      // Example: Send a request to the backend API
      const response = await axios.post("http://localhost:5000/api/auth/login", values);

      console.log(response.data);
      // Show success notification
      notification.success({
        message: "Login Successful",
        description: "You have successfully logged in.",
      });
      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error(error);
      // Handle the error
      if (error.response) {
        if (error.response.status === 400) {
          // Display the error message to the user
          notification.error({
            message: "Invalid Credentials",
            description: "Invalid email or password. Please try again.",
          });
        } else if (error.response.status === 404) {
          // Display the error message to the user
          notification.error({
            message: "User Not Found",
            description: "The user does not exist. Please try again.",
          });
        } else if (error.response.status === 403) {
          // Display the error message to the user
          notification.error({
            message: "Access Denied",
            description: "You do not have permission to perform this action.Please Contact Admin.",
          });
        } else if (error.response.status === 500) {
          // Display the error message to the user
          notification.error({
            message: "Server Error",
            description: "An internal server error occurred. Please try again later.",
          });
        } else {
          // Show a generic error message for other errors
          notification.error({
            message: "Error",
            description: "An error occurred. Please try again later.",
          });
        }
      } else {
        // Show a generic error message for other errors
        notification.error({
          message: "Error",
          description: "An error occurred. Please try again later.",
        });
      }
    }
  },
});





  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        {!forgotPasswordVisible && (
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Email"
              name="email"
              validateStatus={touched.email && errors.email ? "error" : ""}
              help={touched.email && errors.email}
            >
              <Input
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              validateStatus={touched.password && errors.password ? "error" : ""}
              help={touched.password && errors.password}
            >
              <Input.Password
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                iconRender={(visible) =>
                  visible ? <EyeInvisibleOutlined /> : <EyeOutlined />
                }
                suffix={
                  <EyeInvisibleOutlined
                    onClick={togglePasswordVisibility}
                    style={{
                      color: passwordVisible ? "#1890ff" : "rgba(0, 0, 0, 0.25)",
                    }}
                  />
                }
              />
            </Form.Item>

            {!forgotPasswordVisible && (
              <Button
                className="primary-button my-2 full-width-button"
                type="primary"
                htmlType="submit"
              >
                LOGIN
              </Button>
            )}
            {forgotPasswordVisible && (
              <div>
                <Button
                  className="primary-button my-2 full-width-button"
                  onClick={toggleForgotPasswordVisibility}
                >
                  BACK TO LOGIN
                </Button>
              </div>
            )}
            <Link to="/register" className="anchor mt-2">
              CLICK HERE TO SIGN UP
            </Link>
          </Form>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
