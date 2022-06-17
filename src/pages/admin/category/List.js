import { getAll } from "../../../api/product";
import HeaderAdmin from "../../../compoment/admin/Header";
import NavAdmin from "../../../compoment/admin/Nav";

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
          ${NavAdmin.render()}
      
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