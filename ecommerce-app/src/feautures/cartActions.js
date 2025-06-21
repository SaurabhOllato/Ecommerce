// src/features/cart/cartActions.js
import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('cart/addToCart');
export const addToWishlist = createAction('wishlist/addToCart');
export const removeFromCart = createAction('cart/removeFromCart');
export const clearCart = createAction('cart/clearCart');

export const incrementQuantity = createAction("cart/incrementQuantity");
export const decrementQuantity = createAction("cart/decrementQuantity");