<template>
  <NavBar />
    <section class="pricing">
    <div class="card-wrapper" id="1">
      <div class="card-header" id="pricing1">
        <img src="/assets/priceImg.svg" />
        <h2 style="color: black">Medium</h2>
      </div>
      <div class="card-detail">
        <p>
          <span class="fas fa-check check" style="color: green"></span>
           Access to all the news about our experiences
        </p>
        <p>
          <span class="fas fa-check check" style="color: green"></span>
          <b> 1</b> pass to enter with your friends
        </p>
        <p>
          <span class="fas fa-check check" style="color: green"></span> VIP material
        </p>
        <p>
          <span class="fas fa-times x" style="color: red"></span> Unlimited access
        </p>
      </div>
      <div class="card-price">
        <p><sup style="color: green">$ </sup>25<sub>/month</sub></p>
      </div>
      <nuxt-link to="/Pricing/checkout/MediumCheckout">
  <button class="card-button" id="button1">GET STARTED</button>
      </nuxt-link>
    </div>
    <div class="card-wrapper" id="pricing2">
      <div class="card-header">
        <img src="/assets/priceImg2.svg" />
        <h2 style="color: black">Premium</h2>
      </div>
      <div class="card-detail">
        <p>
            <span class="fas fa-check check" style="color: green"></span>
          <b> 1</b> Access to all the news about our experiences
        </p>
        <p>
          <span style="color: green" class="fas fa-check check"></span>
         <b> 1</b> pass to enter with your friends
        </p>
        <p>
          <span style="color: green" class="fas fa-check check"></span>
          VIP material
        </p>
        <p>
          <span style="color: green" class="fas fa-check check"></span> Unlimited access
        </p>
      </div>
      <div class="card-price">
        <p><sup style="color: green">$ </sup>45<sub>/month</sub></p>
      </div>
      <nuxt-link to="/Pricing/checkout/PremiumCheckout">
      <button class="card-button">GET STARTED</button>
    </nuxt-link>
    </div>
    <div class="card-wrapper" id="pricing3">
      <div class="card-header">
        <img src="/assets/priceImg3.svg" />
        <h2 style="color: black">Starting</h2>
      </div>
      <div class="card-detail">
        <p>
          <span class="fas fa-check check" style="color: green"></span>
          <b> 1</b> Access to all the news about our experiences
        </p>
        <p>
          <span class="fas fa-times x" style="color: red"></span>
         <b> 1</b> pass to enter with your friends
        </p>
        <p>
          <span class="fas fa-times x" style="color: red"></span> VIP material
        </p>
        <p>
          <span class="fas fa-times x" style="color: red"></span> Unlimited access
        </p>
      </div>
      <div class="card-price">
        <p><sup style="color: green">$ </sup>0<sub>/month</sub></p>
      </div>
      <router-link to="/register"><button class="card-button">GET STARTED</button></router-link>
    </div>
  </section>
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
import NavBar from 'Components/NavBar.vue'
export default {
  components: {
    NavBar,
  },
}
</script>

<style scoped>

/* pricing section */
.body {
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pricing {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5rem;
  background-image: linear-gradient(45deg, #5222d0 0%, #ec615b 100%);
  min-height: 100%;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: auto;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  padding: 2rem;
  margin: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;
}
.card-wrapper:hover {
  transform: scale(1.1);
}
.card-header {
  margin: 1rem;
  text-align: center;
}
.card-header img {
  width: 200px;
  max-width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}
.card-detail {
  width: 100%;
}
.card-detail p {
  padding: 0.6rem 1.5rem;
  font-size: 0.8rem;
  border-bottom: 1px solid #d5d5d5;
}
.card-price {
  display: flex;
  align-items: flex-start;
  margin: 1rem;
}
.card-price p {
  font-size: 3rem;
  font-weight: 800;
}
.card-price p sup,
.card-price p sub {
  font-size: 1;
}
.card-button {
  padding: 0.6rem 3rem;
  border: 2px solid #5222d0;
  background-color: #5222d0;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: all 50ms ease-in;
}
.card-button:not(h2):hover {
  background-color: #4B0082;
}
.card-wrapper:first-child {
  margin-top: 70px;
  height: 600px;
}
.card-wrapper:nth-child(2) {
  margin-top: 30px;
  height: 700px;
  width: 350px;
}
.card-wrapper:nth-child(3) {
  margin-top: 60px;
  height: 600px;
}
@media screen and (max-width: 508px) {
#button1 {
  padding: 0.6rem 3rem;
  border: 2px solid #5222d0;
  background-color: #5222d0;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
  transition: all 50ms ease-in;
  margin-top: -20px;
}
}
/* end Nav-bar */

.footer__container {
  background-color: #141414;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 240px;
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
    margin-top: -20px;
  }
}
@media screen and (max-width: 1000px) {
.card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: auto;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  padding: 2rem;
  margin: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;
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
  margin-top: 0px;
  background-color: #141414;
  padding: 7rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 170px;
}
}
</style>
