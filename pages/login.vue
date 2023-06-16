<template>
  <NavBar />
  <div class="container">
    <div class="container-div">
      <input type="checkbox" id="check" />
      <div class="login form">
        <header style="color: black">Login</header>
        <form @submit.prevent="handleSubmit">
          <input
            v-model="email"
            name="name"
            type="text"
            placeholder="Enter your email"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <input type="submit" name="submit" class="button" value="Submit" />
        </form>
        <div class="signup">
          <span style="color: black" class="signup"
            >Don't have an account?
            <nuxt-link to="/register"
              ><label for="check">register</label></nuxt-link
            >
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__container">
    <div class="social__media">
      <div class="social__media--wrap">
        <div class="footer__logo">
          <a id="footer__logo">
            <img class="VR-logo" src="../assets/logo.png" />
            VR RUSH</a
          >
        </div>
        <p class="website__rights">© Vr Rush 2023. All rights reserved</p>
        <div class="social__icons">
          <a href="/" class="social__icon--link" target="_blank">
            <i class="fab fa-tiktok"></i>
          </a>
          <a href="/" class="social__icon--link" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="/" class="social__icon--link" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "../Components/NavBar.vue";
const router = useRouter();

const email = ref("");
const password = ref("");
const formSubmitted = ref(false);

const { login } = useStrapiAuth();

const handleSubmit = async () => {
  try {
    await login({
      identifier: email.value,
      password: password.value,
    });
    formSubmitted.value = true;
    router.push("/");
  } catch (e) {
    alert(e.error.message);
  }
};
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
  @import '@fortawesome/fontawesome-free/css/all.css'
  * {
    margin: 0;
    padding: 0;
    font-family: "poppins", sans-serif;
    box-sizing: border-box;
  }
  .container {
    width: 100%;
    height: 1100px;
    background-image: linear-gradient(rgba(0, 0, 50, 0.8), rgba(0, 0, 50, 0.8)),
    url("https://images.pexels.com/photos/6499177/pexels-photo-6499177.jpeg?auto=compress&cs=tinysrgb&w=600");
    background-position: center;
    background-size: cover;
    position: relative;
  }
  .container-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  max-width: 430px;
  width: 100%;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  }
.container .registration{
  display: none;
}
#check:checked ~ .registration{
  display: block;
}
#check:checked ~ .login{
  display: none;
}
#check{
  display: none;
}
.container .form{
  padding: 2rem;
}
.form header{
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
}
 .form input{
   height: 60px;
   width: 100%;
   padding: 0 15px;
   font-size: 17px;
   margin-bottom: 1.3rem;
   border: 1px solid #ddd;
   border-radius: 6px;
   outline: none;
 }
 .form input:focus{
   box-shadow: 0 1px 0 rgba(0,0,0,0.2);
 }
.form a{
  font-size: 16px;
  color: #009579;
  text-decoration: none;
}
.form a:hover{
  text-decoration: underline;
}
.form input.button{
  color: #fff;
  background: #009579;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin-top: 1.7rem;
  cursor: pointer;
  transition: 0.4s;
}
.form input.button:hover{
  background: #006653;
}
.signup{
  font-size: 17px;
  text-align: center;
}
.signup label{
  color: #009579;
  cursor: pointer;
}
.signup label:hover{
  text-decoration: underline;
}

  /* end Nav-bar */
  
  .footer__container {
    background-color: #141414;
    padding: 7rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 380px;
  }
  #footer__logo {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: -60px;
  }
  .social__icon--link {
    color: #fff;
    font-size: 24px;
  }
  .social__media {
    max-width: 1000px;
    width: 100%;
  }
  .social__media--wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
  }
  .social__icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    margin-bottom: -60px;
  }
  .social__logo {
    color: #fff;
    justify-self: flex-start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  .website__rights {
    color: #fff;
    margin-bottom: -60px;
  }
  @media screen and (max-width: 820px) {
    #footer__logo {
      margin-bottom: 2rem;
    }
    .website__rights {
      margin-bottom: 2rem;
    }
    .footer__link--wrapper {
      flex-direction: column;
    }
    .social__media--wrap {
      flex-direction: column;
    }
    .footer__container {
margin-top: 0px;
background-color: #141414;
padding: 7rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 350px;
}
.social__media--wrap {
    flex-direction: column;
    margin-top: -20px;
  }
  }
  @media screen and (max-width: 480px) {
    .footer__link--items {
      margin: 0;
      padding: 10px;
      width: 100%;
    }
  }
  .btn {
    margin-top: 100px;
    margin-left: -130px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  </style>
  
