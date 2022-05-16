<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo" />
    <span class="addContainer addBtn" v-on:click="addTodo"
      ><i class="fas fa-plus"></i
    ></span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않았습니다.</div>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "./commons/AlertModal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    AlertModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  border-radius: 10px 0 0 10px;
  padding-left: 10px;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 10px 10px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
  cursor: pointer;
}

.closeModalBtn {
  color: #6053f8;
  cursor: pointer;
}
</style>
