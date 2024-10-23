import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// const { createApp } = Vue
        
// createApp({
    
//   data(){
//     return {              
//       product: 'Socks',
//       brand: 'Vue Mastery',
//       image: './src/assets/socks_black.webp',
//       altText: 'A pair of socks',
//       selectedVariant: 0,
//     //   inStock: false,
//       details: ['80% cooton', '20% polyester', 'Gender-neutral'],
//       variants: [
//         {
//           variantId: 2234,
//           variantColor: 'green',
//           variantImage: './src/assets/socks_green.jpg',
//           variantQuantity: 10,
//         },
//         {
//           variantId: 2235,
//           variantColor: 'red',
//           variantImage: './src/assets/socks_red.jpg',
//           variantQuantity: 0,
//         }
//       ],
//       cart: 0,
//       shipping: "What is shipping??? Say me, please...",
      

//       message: "Hello, from Vue App !",
//       name: 'Pregimagitator, I am ...',
//     }
//   },
  
//   methods: {
//     updateProduct(variantImage, index) {
//         // this.image = variantImage;
//         this.message = index;
//         this.selectedVariant = index;
//         this.image = this.variants[this.selectedVariant].variantImage;
//         // this.message = this.variants[this.selectedVariant].variantQuantity + " "
//         // + this.inStock;   
//         this.message = Vue.version;
//   }
//   },
//   computed:{
//     title(){
//         return this.brand + ' ' + this.product
//     },
//     image(){
//       return this.variants[this.selectedVariant.variantImage]
//     },
//     inStock(){
//       return this.variants[this.selectedVariant].variantQuantity > 0 ? true : false;
//     }
//   },
  
// }).mount('#app')

