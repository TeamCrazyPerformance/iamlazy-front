<template>
  <b-modal
    id="reviewModal"
    v-model="showReivewModal"
    @ok="onSubmit"
    title="오늘의 회고"
  >
    <b-form-select
      id="autoReview"
      v-model="review.reviewContent"
      :options="autoReviewOptions"
    />
    <b-form-input
      id="manualReview"
      v-model="review.reviewContent"
      type="text"
      placeholder="회고를 입력하세요"
    />
    <b-form-radio-group
      id="emoticon"
      v-model="review.emoticon"
      :options="emoticonOptions"
      name="radio-inline"
    />
  </b-modal>
</template>

<script>
export default {
  name: 'ReviewModal',
  props: {
    reviewDate: {
      type: Date,
      default: null,
    },
  },
  data() {
    return {
      showReivewModal: true,
      emoticonOptions: [
        { text: ':)', value: 0 },
        { text: ':(', value: 1 },
        { text: ':0', value: 2 },
        { text: ':|', value: 3 }],
      autoReviewOptions: ['직접입력', '알찬하루', '게을렀다'],
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.review));
    },
  },
  computed: {
    review() {
      return this.$store.getters.reviewByDate(this.reviewDate);
    },
  },
};
</script>

<style scoped>
#manualReview, #emoticon {
  margin-top: 5%;
}
</style>
