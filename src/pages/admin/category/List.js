import { getAll } from "../../../api/product";
import HeaderAdmin from "../../../compoment/admin/Header";

const ListCategory={
   async render(){
        const {data} = await getAll();
        console.log(data);
        const category = data.map(product =>{
            return product.categories.name
        })
        console.log(category)
        const categories = category.reduce((acc, element) =>{
            if(acc.indexOf(element) === -1){
                acc.push(element)
            }
            return acc
        },[])
        const result = categories.map((product,index)=>{
            return`
                <tr>
                    <td>${index+1}</td>
                    <td>${product}</td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                        <button class="btn btn-primary">Edit</button>
                    </td>
                </tr>
            `
        }).join("")
        return`
        <div>
        ${HeaderAdmin.render()}
        <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <span data-feather="home" class="align-text-bottom"></span>
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <span data-feather="file" class="align-text-bottom"></span>
                    Đặt hàng
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/admin/listbook">
                    <span data-feather="shopping-cart" class="align-text-bottom"></span>
                    Sản phẩm
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/admin/category">
                    <span data-feather="users" class="align-text-bottom"></span>
                    Danh mục
                  </a>
                </li>
              </ul>
      
            </div>
          </nav>
      
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">Ư
            <h2>Danh Mục</h2>
            <div class="table-responsive mt-3">
            <table class="customers">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Hành động </th>
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

export default ListCategory;