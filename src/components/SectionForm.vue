<template>
  <section id="form">
    <v-container fluid>
      <v-row justify="center">
        <div class="rounded black white--text manda-ai">
          <h1 class="display-1">Mande a Real:</h1>
        </div>
      </v-row>
      <v-form
        id="submit-to-google-sheet"
        class="form"
        lazy-validation
        ref="form"
      >
        <v-row>
          <v-col
            v-if="isMobile"
            :class="isMobile ? 'v-col-mobile' : ''"
            cols="12"
            md="6"
          >
            <v-text-field
              hide-details
              outlined
              prefix="Nome:"
              class="add-border"
              placeholder="Insira seu nome"
              v-model="nome"
              :rules="nomeRules"
              name="Nome"
            ></v-text-field>
          </v-col>
          <v-col cols="12" v-else>
            <v-row>
              <v-col cols="6" class="v-col-two-input">
                <v-text-field
                  hide-details
                  prefix="Nome:"
                  class="remove-border-1 underline"
                  placeholder="Insira seu nome"
                  v-model="nome"
                  :rules="nomeRules"
                  name="Nome"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="v-col-two-input">
                <v-text-field
                  hide-details
                  prefix="Telefone:"
                  class="remove-border-2 underline"
                  placeholder="Insira seu telefone"
                  v-model="telefone"
                  v-mask="['(##) # ####-####']"
                  :rules="telefoneRules"
                  name="Telefone"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            v-if="isMobile"
            :class="isMobile ? 'v-col-mobile' : ''"
            cols="12"
            md="6"
          >
            <v-text-field
              hide-details
              outlined
              prefix="Telefone:"
              :class="
                isMobile ? 'change-input-border' : 'change-input-border-desktop'
              "
              placeholder="Insira seu telefone"
              v-model="telefone"
              v-mask="['(##) # ####-####']"
              :rules="telefoneRules"
              name="Telefone"
            ></v-text-field>
          </v-col>
          <v-col cols="12" :class="isMobile ? 'v-col-mobile' : 'v-col-desktop'">
            <v-text-field
              hide-details
              outlined
              prefix="Email:"
              class="change-input-border"
              placeholder="Insira seu Email"
              v-model="email"
              :rules="emailRules"
              name="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12" :class="isMobile ? 'v-col-mobile' : 'v-col-desktop'">
            <v-text-field
              outlined
              hide-details
              class="change-input-border"
              prefix="Motivo do Contato:"
              placeholder="Assunto"
              v-model="assunto"
              :rules="assuntoRules"
              name="Motivo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" :class="isMobile ? 'v-col-mobile' : 'v-col-desktop'">
            <v-textarea
              outlined
              hide-details
              class="change-input-border shapped-bottom"
              placeholder="Sua Mensagem..."
              shaped
              v-model="mensagem"
              :rules="mensagemRules"
              name="Mensagem"
            ></v-textarea>
          </v-col>
          <v-row justify="end">
            <v-btn
              color="black"
              dark
              class="rounded-submit"
              height="60px"
              @click="validarForm($event)"
              :class="{ 'disable-events': !disabledBtn }"
              type="submit"
              >Enviar</v-btn
            >
          </v-row>
        </v-row>

        <transition name="fade">
          <div class="erros" v-show="mostrarErros">
            <span>Todos os campos são obrigatorios</span>
          </div>
        </transition>
      </v-form>
    </v-container>
    <v-dialog v-model="dialogSuccess" max-width="600px">
      <v-card color="#d07300">
        <v-card-text class="feedback-container">
          <h2 class="white--text feedback-success">
            A equipe feijones agradece o seu feedback!!!
          </h2>
        </v-card-text>
      </v-card>
    </v-dialog>
  </section>
