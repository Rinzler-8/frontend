{
    "firstName" : "Sam",
    "lastName": "Flynn",
    "mobile": "0988818188",
    "address": "New York - Bình Định",
    "urlAvatar": "radicalNightRepair.png"
}

mvc model: route => middleware => controller => validate => model  
                                  => request

- WebSecurityConfigurerAdapter dùng để cấu hình bảo mật
- controller làm việc với các request sau khi đã được lọc qua OncePerRequestFilter

- OncePerRequestFilter được thực hiện đúng 1 lần với mỗi request gửi lên API. Có method doFilterInternal()  
giúp parsing (truyền) và validate JWT, lấy User details bằng UserDetailsService, check 
Authorizaion bằng UsernamePasswordAuthenticationToken.

- UserDetailsService: là interface có method load để lấy user bằng username và trả về userDetails hay các thông tin
chi tiết (username, password, role,...) để authenticate và authorize
- UsernamePasswordAuthenticationToken lấy username và password (cùng với sự trợ giúp của service và passEncoder) 
để validate
- AuthenticationManager có DaoAuthenticationProvider (hay là respository) để validate   
- AuthenticationEntryPoint dùng để xử lý lỗi xác thực  

UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaGFmLzk4OTA1NDE5NjEyNDYuanBnfGEwNTZiM2Y3MWY1YmFmOTU3MDI2MjUxM2E0NTI0NTIwMzFhMTE5Y2NjNzQ2MWY1MWI5ZjVmN2JjMmRjZjY3YTU' WHERE (`product_id` = '3');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177756-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjYwNXxpbWFnZS9qcGVnfGltYWdlcy9oYTcvaDgwLzk4OTA1MDE1OTEwNzAuanBnfGExOTdiMzQwNWFjYzY5NWFhNGY3MjVkYmFkZWY1YjdmNjFiNjU0Yzg4NWMzNDRiYmI2NmYzYTM2N2E0ZTY1MzU' WHERE (`product_id` = '2');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177749-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzA3N3xpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDFlLzk4OTA0ODg0ODM4NzAuanBnfDkyMjVmOGIzMjIxNjc1MWQwYjM3MDI0M2I1OTEzYTcyMzYwNmZhMTdiYTgwYjVjYjQyNjQ3ODgzZjQ1NzQyZTM' WHERE (`product_id` = '4');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177765-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDAyMHxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDAyLzk4OTA1MzYwNjMwMDYuanBnfDQzYjhhMjgyYWJlYWJkNTBiNDM4NzI5YjA4NTU4NzY3Y2Y2ZTJjYWQxNDQ4NDE0ZWViYzJmZTdjZjYwNTQ5ZGU' WHERE (`product_id` = '1');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177765-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDAyMHxpbWFnZS9qcGVnfGltYWdlcy9oNDIvaDAyLzk4OTA1MzYwNjMwMDYuanBnfDQzYjhhMjgyYWJlYWJkNTBiNDM4NzI5YjA4NTU4NzY3Y2Y2ZTJjYWQxNDQ4NDE0ZWViYzJmZTdjZjYwNTQ5ZGU' WHERE (`product_id` = '6');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177749-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzA3N3xpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDFlLzk4OTA0ODg0ODM4NzAuanBnfDkyMjVmOGIzMjIxNjc1MWQwYjM3MDI0M2I1OTEzYTcyMzYwNmZhMTdiYTgwYjVjYjQyNjQ3ODgzZjQ1NzQyZTM' WHERE (`product_id` = '5');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Plus-Mobile-Phone-493177767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDEwNHxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaGFmLzk4OTA1NDE5NjEyNDYuanBnfGEwNTZiM2Y3MWY1YmFmOTU3MDI2MjUxM2E0NTI0NTIwMzFhMTE5Y2NjNzQ2MWY1MWI5ZjVmN2JjMmRjZjY3YTU' WHERE (`product_id` = '8');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177756-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjYwNXxpbWFnZS9qcGVnfGltYWdlcy9oYTcvaDgwLzk4OTA1MDE1OTEwNzAuanBnfGExOTdiMzQwNWFjYzY5NWFhNGY3MjVkYmFkZWY1YjdmNjFiNjU0Yzg4NWMzNDRiYmI2NmYzYTM2N2E0ZTY1MzU' WHERE (`product_id` = '7');
UPDATE `shop`.`product` SET `product_image_name` = 'https://www.reliancedigital.in/medias/Apple-iPhone-14-Mobile-Phone-493177749-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzA3N3xpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDFlLzk4OTA0ODg0ODM4NzAuanBnfDkyMjVmOGIzMjIxNjc1MWQwYjM3MDI0M2I1OTEzYTcyMzYwNmZhMTdiYTgwYjVjYjQyNjQ3ODgzZjQ1NzQyZTM' WHERE (`product_id` = '9');


