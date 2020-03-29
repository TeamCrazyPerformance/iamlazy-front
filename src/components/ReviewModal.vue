<template>
  <b-modal
    id="review"
    v-model="modalShow"
    @ok="submitReview"
    title="오늘의 회고"
  >
    <b-form-select
      id="autoReview"
      v-model="autoReviewContent"
      :options="autoReviewContentOptions"
    />
    <b-form-input
      id="manualReview"
      v-show="isManual"
      v-model="manualReviewContent"
      type="text"
      placeholder="회고를 입력하세요"
      required
    />
    <b-form-radio-group
      id="emoticon"
      v-model="form.emoticon"
      :options="emoticonOptions"
      value-field="item"
      text-field="name"
      name="radio-inline"
    />
  </b-modal>
</template>

<script>
export default {
  name: 'ReviewModal',
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      form: {
        reviewContent: '',
        emoticon: '',
      },
      emoticonOptions: [
        { item: 0, name: ':)' },
        { item: 1, name: ':(' },
        { item: 2, name: ':0' },
        { item: 3, name: ':|' }],
      autoReviewContent: '직접입력',
      autoReviewContentOptions: ['직접입력', '알찬하루', '게을렀다'],
      manualReviewContent: '',
      modalShow: true,
    };
  },
  watch: {
    autoReviewContent: {
      handler() {
        this.form.reviewContent = this.autoReviewContent;
      },
    },
    manualReviewContent: {
      handler() {
        this.form.reviewContent = this.manualReviewContent;
      },
    },
  },
  computed: {
    isManual() {
      if (this.autoReviewContent === '직접입력') return true;
      return false;
    },
  },
  methods: {
    submitReview() {
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
#manualReview, #emoticon {
  margin-top: 5%;
}
</style>
