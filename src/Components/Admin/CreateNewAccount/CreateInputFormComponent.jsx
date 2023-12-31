import React, { useState, useEffect, useContext } from "react";
import { Button, Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import InputComponent from "./InputComponent";
import SelectUserStatus from "./SelectUserStatus";
import SelectCreateRole from "./SelectCreateRole";
import "./style.css";
import { getEmailExists, getUsernameExists } from "../../../API/AccountAPI";
import { useSelector } from "react-redux";
import {
  actionFetchUserRolePI,
  actionFetchUserStatusAPI,
} from "../../../Redux/Action/EnumAction";
import "../FormStyle.css";
import AppContext from "../../../AppContext";

function CreateInputFormComponent(props) {
  let { onHandleCreateNewAccount, toggle } = props;
  // State quản lý đóng mở thông báo.
  let [showNotificationCreate, setShowNotificationCreate] = useState(false);

  const phoneRegExp = /((84|0)[3|5|7|8|9])+([0-9]{8})\b/;
  const emailRegExp = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/;
  const passRegExp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,50})"
  );
  const { accountDefaultImg, dispatchRedux } = useContext(AppContext);

  let listUserStatus = useSelector((state) => state.userStatusReducer);
  let listRole = useSelector((state) => state.roleReducer);
  let nameImage;

  const closeModal = () => {
    toggle();
  };

  useEffect(() => {
    dispatchRedux(actionFetchUserStatusAPI());
    dispatchRedux(actionFetchUserRolePI());
  }, []);

  return (
    <div>
      {/* Thông báo thêm mới thành công */}
      <Toast isOpen={showNotificationCreate}>
        <ToastHeader
          style={{ backgroundColor: "blue", color: "black", fontSize: 20 }}
          toggle={() => {
            setShowNotificationCreate(false);
          }}
        >
          Notification
        </ToastHeader>
        <ToastBody style={{ color: "black", fontSize: 25 }}>
          Create Account Success!!
        </ToastBody>
      </Toast>
      {/* Formik */}
      <Formik
        initialValues={{
          Email: "",
          Username: "",
          Password: "",
          Firstname: "",
          Lastname: "",
          Mobile: "",
          Address: "",
          Status: "INACTIVE",
          Role: "USER",
        }}
        validationSchema={Yup.object({
          Username: Yup.string()
            .required("Trường này là bắt buộc!")
            .test(
              "checkUniqueUsername",
              "Tên người dùng đã được đăng ký!",
              async (username) => {
                // call api
                const isExists = await getUsernameExists(username);
                return !isExists;
              }
            ),

          Email: Yup.string()
            .matches(emailRegExp, "Email không hợp lệ!")
            .required("Trường này là bắt buộc!")
            .test(
              "checkUniqueEmail",
              "Email đã được đăng ký!",
              async (email) => {
                // call api
                const isExists = await getEmailExists(email);
                return !isExists;
              }
            ),
          Firstname: Yup.string(),
          Lastname: Yup.string(),
          Password: Yup.string()
            .matches(passRegExp, "Mật khẩu yếu, vui lòng thử lại!")
            .required("Trường này là bắt buộc!"),
          Mobile: Yup.string()
            .required("Trường này là bắt buộc!")
            .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
          Address: Yup.string(),
        })}
        onSubmit={async (values, actions) => {
          let roles = [];
          roles.push(values.Role);
          const accountCreateNew = {
            email: values.Email,
            username: values.Username,
            firstName: values.Firstname,
            lastName: values.Lastname,
            password: values.Password,
            urlAvatar: nameImage ? nameImage : accountDefaultImg,
            mobile: values.Mobile,
            address: values.Address,
            status: values.Status,
            role: roles.length > 0 ? roles : ["USER"],
          };
          onHandleCreateNewAccount(accountCreateNew);
          // Hiển thị thông báo
          setShowNotificationCreate(true);
          // Reset dữ liệu sau khi thêm, dùng hàm của formik để reset.
          closeModal();
          actions.resetForm();
        }}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ validateField, validateForm }) => (
          <div className="custom-container-form-style">
            <Row className="form-wrapper-custom-style">
              <Col
                sm={{
                  offset: -3,
                  size: 8,
                }}
                style={{ width: "100%" }}
              >
                {/* Form thêm mới */}
                <Form>
                  {/* Email */}
                  <Field
                    fullWidth
                    name="Email"
                    type="text"
                    placeholder="Nhập Email"
                    label="Email:"
                    component={InputComponent}
                  />
                  {/* Username */}
                  <Field
                    fullWidth
                    name="Username"
                    type="text"
                    placeholder="Nhập tên tài khoản"
                    label="Tên Tài Khoản:"
                    component={InputComponent}
                  />
                  <Field
                    fullWidth
                    className="input"
                    name="Password"
                    type={"text"}
                    placeholder="Nhập Mật khẩu"
                    label="Mật khẩu:"
                    component={InputComponent}
                  />
                  {/* Fullname */}
                  <Field
                    fullWidth
                    name="Firstname"
                    type="text"
                    placeholder="Nhập tên"
                    label="Tên: "
                    component={InputComponent}
                  />
                  <Field
                    fullWidth
                    name="Lastname"
                    type="text"
                    placeholder="Nhập họ"
                    label="Họ:"
                    component={InputComponent}
                  />
                  {/* Mobile */}
                  <Field
                    fullWidth
                    name="Mobile"
                    type="text"
                    placeholder="Nhập số điện thoại"
                    label="Số điện thoại:"
                    component={InputComponent}
                  />

                  {/* Address */}
                  <Field
                    fullWidth
                    name="Address"
                    type="text"
                    placeholder="Nhập địa chỉ"
                    label="Địa chỉ:"
                    component={InputComponent}
                  />
                  {/* Role */}
                  <Field
                    fullWidth
                    name="Role"
                    placeholder="Chọn phân quyền"
                    label="Phân quyền:"
                    listItem={listRole}
                    component={SelectCreateRole}
                  />

                  {/* Status */}
                  <Field
                    fullWidth
                    name="Status"
                    placeholder="Chọn trạng thái"
                    label="Trạng thái:"
                    listItem={listUserStatus}
                    component={SelectUserStatus}
                  />
                  {/* submit */}
                  <div className="modal-footer-btn-area">
                    <Button type="reset" className="btn-common btn-reset">
                      Đặt lại
                    </Button>
                    <Button type="submit" className="btn-common btn-save">
                      Lưu
                    </Button>
                  </div>
                  <br />
                </Form>
              </Col>
            </Row>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CreateInputFormComponent;
