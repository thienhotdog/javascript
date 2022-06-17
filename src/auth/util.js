export const authenticate = (token) => {
  if (typeof window != undefined) {
    localStorage.setItem("token", JSON.stringify(token));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") return false;

  if (localStorage.getItem("token")) {
    return JSON.parse(localStorage.getItem("token") || "");
  } else {
    return false;
  }
};

export const cartBook = (item) =>{
  const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : []
  console.log(cartItems)
  const indexItem = cartItems.findIndex(element => element.id === item.id);
  if(indexItem >=0){
    cartItems[indexItem].cartQuantity +=1;
  }else{
    const items = {...item,cartQuantity:1};
    cartItems.push(items)
  }
  localStorage.setItem("cart", JSON.stringify(cartItems))
}

export const cart = () =>{
  if(localStorage.getItem("cart")){
    return JSON.parse(localStorage.getItem("cart") || "")
  }
}

export const removeCart = (item) =>{
  const cartItems = cart();
  console.log(cartItems)
  const newCartItems = cartItems.filter(cartItems => cartItems.id != item.id);
  console.log(newCartItems)
  localStorage.setItem("cart", JSON.stringify(newCartItems))
}


export const decreaseCarts = (item) =>{
  const cartItems= cart();
  console.log(cartItems)
  const itemIndex = cartItems.findIndex(cartItems => cartItems.id ===item.id)
  if(cartItems[itemIndex].cartQuantity > 1){
    cartItems[itemIndex].cartQuantity -= 1;
    console.log(cartItems[itemIndex].cartQuantity)
  }else{
    cartItems[itemIndex].cartQuantity = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cartItems))
}

export const clearCart = () =>{
    const cartItems = [];
    localStorage.setItem("cart", JSON.stringify(cartItems))
}



