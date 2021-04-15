<template>
  <div class="form">
    <h1 class="d-flex justify-content-center pt-4 form-title">
      {{ $t("menu.register") }} ❤️
    </h1>
    <form id="formregister" @submit="checkForm" method="post">
      <div class="form-group">
        <label for="exampleInputName"> {{ $t("form.name") }}</label>
        <input
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          id="exampleInputName"
          aria-describedby="NameHelp"
          placeholder="Duke"
        />
        <p class="form-color" v-if="nameValidationError">
          {{ nameValidationError }}
        </p>
        <small id="SNameHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputSecond"> {{ $t("form.lastname") }}</label>
        <input
          v-model="lastname"
          type="text"
          name="lastname"
          class="form-control"
          id="exampleInputSecond"
          aria-describedby="SNameHelp"
          placeholder="Nukem"
        />
        <p class="form-color" v-if="lastnameValidationError">
          {{ lastnameValidationError }}
        </p>
        <small id="PseudoHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputPseudo">{{ $t("form.username") }}</label>
        <input
          v-model="username"
          type="text"
          name="username"
          class="form-control"
          id="exampleInputPeusod"
          aria-describedby="PseudoHelp"
          placeholder="Spooknick01"
        />
        <p class="form-color" v-if="usernameValidationError">
          {{ usernameValidationError }}
        </p>
        <small id="EmailHelp" class="form-text text-muted"></small>
      </div>

      <div class="form-group">
        <label for="exampleInputEmail">Email</label>
        <input
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          id="exampleInputEmail"
          aria-describedby="EmailHelp"
          placeholder="callofduty@gmail.com"
        />
        <p class="form-color" v-if="emailValidationError">
          {{ emailValidationError }}
        </p>
        <small id="MdpHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group">
        <label for="exampleInputMdp">{{ $t("form.pass") }}</label>
        <input
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          id="exampleInputMdp"
          placeholder="******"
        />
        <p class="form-color" v-if="passwordValidationError">
          {{ passwordValidationError }}
        </p>
      </div>
      <div class="form-group">
        <label for="exampleInputMdp2">{{ $t("form.passConfirm") }}</label>
        <input
          v-model="confirmpassword"
          name="confirmpassword"
          type="password"
          class="form-control"
          id="exampleInputMdp2"
          placeholder="******"
        />
        <p class="form-color" v-if="confirmPasswordValidationError">
          {{ confirmPasswordValidationError }}
        </p>
      </div>
      <div class="form-check mt-4 form-valid">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">{{
          $t("form.box1")
        }}</label>
      </div>
      <div class="form-check mt-2 form-valid">
        <input type="checkbox" class="form-check-input" id="exampleCheck2" />
        <label class="form-check-label" for="exampleCheck2">
          {{ $t("form.box2") }}</label
        >
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-info my-4 p-2">
          {{ $t("contact.btn") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      errors: [],
      name: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
      confirmpassword: null,
      nameValidationError: null,
      lastnameValidationError: null,
      usernameValidationError: null,
      emailValidationError: null,
      passwordValidationError: null,
      confirmPasswordValidationError: null,
    };
  },
  methods: {
    checkForm: function (e) {
      let validationOk = true;
      this.errors = [];
      this.nameValidationError = null;
      this.lastnameValidationError = null;
      this.usernameValidationError = null;
      this.emailValidationError = null;
      this.passwordValidationError = null;
      this.confirmPasswordValidationError = null;
      if (!this.name) {
        this.nameValidationError = "Entre ton prénom";
        validationOk = false;
      }
      if (!this.lastname) {
        this.lastnameValidationError = "Entre ton nom";
        validationOk = false;
      }
      if (!this.username) {
        this.usernameValidationError = "Entre ton surnom";
        validationOk = false;
      }
      if (!this.email) {
        this.emailValidationError = "Entre ton email";
        validationOk = false;
      }
      if (!this.password) {
        this.passwordValidationError = "Entre un mdp";
        validationOk = false;
      } else if (this.password.length < 6) {
        this.passwordValidationError =
          "Ton mot de passe doit contenir au moins 6 caractères";
        validationOk = false;
      }
      if (!this.confirmpassword) {
        this.confirmPasswordValidationError = "Entre une deuxième fois ton mdp";
        validationOk = false;
      }

      if (
        this.password &&
        this.confirmpassword &&
        this.confirmpassword !== this.password
      ) {
        this.errors.push("les deux mots de passent ne sont pas identiques");
        validationOk = false;
      }
      if (!this.errors.length) {
        return true;
      }

      if (validationOk) {
        this.$store.commit("updateRegisterName", this.name);
        this.$store.commit("updateRegisterLastName", this.lastname);
        this.$store.commit("updateRegisterUsername", this.username);
        this.$store.commit("updateRegisterEmail", this.email);
        this.$store.commit("updateRegisterPassword", this.password);
        this.$router.push("register");
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>
