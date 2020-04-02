<template>
  <div id="todo">
    <b-button
      variant="outline-secondary"
      id="back"
      @click="goBack()"
    >
      &lsaquo;
    </b-button>
    <p>{{ formatedDate }}</p>
    <b-form @submit="onSubmit">
      <b-form-input
        id="todoTitle"
        v-model="form.todoTitle"
        type="text"
        required
        placeholder="title"
      />
      <b-form-select
        id="repeatableUnit"
        v-model="form.repeatUnit"
        :options="repeatUnitOptions"
        required
      />
      <div
        id="repeatable"
        v-show="form.repeatableYN"
      >
        <b-form-datepicker
          id="startDate"
          v-model="form.startDate"
          class="mb-2"
        />
        <b-form-datepicker
          id="endDate"
          v-model="form.endDate"
          class="mb-2"
        />
      </div>
      <b-form-checkbox
        id="finish"
        v-model="form.finish"
        value="1"
        unchecked-value="0"
      >
        완료하였습니다!
      </b-form-checkbox>
      <b-form-textarea
        id="todoContent"
        v-model="form.todoContent"
        placeholder="content"
        rows="3"
        max-rows="6"
      />
      <b-button
        type="submit"
        variant="primary"
      >
        확인
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      form: {},
      repeatUnitOptions: ['반복없음', '매일', '매주', '매월'],
    };
  },
  created() {
    this.$http.get(`http://121.130.167.189:8092/todos/${this.$route.params.todoId}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzE5NTI1Nzg0IiwiaWF0IjoxNTg1ODEzNDg0LCJleHAiOjE1ODY2Nzc0ODR9.mQRqSx1PoXdUT2Fcmu2zRpx8ijAEJ4-Ibp6dQaNY9Ng8PtHqNsqt9bk8Japbmh4kHtfGlsQkl8XSaflgMbAfYw',
      },
    })
      .then((res) => {
        this.form = res.data;
      })
      .catch();
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
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.goBack();
    },
    goBack() {
      window.history.back();
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
</style>
