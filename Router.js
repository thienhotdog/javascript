import Navigo from 'navigo'
import AboutPages from './src/pages/AboutPages';
import FooterWebsite from './src/compoment/website/Footer';
import Header from './src/compoment/website/Header';
import HomePages from './src/pages/HomePaes';
import './style.css'


const router = new Navigo('/');
document.querySelector('#header').innerHTML= Header.render();
document.querySelector('#footer').innerHTML= FooterWebsite.render();


const display = async (page,afterRender) =>{

  document.querySelector('#root').innerHTML = await page;

  if(afterRender){
    await afterRender();
  }

}


const Router = () =>{
  router
    .on("/", () => display(HomePages.render(), HomePages.afterRender))
    .on("/product/:id",({data}) =>{
      const id = data.id;
      display(AboutPages.render(id), AboutPages.afterRender)
    })
    .notFound(() =>{
      console.log("not Found Page");
    })
    .resolve();
}

export default Router;