--------------------------------------------------------------------------------------------------------------------------
Setup: 
- java.lang.NoClassDefFoundError: org/apache/poi/ss/usermodel/Workbook\r\n\tat: dù đã config ở file pom.xml
 => lên maven tải file jar của những cái có trong file pom, build path => config build path => libraries => add external JARS
- NoSuchFieldError: Factory\r\n\tat org.apache.poi.xssf.usermodel.XSSFWorkbook.onWorkbookCreate 


----------------------------------------------------------------------------------------------------
Final project:
1. BUG:
   * FE:
      - Dùng redux-persist để lưu redux state => có thể refresh trang product details mà không bị mất dữ liệu reducer
      - Không lấy được dữ liệu sau khi checkout ?
       => vì initial state rỗng nên không có khả năng lấy order_id, session_id. 
       => SOLUTION: sau khi checkoutAPI, dispatch actionGetOrderInfoRedux với response của checkoutAPI để checkoutReducer có dữ liệu
      (đã có redux-persist ở trên để lưu reducer state)
      - Muốn dùng action thì phải có useDispatch
      - không lấy được ảnh trong product detail ?
         + useEffect đang lấy điều kiện userId để render
         + <img alt="Sample" src={require('../../Assets/Product/' + product.imageName)}/> không chạy được vì:
         => Based on how the packager works, this isn't really possible with require. Packaging happens once before runtime so those variables don't have values yet.
         => SOLUTION: lấy ảnh từ server (BE)
      - view cateogies bị lỗi giữa lấy full và lấy theo category khi refresh page (đang bị lấy state của cả 2)
         => bỏ actionFetchProductAPI dưới <ProductItem/>
      - outline when select img
         => Change  <div key={items[2].key} style={{ width: "100%", height: "700px", outline: "none" }}>
      to <div key={items[0].key} className="carousel"> (.carousel {outline: none})
      - position absolute bị ẩn dưới position relative => z-index: 1
      - lỗi thỉnh thoảng phải bấm xóa 2 lần mới xóa được 1 item khỏi cart
         => dispatch(actionGetCartByUserIdRedux(response)) ở trong actionDeleteCartItemAPI
      - bấm add to cart, drawer mở ra rồi đóng vào luôn ?
         + ProductList: 
            dispatchRedux(actionOpenCart()) là true => dispatchRedux(actionGetCartByUserIdAPI(id)) là false
            (quay về initialState)
      - fetch product info ngay khi redirect sang trang edit ? 
         => 
            * Nếu chia ra làm 2 file, 1 file products và 1 trang edit product:
               fetch ngay dữ liệu của product ở trang products khi bấm vào nút edit, lưu vào storage
      - Dùng pagination button của material ui thì không chuyển trang để view hết số accounts dưới db vì tổng số trang chỉ hiện listAccount.length là 6 (trong lần fetch đầu tiên)?
         => Dùng pagination button cũ.
      - bấm mũi tên sort 2 lần mới chạy ? 
         => useState("null") => useState("id") của orderBy (sort theo field nào)
      - Bấm nút xóa account ở 2 màn đầu thì bị đen, đến màn sau bth ?
      => bị lấy sai account.id
   * BE:
      - JPA query: @Query("Select item FROM OrderItems item WHERE item.order_id=:order_id") => OrderItems là entity được khai báo 
      ở be chứ không phải từ database.
      - fasterxml.jackson.databind: thêm jsonignore dưới entity
      - this.passwordEncoder is null khi reset password ?
         => SOLUTION: đổi từ private PasswordEncoder passwordEncoder -> BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10, new SecureRandom());
      - You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near
      => Đổi tên table trong entity BE ("Order" => "`Order`") vì dưới db tên table là `Order`
      - không search được account
      => Bị lỗi search ở dưới file UserService, bỏ roleSpecification
      - Cannot make a static reference to the non-static method excelToProducts(InputStream) from the type ExcelHelper 
      => Thay List<Product> products = excelHelper.excelToProducts(file.getInputStream()); thành 
          ExcelHelper excelHelper = new ExcelHelper();
          List<Product> products = excelHelper.excelToProducts(file.getInputStream());
      - categoryService.getCategoryByID(categoryId) bị null trong function excelToProducts trong ExcelHelper
      => không dùng @autowired mà truyền categoryService là 1 param: List<Product> excelToProducts(InputStream is, ICategoryService categoryService)
      ở ExcelService: List<Product> products = excelHelper.excelToProducts(file.getInputStream(), categoryService);
      



