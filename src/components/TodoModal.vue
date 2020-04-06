<template>
  <b-modal
    id="todoModal"
    v-model="showTodoModal"
    @ok="submitTodo"
    title="오늘의 회고"
  >
    <b-form-input
      id="todoTitle"
      v-model="todoForm.todoTitle"
      type="text"
      required
      placeholder="title"
    />
    <b-form-select
      id="repeatableUnit"
      v-model="todoForm.repeatUnit"
      :options="repeatUnitOptions"
      required
    />
    <div
      id="repeatable"
      v-show="todoForm.repeatableYN"
    >
      <b-form-datepicker
        id="startDate"
        v-model="todoForm.startDate"
        class="mb-2"
      />
      <b-form-datepicker
        id="endDate"
        v-model="todoForm.endDate"
        class="mb-2"
      />
    </div>
    <b-form-checkbox
      id="finish"
      v-model="todoForm.finish"
      value="1"
      unchecked-value="0"
    >
      완료하였습니다!
    </b-form-checkbox>
    <b-form-textarea
      id="todoContent"
      v-model="todoForm.todoContent"
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
    todoForm: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showTodoModal: true,
      repeatUnitOptions: ['반복없음', '매일', '매주', '매월'],
    };
  },
  watch: {
    'form.repeatUnit': {
      handler() {
        if (this.form.repeatUnit === '반복없음') this.form.repeatableYN = 0;
        else this.form.repeatableYN = 1;
      },
    },
  },
  computed: {
    formatedDate() {
      if (this.form.todoDate) {
        const date = this.form.todoDate.split('T')[0].split('-');
        return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
      }
      return '0000년00월00일';
    },
  },
  methods: {
    submitTodo() {
      alert(JSON.stringify(this.todoForm));
    },
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
