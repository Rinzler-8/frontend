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

const ChangePassPage = () => {
  const [isShown, setIsShown] = useState(false);
  let navigate = useNavigate();
  let token = useParams();
  const togglePassword = () => {
    // console.log("password: ", localStorage.getItem(""))
    setIsShown((isShown) => !isShown);
  };
  function CustomInput(props) {
    let {
      field,
      form: { touched, errors },
      ...propsOther
    } = props;
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
        oldPass: "",
        newPass: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        oldPass: Yup.string()
        .required("Trường này là bắt buộc!")
        .when("newPass", {
          is: (val) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf([Yup.ref("newPass")], "Mật khẩu không khớp!"),
        }),
        newPass: Yup.string().min(6, "Phải từ 6 đến 50 ký tự!").max(50, "Phải từ 6 đến 50 ký tự!").required("Trường này là bắt buộc!"),
        confirmPassword: Yup.string()
          .required("Trường này là bắt buộc!")
          .when("newPass", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("newPass")], "Mật khẩu không khớp!"),
          }),
      })}
      onSubmit={async (values) => {
        try {
          let pass = {
            newPass: values.newPass,
          };
          await resetPassAPI(token, pass);
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
                  <h5>THAY ĐỔI MẬT KHẨU</h5>
                  <hr></hr>
                </div>

                <Field
                  fullWidth
                  className="input"
                  name="newPass"
                  type={isShown ? "text" : "newPass"}
                  placeholder="Nhập Mật khẩu"
                  label="Mật khẩu:"
                  component={CustomInput}
                />
                <Field
                  fullWidth
                  className="input"
                  name="confirmPassword"
                  type={isShown ? "text" : "newPass"}
                  placeholder="Nhập lại Mật Khẩu"
                  label="Nhập lại Mật Khẩu:"
                  component={CustomInput}
                />
                <label className="checkbox">
                  <Field type="checkbox" name="toggle" checked={isShown} onChange={togglePassword} />
                  {`Hiện Mật Khẩu`}
                </label>

                {/* Submit */}
                <Row className="button">
                  <Button type="submit" className="login">
                    Thay đổi
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

export default ChangePassPage;
