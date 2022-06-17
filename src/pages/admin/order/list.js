import { getAll } from "../../../api/order";
import HeaderAdmin from "../../../compoment/admin/Header";
import NavAdmin from "../../../compoment/admin/Nav";

const ListOrder = {
  async render() {
    const { data } = await getAll();
    console.log(data);
    const result = data.map((item,index) =>{
        console.log(item.date)
        
        return`
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.amount.toLocaleString()} VNĐ</td>
            <td>${item.date}</td>
            <td>
                ${item.status}
            </td>
            <td>
                <a href="/admin/order/${item.id}"><i class="fas fa-info-circle"></i></a>
            </td>
            <td>
                <a href="/admin/order/update/${item.id}">update</a>
            </td>
        </tr>
        `
    })
    return `
        <div>
        ${HeaderAdmin.render()}
        <div class="container-fluid">
        <div class="row">
        ${NavAdmin.render()}
      
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
            </div>
            <h2>Sản phẩm</h2>
            <div class="table-responsive mt-3">
            <table class="customers">
                <thead>
                   
                    <tr>
                        <th scope="col"> #</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Tổng Giá</th>
                        <th scope="col">Ngày Đặt</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">chi tiết</th>
                        <th scope="col">Action</th>
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
        `;
  },
};

export default ListOrder;
