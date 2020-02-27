import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);


Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state:{
    wish_count: 0,
    wishlist:[],

    products:[],
    randomProducts:[],
    // products_admin:[],
    single_product:[],
    Loading_id:""
},
actions:{ 

    badgeUpdate(context,count){
            context.commit("BADGE",count)
            },
    
    // getProducts_admin(context){
    //         var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/products/all`;
    //         axios.get(api).then((response)=>{
    //         context.commit("GET_PRODUCTS_ADMIN",response.data.products);
    //         });//end of response
    //         },//end of getProducts

    getProducts(context){
            var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`;
            axios.get(api).then((response)=>{
            context.commit("GET_PRODUCTS",response.data.products);
            context.commit('RAMDOMPRODUCTS');
                });//end of response
                },//end of getProducts
    
    getWishlist(context){
            var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
            axios.get(api).then((response)=>{
            if (response.data.success){
                context.commit("WISHLIST",response.data.data.carts);
                console.log(response.data.data.carts);
            }});//end of response
            },//end of getWishlist

    editWish(context,id){
            context.commit("EDIT_WISH",id);
            var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
            axios.post(api,{ data: { product_id:id,qty:1} }).then((response)=>{
            if (response.data.success){
            console.log(response.data.message);
            context.dispatch("getWishlist");
            context.commit("RESUME_LOADING");
            }
            });},//end of editwish

    deleteWish(context,id){
            var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
            axios.delete(api).then((response)=>{
            console.log(response.data.message);
            if (response.data.success)
            {context.dispatch("getWishlist")}
            });//end of response
            },//end of deleteWish
    
    getSingleProduct(context,id){
            var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${id}`;//get single product detail
            axios.get(api).then((response)=>{
                console.log(`2 ${id}`);
            if (response.data.success)
            {context.commit("GET_SINGLE_PRODUCT", response.data.product);}
            });//end of response 
            },  //end of toBuy    

},//end of actions

mutations:{ 

    BADGE(state, count)
        {state.wish_count=count},

    GET_SINGLE_PRODUCT(state,payload)
        {state.single_product=payload;
        },

    GET_PRODUCTS(state,payload)
        {state.products = payload;
        },

    // GET_PRODUCTS_ADMIN(state,payload)
    //     {state.products_admin = payload;
    //     },

    WISHLIST(state, payload)
        {state.wishlist=payload;
        state.wish_count=payload.length;
        if ($cookies.isKey("cart_info")){
            state.array_wishlist = $cookies.get("cart_info");
            state.set_wishlist = [...new Set(state.array_wishlist)];
        }},

    EDIT_WISH(state,id)
        {state.Loading_id=id;
         // state.array_wishlist.push(id);
         // state.set_wishlist = [...new Set(state.array_wishlist)];
         // $cookies.set("cart_info",state.set_wishlist);
        },

    RESUME_LOADING(state)
        {state.Loading_id=""},  
        
    RAMDOMPRODUCTS(state) {
        const shuffled = state.products.slice(0);
        let i = Number(state.products.length);
        const min = i - 3;
        let temp;
        let index;
        while (i > min) {
            i -= 1;
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
            }
        state.randomProducts = shuffled.slice(min);
          }

    }//end if mutations
});
