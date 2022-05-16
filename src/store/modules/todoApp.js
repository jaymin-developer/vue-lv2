const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        console.log(arr);
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
};

const mutations = {
  addOneItem(state, todoItem) {
    const obj = { completed: false, item: todoItem };
    // 중복 로직 더 해결하기
    if (JSON.stringify(state.todoItems).includes(todoItem)) {
      alert("중복됩니다.");
      return;
    } else {
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    }
  },
  toggleOneItem(state, payload) {
    state.todoItems[payload.index].completed =
      !state.todoItems[payload.index].completed;
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  },
  removeOneItem(state, payload) {
    state.todoItems.splice(payload.index, 1);
    localStorage.removeItem(payload.todoItem.item);
  },
  clearAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  },
};

export default {
  state,
  getters,
  mutations,
};