2. FEATURE
 * Checkout: 
 - FE:
    + lấy firstname, lastname, mobile, address, payment
    + user chỉ có 1 cart => cartId = userId
    + 
 - BE:
    + checkout gồm 2 phần: order info và order items
    + mỗi order sẽ phân biệt theo session_id. Lấy orderInfo theo orderId, orderItems theo session_id (hoặc order_id)
 
 * Cart:
 - FE: add to cart sẽ tự động mở drawer (DONE) 
   + truyền state của mọi nơi có bấm add to cart vào header để mở và update drawer (DONE)
   + Thêm vào giỏ hàng khi không đăng nhập. (DONE)

3. REMAININGS:
   - Checkbox cho nhiều item

 * User:
   - danh sách order (get all orders) (DONE) 
   - phân quyền (DONE)
   - user edit account (DONE)
   - user change password (HALF), check old password (DONE but slow for using bcrypt)
   - forgot/reset password (DONE)
   - validation on status (DONE)
   - edit account status (admin)
   - upload avatar (DONE)
   - product page theo category (DONE)
   - View order (DONE)
   - cancel order (DONE)
   - delete account (DONE)
   - payment method
   - login by OAuth   
   - when click on "Giới thiệu", navigate to a specific location on the same page (DONE)
   - add a spinning circle when waiting for sending email 
   - remember me
   - rating
   - change language
 * Admin:
   - Add anything new by import excel file
   1. Manage account
      *  Log In/Log Out (DONE)
      * View account list (DONE)
      * Create account (DONE)
      * Edit Account (DONE)
      * Delete account (DONE)
      * Change Password (DONE)
   2. Manage product
      *  View product (DONE)
      *  Add a new product (DONE)
      *  Edit a product (DONE)
      *  Delete a product (DONE)
      *  Search for a product (DONE)
      *  Add multiple images
      *  Manage revenue
   3. Manage order
      *  View order (DONE)
      *  Search order (DONE)
      *  Change order’s status (DONE)
      *  Cancel Order (DONE)
   4. Cart
      * nếu bấm trừ khi sản phẩm qty = 1, xóa sản phẩm (DONE)
      * nếu sản phẩm đã có trong cart, khi add to cart kèm số lượng cụ thể thì sẽ update số lượng của sản phẩm trong cart (DONE)
   5. Discount


   String[] PRODUCT_HEADERs = { "product_id", "name", "price", "product_info", "product_detail", "rating_star",
         "product_image_name", "category_id", "stock_qty" };