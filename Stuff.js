   "username": "user132",
    "password" : "12345678",
    "email" : "user@bezkoder.com",
    "role": [""]

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
Zalo:
1. UI:
   - Đổi ngôn ngữ
2. Function:


----------------------------------------------------------------------------------------------------
Final project:
1. BUG:
   - Dùng redux-persist để lưu redux state => có thể refresh trang product details mà không bị mất dữ liệu reducer
   - JPA query: @Query("Select item FROM OrderItems item WHERE item.order_id=:order_id") => OrderItems là entity được khai báo 
   ở be chứ không phải từ database.
   - BE: fasterxml.jackson.databind: thêm jsonignore dưới entity
   - FE: Không lấy được dữ liệu sau khi checkout ?
      => vì initial state rỗng nên không có khả năng lấy order_id, session_id. 
      => SOLUTION: sau khi checkoutAPI, dispatch actionGetOrderInfoRedux với response của checkoutAPI để checkoutReducer có dữ liệu
      (đã có redux-persist ở trên để lưu reducer state)
   - FE: Muốn dùng action thì phải có useDispatch
   - BE: this.passwordEncoder is null khi reset password ?
      => SOLUTION: đổi từ private PasswordEncoder passwordEncoder -> BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10, new SecureRandom());
   - FE: không lấy được ảnh trong product detail ?
      + useEffect đang lấy điều kiện userId để render
      + <img alt="Sample" src={require('../../Assets/Product/' + product.imageName)}/> không chạy được vì:
      => Based on how the packager works, this isn't really possible with require. Packaging happens once before runtime so those variables don't have values yet.
      +
      => SOLUTION: lấy ảnh từ server (be)
   - You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near
   => Đổi tên table trong entity ("Order" => "`Order`")



2. FEATURE
 * checkout: 
 - fe:
    + lấy firstname, lastname, mobile, address, payment
    + user chỉ có 1 cart => cartId = userId
    + 
 - be:
    + checkout gồm 2 phần: order info và order items
    + mỗi order sẽ phân biệt theo session_id. Lấy orderInfo theo orderId, orderItems theo session_id (hoặc order_id)

3. REMAININGS:
 * User:
   - danh sách order (get all orders)
   - phân quyền
   - đặt điều kiện cho các function
   - delete account
   - user change password
   - forgot/reset password
   - validation on status
   - edit account status (admin)
   - upload avatar
   
 * Admin:
   1. Manage account
   •  Log In/Log Out
   * View account list
   * Create account
   * Edit Account
   * Delete account
   •  Change Password
   2. Manage product
   •  View product
   •  Add a new product
   •  Edit a product
   •  Delete a product
   •  Search for a product 
   3. Manage order
   •  View order
   •  Search order
   •  Change order’s status
   •  Cancel Order
