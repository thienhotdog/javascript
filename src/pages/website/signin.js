import { signin } from "../../api/auth";
import { authenticate, isAuthenticated } from "../../auth/util";
import "../../assets/css/website.css";
const Signin = {
  async render() {
    return `
      <div class="wrapper fadeInDown">
      <div id="formContent">
        <h2 class="mt-10"> Đăng nhập</h2>
        <form class="mt-10 mb-10" id="form_signin">
            <div>
              <label >Email</label>
              <br/>
              <input type="email" class="input" id="account" />
            </div>
           
           
            <div>
              <label >Password</label>
              <br/>
              <input type="password" class="input" id="password" />
             
            </div>
            <br/>
            <button type="submit" class="fadeIn fourth btn btn-primary bg-blue-500" >Đăng Nhập</button>
        </form>
      </div>
    </div>
            `;
  },
  afterRender() {
    const btn = document.getElementById("form_signin");
    btn.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const users = {
          email: document.getElementById("account").value,
          password: document.getElementById("password").value,
        };
        const { data } = await signin(users);
        console.log(data);
        authenticate(data);
        alert("đăng nhập thành công");
        if (data.user.id === 1) {
          window.location.href = "/admin/listbook";
        } else {
          window.location.href = "/";
        }
      } catch (error) {
        alert(error.response.data);
      }
    });
  },
};

export default Signin;
