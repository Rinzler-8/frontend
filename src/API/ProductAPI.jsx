import { api } from "./api";
import queryString from "query-string";

const getProductAPIList = (filter) => {
  // page = 1, size = 10
  const parameters = {};

  if (filter && filter.page) {
    parameters.page = filter.page;
  }
  if (filter && filter.totalElements) {
    parameters.totalElements = filter.totalElements;
  }
  if (filter && filter.size) {
    parameters.size = filter.size;
  }

  // sort: { sortField: "id", sortDirection: "asc" },
  if (filter && filter.sort) {
    parameters.sort = filter.sort.sortField + "," + filter.sort.sortDirection;
  }
  // search = ""
  if (filter && filter.search) {
    parameters.search = filter.search;
  }

  // Sử dụng thư viện queryString để chuyển đổi đối tượng thành các param
  // https://www.npmjs.com/package/query-string
  let url = "v1/products?" + queryString.stringify(parameters);
  // console.log("search url: ", url);
  // products?page=1&size=10

  return api("GET", url, null, null);
};

// get product by category
const getProductByCatAPI = (category) => {
  let url = "v1/products?search=" + category;
  return api("GET", url, null, null);
};

// get single product
const getSingleProductAPI = (id) => {
  let url = "v1/products/" + id;
  return api("GET", url, null, null);
};

// Add Product New
const addProductNewAPI = (ProductNew) => {
  return api("POST", "products/", ProductNew);
};

// Xóa Product
const deleteProductAPI = (id) => {
  let url = "v1/products/" + id;
  return api("DELETE", url, null, null);
};
// Update Product
const updateProductAPI = (id, productUpdate) => {
  let url = "v1/products/" + id;
  return api("PUT", url, productUpdate);
};

const importXLSXProductAPI = (file) => {
  const body = new FormData();
  body.append("file", file);
  return api("POST", "excel/upload", body);
};

const exportXLSXProductAPI = () => {
  return api("GET", "excel/downloadXLSX", null);
};

const exportCSVProductAPI = () => {
  return api("GET", "excel/downloadCSV", null);
};

export {
  getProductAPIList,
  getSingleProductAPI,
  addProductNewAPI,
  deleteProductAPI,
  updateProductAPI,
  getProductByCatAPI,
  importXLSXProductAPI,
  exportXLSXProductAPI,
  exportCSVProductAPI,
};
