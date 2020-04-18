<template>
  <div
    class="modal-mask"
  >
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h5>새로운 할일</h5>
          <b-button-close
            @click.stop="onClose"
          />
        </div>

        <div class="modal-body">
          <b-form-datepicker
            v-model="todoForm.todoDate"
            class="mb-2"
          />
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
            @click.stop="onSubmit"
          >
            확인
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTodoModal',
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
        todoDate: new Date(),
        repeatUnit: 0,
        startDate: new Date(),
        endDate: new Date(),
        weekDay: '0',
        monthDay: 0,
        finish: false,
      },
      repeatUnitOptions: [
        { text: '반복없음', value: 0 },
        { text: '매일', value: 1 },
        { text: '매주', value: 7 },
        { text: '매월', value: 30 }],
      weekdayOptions: [
        { text: '반복요일을 설정해주세요', value: '0' },
        { text: '월요일', value: '1' },
        { text: '화요일', value: '2' },
        { text: '수요일', value: '3' },
        { text: '목요일', value: '4' },
        { text: '금요일', value: '5' },
        { text: '토요일', value: '6' },
        { text: '일요일', value: '7' },
      ],
      monthdayOptions: [
        { text: '반복일을 설정해주세요', value: 0 },
        ...[...Array(30).keys()].map((num) => num + 1)],
    };
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    onSubmit() {
      alert(JSON.stringify(this.todoForm));
      this.onClose();
    },
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
