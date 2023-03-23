import { addProductNewAPI, deleteProductAPI, getProductAPIList, updateProductAPI, getSingleProductAPI } from "../../API/ProductAPI";
import * as Types from "../Contant/ProductActionType";
import * as Types_Page from "../Contant/PageActionType";
import { actionToggleUpdateFormRedux } from "./FormUpdateAction";
import { actionChangePage, actionChangeSortDirection, actionChangeSortField } from "./PageAction";
// Viết các Action liên quan đến Call API
export const actionFetchProductAPI = (filter) => {
  return (dispatch) => {
    return getProductAPIList(filter).then((response) => {
      // console.log("reponseAPI:", response);
      dispatch(actionFetchProductRedux(response.content));
      dispatch(actionSetTotalPageProductRedux(response.totalPages));
      // console.log("Products Redux: ", response);
    });
  };
};
export const actionFetchSingleProductAPI = (id) => {
  return (dispatch) => {
    return getSingleProductAPI(id).then((response) => {
      dispatch(actionFetchSingleProductRedux(response));
      // console.log("single Product Redux: ", response);
    });
  };
};

// Dispath action này tới redux để lưu list Product vào redux
export const actionFetchProductRedux = (products) => {
  return {
    type: Types.FETCH_PRODUCT_LIST,
    payload: products,
  };
};
// Dispath action này tới redux để lưu 1 Product vào redux
export const actionFetchSingleProductRedux = (product) => {
  return {
    type: Types.FETCH_SINGLE_PRODUCT,
    payload: product,
  };
};


// Dispath action này tới redux để lấy tổng số trang Product
export const actionSetTotalPageProductRedux = (totalPage) => {
  return {
    type: Types_Page.SET_TOTAL_PAGE,
    payload: totalPage,
  };
};

// Acction thêm mới Product
export const actionAddProductAPI = (ProductNew) => {
  return (dispatch) => {
    return addProductNewAPI(ProductNew).then((response) => {
      console.log("reponseAPI After add New Product:", response);
      alert("Tao san pham thanh cong");
      dispatch(actionFetchProductAPI());
      dispatch(actionChangePage(0)); // Chuyển về trang 1 sau khi thêm mới thành công
      dispatch(actionChangeSortField("id")); // Thay đổi trường sort về id
      dispatch(actionChangeSortDirection("DESC")); // Sort theo chiều giảm dần
    });
  };
};

// Acction xóa Product
export const actionDeleteProductAPI = (id) => {
  // console.log("deleteProductById: ", id);
  return (dispatch) => {
    return deleteProductAPI(id).then((response) => {
      console.log("response sau khi xóa Product: ", response);
      alert("Xoa san pham thanh cong");
      dispatch(actionFetchProductAPI());
      dispatch(actionChangePage(0)); // Chuyển về trang 1 sau khi thêm mới thành công
      dispatch(actionChangeSortField("id")); // Thay đổi trường sort về id
      dispatch(actionChangeSortDirection("DESC")); // Sort theo chiều giảm dần
    });
  };
};

// Acction Update Product
export const actionUpdateProductAPI = (id, productUpdate) => {
  // console.log("productUpdate: ", productUpdate);
  // console.log("id: ", id);
  return (dispatch) => {
    return updateProductAPI(id, productUpdate).then((response) => {
      console.log("response sau khi Update Product: ", response);
      dispatch(actionFetchProductAPI()); // Load lại dữ liệu API
      dispatch(actionToggleUpdateFormRedux()); // Đóng FormUpdate
    });
  };
};