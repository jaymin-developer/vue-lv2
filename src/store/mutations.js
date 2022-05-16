// const addOneItem = (state, todoItem) => {
//   const obj = { completed: false, item: todoItem };
//   // 중복 로직 더 해결하기
//   if (JSON.stringify(state.todoItems).includes(todoItem)) {
//     alert("중복됩니다.");
//     return;
//   } else {
//     localStorage.setItem(todoItem, JSON.stringify(obj));
//     state.todoItems.push(obj);
//   }
// };
// const toggleOneItem = (state, payload) => {
//   state.todoItems[payload.index].completed =
//     !state.todoItems[payload.index].completed;
//   localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// };
// const removeOneItem = (state, payload) => {
//   state.todoItems.splice(payload.index, 1);
//   localStorage.removeItem(payload.todoItem.item);
// };
// const clearAllItems = (state) => {
//   localStorage.clear();
//   state.todoItems = [];
// };

// export { addOneItem, toggleOneItem, removeOneItem, clearAllItems };
