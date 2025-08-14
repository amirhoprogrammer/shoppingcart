import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // لیست آیتم‌های سبد خرید
    total: 0, // قیمت کل
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1; // افزایش تعداد
      } else {
        state.items.push({ ...item, quantity: 1 }); // اضافه کردن آیتم جدید
      }
      state.total += item.cost; // آپدیت قیمت کل
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) {
        state.total -= item.cost * item.quantity; // کم کردن قیمت
        state.items = state.items.filter((i) => i.id !== itemId); // حذف آیتم
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && quantity > 0) {
        state.total += (quantity - item.quantity) * item.cost; // آپدیت قیمت
        item.quantity = quantity; // آپدیت تعداد
      }
    },
  },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
