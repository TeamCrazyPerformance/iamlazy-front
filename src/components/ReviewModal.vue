<template>
  <b-modal
    id="review"
    v-model="modal"
    @ok="submitReview"
    title="오늘의 회고"
  >
    <b-form-select
      id="autoReview"
      v-model="autoReviewContent"
      :options="autoReviewOptions"
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
      v-model="emoticon"
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
      modal: true,
      emoticon: 0,
      emoticonOptions: [
        { item: 0, name: ':)' },
        { item: 1, name: ':(' },
        { item: 2, name: ':0' },
        { item: 3, name: ':|' }],
      autoReviewContent: '직접입력',
      autoReviewOptions: ['직접입력', '알찬하루', '게을렀다'],
      manualReviewContent: '',
    };
  },
  computed: {
    isManual() {
      if (this.autoReviewContent === '직접입력') return true;
      return false;
    },
    reviewContent() {
      if (this.isManual) return this.manualReviewContent;
      return this.autoReviewContent;
    },
  },
  methods: {
    submitReview() {
      alert(`reviewContent : ${this.reviewContent}, emoticon : ${this.emoticon}`);
    },
  },
};
</script>

<style scoped>
#manualReview, #emoticon {
  margin-top: 5%;
}
</style>
