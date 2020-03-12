<template>
  <div id="login">
    <b-form @submit="onSubmit" @reset="onReset" action="/">
      <b-form-group class="input" id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="input" id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
/* eslint linebreak-style: ["error", "windows"] */
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.password = '';
    },
  },
};
</script>

<style scoped>
#login {
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
}
.input {
    width: auto;
}
button {
    margin: 10px;
}
</style>
