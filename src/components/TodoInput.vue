<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo" />
    <span class="addContainer addBtn" v-on:click="addTodo"
      ><i class="fas fa-plus"></i
    ></span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i
          class="closeModalBtn fa fa-times"
          aria-hidden="true"
          @click="showModal = false"
        >
        </i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from "./commons/Modal.vue";

export default {
  data: function () {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem !== "") {
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput;
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
  components: {
    Modal,
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
</style>
