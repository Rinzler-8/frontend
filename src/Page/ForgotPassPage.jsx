import React, { Component, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import "../../src/css/toastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPassAPI } from "../API/ResetPassAPI";

const ForgotPassPage = () => {
  let navigate = useNavigate();
  let token = useParams();
  function CustomInput(props) {
    let {
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...propsOther
    } = props;
    // InputProps= {{className: "input"}}
    return (
      <div>
        <TextField {...field} {...propsOther} variant="standard" style={{ marginBottom: "20px" }} />
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    );
  }

  
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().min(6, "Phải từ 6 đến 50 ký tự.").max(50, "Phải từ 6 đến 50 ký tự.").required("Trường này là bắt buộc."),
      })}
      onSubmit={(values) => {
        try {
          let pass = {
            email: values.email,
          };
          resetPassAPI(token,pass);
          toast.success("Thành công.", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => navigate("/"), 3000);
        } catch (error) {
          toast.error("Đã có lỗi! Vui lòng thử lại.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ validateField, validateForm }) => (
        <Container>
          <Row>
            <Col
              sm={{
                offset: 4,
                size: 4,
              }}
              style={{ marginTop: 300 }}
            >
              <Form>
                {/* Login */}
                <div className="title-header">
                  <h5>QUÊN MẬT KHẨU</h5>
                  <hr></hr>
                </div>

                <Field fullWidth className="input" name="email" type="email" placeholder="Nhập email" label="Email:" component={CustomInput} />

                {/* Submit */}
                <Row className="button">
                  <Button type="submit" className="login">
                    Gửi mã
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
};

export default ForgotPassPage;