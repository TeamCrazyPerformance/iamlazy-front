<template>
  <b-modal
    id="todoModal"
    v-model="showTodoModal"
    @ok="onSubmit"
    title="오늘의 할일"
  >
    <b-form-input
      id="todoTitle"
      v-model="todo.todoTitle"
      type="text"
      placeholder="title"
    />
    <b-form-select
      id="repeatableUnit"
      v-model="todo.repeatUnit"
      :options="repeatUnitOptions"
    />
    <div
      id="repeatable"
      v-show="!!todo.repeatUnit"
    >
      <b-form-datepicker
        id="startDate"
        v-model="todo.startDate"
        class="mb-2"
      />
      <b-form-datepicker
        id="endDate"
        v-model="todo.endDate"
        class="mb-2"
      />
    </div>
    <b-form-checkbox
      id="finish"
      v-model="todo.finish"
    >
      완료하였습니다!
    </b-form-checkbox>
    <b-form-textarea
      id="todoContent"
      v-model="todo.todoContent"
      placeholder="content"
      rows="3"
      max-rows="6"
    />
  </b-modal>
</template>

<script>
export default {
  name: 'TodoModal',
  props: {
    todoIdx: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      showTodoModal: true,
      repeatUnitOptions: [
        { text: '반복없음', value: 0 },
        { text: '매일', value: 1 },
        { text: '매주', value: 2 },
        { text: '매월', value: 3 }],
      todo: null,
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.todo));
    },
  },
  created() {
    this.todo = { ...this.$store.getters.todoByIdx(this.todoIdx) };
  },
};
</script>

<style scoped>
#todo {
  padding: 5%;
}
#todo * {
  margin-top: 5%;
}
p {
  display: inline-block;
  text-align: center;
  width: 90%;
  margin-bottom: 0px;
  font-size: 25px;
}
#back {
 vertical-align: top;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
