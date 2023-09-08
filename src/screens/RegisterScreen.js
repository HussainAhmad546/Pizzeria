import { Button, Form, Input, notification } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style.css";
import axios from "axios";

function RegisterScreen() {

  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(15, "Name must not exceed 15 characters")
      .matches(/^[a-zA-Z\s]+$/, "Name must contain only alphabets"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(15, "Password must not exceed 15 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%*?&])[A-Za-z\d@!%*?&]+/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"), // Check if confirm password matches password field
  });
  

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);

      // Example: Send a request to the backend API
      axios
        .post("http://localhost:5000/api/auth/register", values)
        .then((response) => {
          console.log(response.data);
          // Show success notification
          notification.success({
            message: "Registration Successful",
            description: "You have successfully registered.",
          });
          // Redirect to login page
          navigate("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Nice To Meet U</h1>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="name"
            help={touched.name && errors.name}
            validateStatus={touched.name && errors.name ? "error" : ""}
          >
            <Input
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            help={touched.email && errors.email}
            validateStatus={touched.email && errors.email ? "error" : ""}
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
            help={touched.password && errors.password}
            validateStatus={touched.password && errors.password ? "error" : ""}
          >
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"} 
              name="password"
              value={values.password}
              onChange={handleChange}
              suffix={
                <span
                  className={`password-toggle-icon ${
                    showPassword ? "open" : "closed"
                  }`}
                  onClick={togglePasswordVisibility}
                />
              }
            />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            help={touched.confirmPassword && errors.confirmPassword}
            validateStatus={
              touched.confirmPassword && errors.confirmPassword ? "error" : ""
            }
          >
            <Input
              placeholder="Confirm Password"
              type={showPassword ? "text" : "password"} 
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              suffix={
                <span
                  className={`password-toggle-icon ${
                    showPassword ? "open" : "closed"
                  }`}
                  onClick={togglePasswordVisibility}
                />
              }
            />
          </Form.Item>

          <Button className="primary-button my-2 full-width-button" htmlType="submit">
            REGISTER
          </Button>

          <Link to="/login" className="anchor mt-2">
            CLICK HERE TO LOGIN
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default RegisterScreen;
