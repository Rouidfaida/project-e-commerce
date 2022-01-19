import axios from "axios";
import { ADD_ITEM, ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_FAIL, ADD_PRODUCT_TO_CART_SUCCESS, DELETE_ITEM, VIDER_CART } from "./cartActionType";

export const addProductsCart = (newcommande) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT_TO_CART });
    let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
    try {
      const res = await axios.post("/commande/newCommande",newcommande,config);
      
      dispatch({
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_TO_CART_FAIL,
        payload: error.response.data,
      });
    }
  };
  
//   export const handelAddProductCart=(id,title,quantity,price)=>{
//     return{
//         type:ADD_ITEM,
//         payload:{id,title,quantity,price}
//     } export const removeFromCart = (id) => (dispatch,getState) => {
  
// }
export const handelDelete=(id)=> (dispatch)=>{
  dispatch({
      type:DELETE_ITEM,
      payload:id
  })


}
export const videCart=()=> (dispatch)=>{
  dispatch({
      type:VIDER_CART,
  })

}
// export const handelAdd=(newProduct)=>{
//   return{
//       type:ADD_ITEM,
//       payload:newProduct
//   }
// }
export const addToCart = (id,qty) =>async(dispatch,getState)=> {
  const res = await axios.get(`/product/getProductById/${id}`)
  dispatch({
      type: ADD_ITEM,
      payload:{
          id: res.data._id,
          title: res.data.title,
          price: res.data.price,
          imageUrl:res.data.imageUrl,
          quantityStock:res.data.quantityStock,
          qty
      }
  })

}
// export const addToCart = (id ,qty) => async (dispatch,getState) => {
      
//   let {data} = await axios.get(`/product/getProductById/${id}`)
//   console.log(data)
//   dispatch({
//       type : ADD_ITEM ,
//       // payload : res.data._id ,
//       // qty
//        payload : {
//         id :data._id ,
//         title :data.title ,
//         price : data.price,
//         category :data.category ,
//         quantityStock :data.quantityStock ,
//         imageUrl :data.imageUrl,
//         description:data.description,
//         qty
//       } 
//   })
//  }