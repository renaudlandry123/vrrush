<template>
  <NavBar/>
    <div class="container">
  
      <form ref="form" @submit="handleSubmit">
      <div class="row">
        <div class="col">
          <h3 class="title">billing address</h3>

          <div class="inputBox">
            <span style="color: black">full name :</span>
            <input type="text" placeholder="John Doe" required v-model="fullName">
          </div>
          <div class="inputBox">
            <span style="color: black">email :</span>
            <input type="email" placeholder="JohnDoe@gmail.com" required v-model="email">
          </div>
          <div class="inputBox">
            <span style="color: black">address :</span>
            <input type="text" placeholder="room - street - locality" required v-model="address">
          </div>
          <div class="inputBox">
            <span style="color: black">city :</span>
            <input type="text" placeholder="Houston" required v-model="city">
          </div>

          <div class="flex">
            <div class="inputBox">
              <span style="color: black">state :</span>
              <input type="text" placeholder="Texas" required v-model="state">
            </div>
            <div class="inputBox">
              <span style="color: black">zip code :</span>
              <input type="text" placeholder="123 456" required v-model="zipCode">
            </div>
          </div>
        </div>

        <div class="col">
          <h3 class="title" style="color: black">payment</h3>

          <div class="inputBox">
            <span style="color: black">cards accepted :</span>
            <img src="/assets/card_img.png" alt="">
          </div>
          <div class="inputBox">
            <span style="color: black">name on card :</span>
            <input type="text" placeholder="mr. john deo" required v-model="nameOnCard">
          </div>
          <div class="inputBox">
            <span style="color: black">credit card number :</span>
            <input placeholder="1111-2222-3333-4444" required v-model="creditCardNumber">
          </div>
          <div class="inputBox">
            <span style="color: black">exp month :</span>
            <input type="text" placeholder="january" required v-model="expMonth">
          </div>

          <div class="flex">
            <div class="inputBox">
              <span style="color: black">exp year :</span>
              <input type="text" placeholder="2022" required v-model="expYear">
            </div>
            <div class="inputBox">
              <span style="color: black">CVV :</span>
              <input type="text" placeholder="1234" required v-model="cvv">
            </div>
          </div>
        </div>
      </div>
      <div class="row" >
      <div class="checkout-row">
          <h3 class="title" style="font-size: 25px;">Checkout</h3>
          <span class="item-price" style="color: grey">300,00$  Or 3 payment of 100$</span>
          <p style="color: grey">Perfect for peoples that want to enjoy all our VIP equipments</p>
          <h3 class="total">Sub-Total: 300$</h3>
      </div>
  </div>
  
      <input type="submit" value="Buy Membership" class="submit-btn">
  
  </form>
  
  </div>  
  <div class="footer__container">
      <div class="social__media">
        <div class="social__media--wrap">
          <div class="footer__logo">
            <a id="footer__logo">
              <img class="VR-logo" src="/assets/logo.png" />
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
  
  <script>
  import NavBar from '../Components/NavBar.vue'
  import '@fortawesome/fontawesome-free/css/all.css'
  
  export default {
  components: {
    NavBar,
  },
    mounted() {
      this.$nextTick(() => {
        const form = this.$refs.form;
        if (form) {
          form.style.transform = "rotateX(45deg)";
          setTimeout(() => {
            form.style.transform = "rotateX(0deg)";
          }, 10);
        }
      });
      window.scrollTo(0, 0);
    },
    methods: {
      handleSubmit() {
        window.location.href = '/';
        alert('Purchase has been made successfully.');
      }
    }
  }
  </script>
  
  <style scoped>
  @import url('@fortawesome/fontawesome-free/css/all.css');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');
  *{
    font-family: 'Poppins', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-transform: capitalize;
    transition: all .2s linear;
  }
  .container {
    background: linear-gradient(to right, #00ffff, #ff00ff);
    margin-top: -200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    height: 1400px;
    perspective: 1500px;
  }
  
  .container form{
  padding:20px;
  width:700px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}
  .container form .row {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
  
  .container form .row .col{
    flex:1 1 250px;
  }
  
  .container form .row .col .title{
    font-size: 20px;
    color:#333;
    padding-bottom: 5px;
    text-transform: uppercase;
  }
  
  .container form .row .col .inputBox{
    margin:15px 0;
  }
  
  .container form .row .col .inputBox span{
    margin-bottom: 10px;
    display: block;
  }
  
  .container form .row .col .inputBox input{
    width: 100%;
    border:1px solid #ccc;
    padding:10px 15px;
    font-size: 15px;
    text-transform: none;
  }
  
  .container form .row .col .inputBox input:focus{
    border:1px solid #000;
  }
  
  .container form .row .col .flex{
    display: flex;
    gap:15px;
  }
  
  .container form .row .col .flex .inputBox{
    margin-top: 5px;
  }
  
  .container form .row .col .inputBox img{
    height: 25px;
    margin-top: 12px;
    margin-left: 5px;
    filter: drop-shadow(0 0 1px #000);
  }
  
  .container form .submit-btn{
    width: 100%;
    padding: 12px;
    font-size: 17px;
    background: #27ae60;
    color:#fff;
    margin-top: 5px;
    cursor: pointer;
  }
  
  .container form .submit-btn:hover{
    background: #2ecc71;
  }
  .row .checkout-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }
  .checkout-row p {
      border-bottom: 1px solid black; 
  }
  @media screen and (max-width: 610px) {
    .container{
    background: linear-gradient(to right, #00ffff, #ff00ff);
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    height: 1400px;
  }
  }
  @media screen and (max-width: 325px) {
    .container{
    background: linear-gradient(to right, #00ffff, #ff00ff);
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    height: 1400px;
  }
  }
  .checkout-row .title {
    font-size: 20px;
    color: #333;
    padding-bottom: 5px;
    text-transform: uppercase;
  }
  .checkout-row .total {
    font-size: 20px;
    padding-bottom: 5px;
    color: black;
  }
  /* end Nav-bar */
  
  .footer__container {
    background-color: #141414;
    padding: 7rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  @media screen and (max-width: 830px) {
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
  @media screen and (max-width: 830px) {
   .footer__container {
    background-color: #141414;
    padding: 7rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
  }
      </style>
