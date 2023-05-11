import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddAccountAPI, actionDeleteAccountAPI, actionFetchAccountAPI, actionUpdateAccountAPI } from "../Redux/Action/AccountAction";
import { actionChangePage, actionChangeSize, actionChangeSortDirection, actionChangeSortField, actionSearch } from "../Redux/Action/PageAction";
import { actionFetchAccountUpdateInfoRedux, actionToggleUpdateFormRedux } from "../Redux/Action/FormUpdateAction";
import { useNavigate } from "react-router-dom";
import MenuBar from "../Components/Admin/MenuBar/MenuBar";
import ManageUser from "../Components/Admin/ManageUser/ManageUser";
import "../css/AdminPage.css";

function AdminPage(props) {
  let stateRedux = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatchRedux = useDispatch();
  // State quản lý đóng mở thông báo.
  let [showNotificationDelete, setShowNotificationDelete] = useState(false);
  // Lấy dữ liệu page, size được quản lý từ Redux
  let filter = {
    page: stateRedux.pageFilterReducer.page,
    size: stateRedux.pageFilterReducer.size,
    sort: stateRedux.pageFilterReducer.sort,
    search: stateRedux.pageFilterReducer.search,
  };
  // useEffect(() => {
  //   let accountLoginSaveToStorage = storage.getUserInfo();
  //   if (!accountLoginSaveToStorage) {
  //     // TH này khi User đã login sẽ chuyển tới trang home
  //     return navigate("/login");
  //   }
  // }, []);

  //gọi useEffect để load dữ liệu, chỉ gọi khi các state page hoặc size, ... từ redux thay đổi
  useEffect(() => {
    dispatchRedux(actionFetchAccountAPI(filter));
    // Gọi useEffect để load dữ liệu list Department và Positon
  }, [stateRedux.pageFilterReducer.page, stateRedux.pageFilterReducer.size, stateRedux.pageFilterReducer.sort, stateRedux.pageFilterReducer.search]);

  // Xử lý xóa Account
  let onHandleDelete = (id) => {
    console.log("Id của Account cần xóa:", id);
    dispatchRedux(actionDeleteAccountAPI(id));
    setShowNotificationDelete(true);
  };
  // Xử lý khi nhấn nút Edit
  let onHandleEditBtn = (AccountEdit) => {
    console.log("Thông tin của Account cần update:", AccountEdit);
    // Lưu thông tin Account Update lên Redux
    dispatchRedux(actionFetchAccountUpdateInfoRedux(AccountEdit));
    // Hiển thị formUpdate
    dispatchRedux(actionToggleUpdateFormRedux());
  };

  // Xử lý Update Account
  let onHandleUpdateAccount = (accountUpdate) => {
    let id = stateRedux.formUpdateReducer.accountUpdateInfo.id;
    dispatchRedux(actionUpdateAccountAPI(id, accountUpdate));
  };

  // Xử lý khi click vào các icon phân trang
  let onHandleChangePage = (page) => {
    // console.log("Trang hiện tại: ", page);
    // Thực hiện dispatch action để set lại giá trị page trên redux
    dispatchRedux(actionChangePage(page));
  };
  // Hàm xử lý khi người dùng ChangeSize
  let onHandleChangeSize = (item) => {
    dispatchRedux(actionChangeSize(item));
  };
  // Hàm xử lý khi người dùng thay đổi SortField
  let onHandleChangeFieldSort = (item) => {
    dispatchRedux(actionChangeSortField(item));
  };

  // Hàm xử lý khi người dùng thay đổi SortDirection
  let onHandleChangeDirectionSort = (item) => {
    dispatchRedux(actionChangeSortDirection(item));
  };
  // Hàm xử lý khi nhấn nút Search
  let onHandleSearch = (valueSearch) => {
    console.log("valueSearch: ", valueSearch);
    dispatchRedux(actionSearch(valueSearch));
  };
  // Xử lý thêm mới Account
  let onHandleCreateNewAccount = (accountNew) => {
    dispatchRedux(actionAddAccountAPI(accountNew));
  };

  // Thông tin trang hiện tại từ redux để truyền xuống PaginationButton hiển thị
  let currentPage = stateRedux.pageFilterReducer;
  return (
    <div className="admin-page-container">
      <MenuBar></MenuBar>
      <div className="content-area-admin">
        <ManageUser></ManageUser>
      </div>

      {/* Thông báo thêm mới thành công */}
      {/* <Toast isOpen={showNotificationDelete}>
        <ToastHeader
          style={{ backgroundColor: "red", color: "black", fontSize: 20 }}
          toggle={() => {
            setShowNotificationDelete(false);
          }}
        >
          Notification
        </ToastHeader>
        <ToastBody style={{ color: "black", fontSize: 25 }}>Delete Account Success!!</ToastBody>
      </Toast> */}
    </div>
  );
}

export default AdminPage;
