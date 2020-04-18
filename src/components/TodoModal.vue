<template>
  <div
    class="modal-mask"
  >
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h5>오늘의 할일</h5>
          <b-button-close
            @click.stop="onClose"
          />
        </div>

        <div class="modal-body">
          <b-form-input
            id="todoTitle"
            v-model="todoForm.todoTitle"
            type="text"
            placeholder="title"
          />
          <b-form-select
            id="repeatableUnit"
            v-model="todoForm.repeatUnit"
            :options="repeatUnitOptions"
          />
          <div
            v-show="todoForm.repeatUnit==1"
          >
            <b-form-datepicker
              v-model="todoForm.startDate"
              class="mb-2"
            />
            <b-form-datepicker
              v-model="todoForm.endDate"
              class="mb-2"
            />
          </div>
          <b-form-select
            v-show="todoForm.repeatUnit==7"
            v-model="todoForm.weekday"
            :options="weekdayOptions"
          />
          <b-form-select
            v-show="todoForm.repeatUnit==30"
            v-model="todoForm.monthday"
            :options="monthdayOptions"
          />
          <b-form-checkbox
            id="finish"
            v-model="todoForm.finish"
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
        </div>

        <div class="modal-footer">
          <b-button
            @click.stop="onDelete"
          >
            삭제
          </b-button>
          <b-button
            @click.stop="onSubmit"
          >
            수정
          </b-button>
        </div>
      </div>
    </div>
  </div>
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
      todoForm: {
        userId: null,
        todoIdx: null,
        todoTitle: null,
        todoContent: null,
        todoDate: null,
        repeatUnit: null,
        startDate: null,
        endDate: null,
        weekDay: null,
        monthDay: null,
        finish: null,
      },
      showTodoModal: true,
      repeatUnitOptions: [
        { text: '반복없음', value: 0 },
        { text: '매일', value: 1 },
        { text: '매주', value: 7 },
        { text: '매월', value: 30 }],
      weekdayOptions: [
        { text: '반복요일을 설정해주세요', value: null },
        { text: '월요일', value: '1' },
        { text: '화요일', value: '2' },
        { text: '수요일', value: '3' },
        { text: '목요일', value: '4' },
        { text: '금요일', value: '5' },
        { text: '토요일', value: '6' },
        { text: '일요일', value: '7' },
      ],
      monthdayOptions: [
        { text: '반복일을 설정해주세요', value: null },
        ...[...Array(30).keys()].map((num) => num + 1)],
    };
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    onSubmit() {
      this.$store.dispatch('updateTodo', this.todoForm);
      this.onClose();
    },
    onDelete() {
      this.$store.dispatch('deleteTodo', this.todoIdx);
      this.onClose();
    },
  },
  created() {
    this.todoForm = { ...this.$store.getters.todoByIdx(this.todoIdx) };
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 30%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  color: #000;
  font-size: 15px;
}

.modal-body * {
  margin-top: 5px;
  margin-bottom: 5px;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
</style>
