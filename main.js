import './style.css'
import { loadingpage } from './loadingpage';
import { welcomepage } from './welcomepage';
import { sliderspage } from './sliderspage';
import { loginpage } from './loginpage';
import { homeapage } from './home.js';
import {renderbrandsproduct} from './brandspagescript.js';
import { renderproducts } from './productpage.js';
import { shippingpage } from './shipping.js';
import { cartrender } from './cart.js';
import { renderwishlist } from './wishlist.js';

import Navigo from 'navigo';
export const routes ={
  loading : '/',
  welcome : '/welcome',
  sliders : '/sliders',
  login : '/login',
  home : '/home',
  brand :'/brand',
  product: '/product',
  profile: '/profile',
  cart: '/cart',
  wishlist: '/wishlist'
}
export const router = new Navigo ("/");
router 
.on(routes.loading,loadingpage)
.on(routes.welcome,welcomepage)
.on(routes.sliders,sliderspage)
.on(routes.login,loginpage)
.on(routes.home,homeapage)
.on(routes.brand,renderbrandsproduct)
.on(routes.product,renderproducts)
.on(routes.profile,shippingpage)
.on(routes.cart,cartrender)
.on(routes.wishlist,renderwishlist).resolve();
