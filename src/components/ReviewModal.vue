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
      v-model="reviewForm.emoticon"
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
    reviewForm: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
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
        this.reviewForm.reviewContent = this.autoReviewContent;
      },
    },
    manualReviewContent: {
      handler() {
        this.reviewForm.reviewContent = this.manualReviewContent;
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
      alert(JSON.stringify(this.reviewForm));
    },
  },
};
</script>

<style scoped>
#manualReview, #emoticon {
  margin-top: 5%;
}
</style>
