import Navigo from 'navigo';
import HomePages from './src/pages/website/HomePaes';
import './style.css'
import ListProduct from './src/pages/admin/product/List';
import Book_Deatail from './src/pages/website/Product_detail';
import EditBook from './src/pages/admin/product/Edit';
import ListCategory from './src/pages/admin/category/List';
import Signup from './src/pages/website/signup';
import Signin from './src/pages/website/signin';





const router = new Navigo('/');



const display = async (page, afterRender) => {
    document.querySelector('#root').innerHTML = await page;
    if (afterRender) {
        await afterRender();
    }

}


const Router = () => {
    router
        .on("/", () => display(HomePages.render(), HomePages.afterRender))
        .on("/book/:id", ({ data }) => {
            const id = data.id;
            display(Book_Deatail.render(id), Book_Deatail.afterRender)
        })
        .on("/signup", () => {
            display(Signup.render(),Signup.afterRender)
        })
        .on("/signin", () =>{
            display(Signin.render(), Signin.afterRender)
        })
        .on("/admin/edit/product/:id", ({ data }) => {
            const id = data.id;
            display(EditBook.render(id), EditBook.afterRender)
        })
        .on("/admin/listbook", () => {
            display(ListProduct.render(), ListProduct.afterRender)
        })
        .on("/admin/category", () =>{
            display(ListCategory.render())
        })
       
        .notFound(() => {
            console.log("not Found Page");
        })
        .resolve();
}

export default Router;