</template>
<script src="https://smtpjs.com/v3/smtp.js" defer></script>
<script>
export default {
  name: "SectionForm",
  data: () => ({
    nome: "",
    telefone: "",
    email: "",
    assunto: "",
    mensagem: "",
    regexEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,

    mail: "feijonesmailer@gmail.com",
    password: "cabare1234",

    disabledBtn: true,
    mostrarErros: false,
    dialogSuccess: false,

    nomeRules: [
      (v) => !!v || "Insira seu nome...",
      (v) => v.length >= 3 || "Insira seu nome...",
    ],

    telefoneRules: [(v) => v.length === 16 || "Insira um telefone valido"],

    emailRules: [
      (v) =>
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          v
        ) || "Email invalido",
    ],

    assuntoRules: [(v) => !!v || "Assunto invalido"],

    mensagemRules: [(v) => !!v || "Insira uma mensagem"],
  }),

  methods: {
    validarForm(e) {
      e.preventDefault();

      if (this.$refs.form.validate()) {
        this.mostrarErros = false;
        this.dialogSuccess = !this.dialogSuccess;
        this.sendEmail();
        this.$refs.form.reset();
      } else {
        this.mostrarErros = true;
      }
    },

    /* enviarFormulario() {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwJaagcDoZcQGZNPe34RcEoqP_ONriY1Krn9QIaYfDzOCZq8ETw1iCjaCL49hpJ-XNM/exec";
      const myForm = document.forms["submit-to-google-sheet"];
      fetch(scriptURL, { method: "POST", body: new FormData(myForm) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    }, */

    sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: this.mail,
        Password: this.password,
        To: this.mail,
        From: this.mail,
        Subject: `Feedback - ${this.assunto}`,
        Body: `Nome: ${this.nome}<br />
        Telefone: ${this.telefone}<br />
        Email: ${this.email}<br />
        Assunto: ${this.assunto}<br />
        Mensagem: ${this.mensagem}<br />`,
      }).then((message) => console.log(message));
    },

    limparFormulario() {
      this.nome = "";
      this.telefone = "";
      this.email = "";
      this.assunto = "";
      this.mensagem = "";
    },
  },

  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        default:
          return false;
      }
    },

    verificarCampos() {
      return [
        this.nome,
        this.telefone,
        this.email,
        this.assunto,
        this.mensagem,
      ];
    },
  },

  created() {
    console.log(Email)
  },

  watch: {
    verificarCampos() {
      let [nome, telefone, email, assunto, mensagem] = [
        ...this.verificarCampos,
      ];

      nome ??
        telefone ??
        email ??
        assunto ??
        mensagem ??
        this.limparFormulario();

      if (
        nome &&
        nome.length > 3 &&
        telefone &&
        telefone.length === 16 &&
        this.regexEmail.test(email) &&
        assunto &&
        assunto.length > 0 &&
        mensagem &&
        mensagem.length
      ) {
        this.mostrarErros = false;
      } else {
        this.mostrarErros = false;
      }
    },
  },
};
</script>
<style scoped>
#form {
  background-color: #d07300;
}

.feedback-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem !important;
}

.feedback-success {
  text-align: center;
  font-size: 1.2rem;
  display: flex;
}

.manda-ai {
  box-sizing: content-box;
  width: 250px;
  text-align: center;
  padding: 10px;
  position: relative;
  top: 25px;
  right: 40px;
}

.form {
  margin: 0 auto;
  border: 1px solid black;
  background: url("../assets/bg.jpeg");
  padding: 30px;
  max-width: 800px;
  min-height: 200px;
}

.change-input-border {
  border-radius: 0;
}
.change-input-border-desktop {
  margin-top: 30px;
}
.shapped-bottom {
  border-radius: 0 0 16px 16px;
}

.rounded-submit {
  position: relative;
  border-radius: 10px;
  bottom: 5px;
}

.v-col-mobile,
.v-col-desktop {
  padding: 0;
}
.v-col-mobile:first-of-type,
.second-col {
  margin-top: 30px;
}

.v-col-two-input {
  padding: 0;
  margin-top: 10px;
}

.add-border {
  border-radius: 16px 16px 0 0;
}

.remove-border-1 {
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 15px 10px;
  margin-top: 10px;
  border-radius: 16px 0 0 0;
}

.remove-border-2 {
  border: 0.3px solid rgba(0, 0, 0, 0.4);
  padding: 15px 10px;
  margin-top: 10px;
  border-radius: 0 16px 0 0;
}

.underline >>> .v-input__slot::before {
  border-style: none !important;
}
.underline >>> .v-input__slot::after {
  border-style: none !important;
}

.disable-events {
  pointer-events: none;
  opacity: 0.8 !important;
}

.erros {
  width: calc(100% - 5rem);
  padding: 0.5rem;

  background: black;
  color: #fff;
  text-align: center;

  border-radius: 0.8rem;
  transition: all ease-in-out 1s;
  /* animation-name: showErrors;
  animation-duration: 0.5s;
  animation-direction: linear; */
}

/* ANIMAÇÕES */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-active {
  animation: showErrors 0.3s;
}

.fade-leave-active {
  animation: showErrors 0.3s reverse;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes showErrors {
  from {
    width: 0%;
    opacity: 0;
  }
  to {
    width: calc(100% - 5rem);
    opacity: 1;
  }
}
/* FIM DAS ANIMAÇÕES */
@media only screen and (min-width: 768px) {
  .rounded {
    position: relative;
    right: 120px;
    width: 500px;
  }
}
</style>
