import { get } from "../../../api/order"
import HeaderAdmin from "../../../compoment/admin/Header";
import NavAdmin from "../../../compoment/admin/Nav";
const OrderDetail = {
    async render(id){
        console.log(id)
        const {data} =  await get(id);
        console.log(data);
        const result = data.product.map(item =>{
            const price = item.current_seller.price*item.cartQuantity
            return`
            <tr>
                <td>${item.name}</td>
                <th><img src="${item.images[0].base_url}" class="img_width" /></th>
                <th>${item.current_seller.price.toLocaleString()}  VNĐ</th>
                <th>${item.cartQuantity}</th>
                <th>${price.toLocaleString()} VNĐ</th>
                <th></th>
            </tr>
            `
        })
        return`
        <div>
        ${HeaderAdmin.render()}
        <div class="container-fluid">
        <div class="row">
        ${NavAdmin.render()}
      
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
            </div>
            <h2>Chi tiết order</h2>
            <div class="table-responsive mt-3">
            <table class="table table-dark">
            <thead>
               <tr>
                   <th scope="col">Sản Phẩm</th>
                   <th scope="col">Ảnh</th>
                   <th scope="col">Giá</th>
                   <th scope="col">Số Lượng</th>
                   <th scope="col">Tổng giá</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
               ${result}
            </tbody>
        </table>
            </div>
          </main>
        </div>
      </div>
        </div>
        `
    }
}
export default OrderDetail