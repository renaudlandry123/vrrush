<template>
<NavBar />
<div class="body">
<div class="contact-section">
  <div class="contact-info">
    <div><i class="fas fa-map-marker-alt"></i>1234 Elm Street, Springfield, Freedonia</div>
    <div><i class="fas fa-envelope"></i>vrrush@email.com</div>
    <div><i class="fas fa-phone"></i>+1 (555) 555-1234</div>
    <div><i class="fas fa-clock"></i>Mon - Fri 7:00 AM to 6:00 PM</div>
  </div>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form class="contact" @submit.prevent="submitForm">
      <input type="text" name="name" class="text-box" placeholder="Your Name" v-model="name" required>
      <input type="email" name="email" class="text-box" placeholder="Your Email"  v-model="email" required>
      <textarea name="message" rows="5" placeholder="I'd like to reserve a game of plant vs zombie with two friends for July 10, 2023" v-model="message" required></textarea>
      <input type="submit" name="submit" class="send-btn" value="Submit">
    </form>
  </div>
</div>
</div>
<!--contact section end-->
<div class="footer__container">
<div class="social__media">
  <div class="social__media--wrap">
    <div class="footer__logo">
      <a id="footer__logo">
        <img class="VR-logo" src="https://content.ool.co.uk/wp-content/uploads/VR3480px-VR_Logo_Virtual_Reality_Logo.svg_-300x300.png" />
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
import NavBar from "../Components/NavBar.vue"

export default {
components: {
    NavBar,
  },
data() {
return {
  name: '',
  email: '',
  message: '',
  formSubmitted: false
}
},
mounted() {
 window.scrollTo(0, 0);
}
methods: {
submitForm() {
const router = useRouter();
  // Your code to submit the form data goes here
this.formSubmitted = true;
alert("Your message has been submitted!")
router.push('/');
  }
 }
}
</script>

<style scoped>
@import url('@fortawesome/fontawesome-free/css/all.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Poppins", sans-serif;
}

.body {
height: 1150px;
background: url("https://images.pexels.com/photos/7887140/pexels-photo-7887140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
}

.contact-section{
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}

.contact-info{
color: #fff;
max-width: 500px;
line-height: 65px;
padding-left: 50px;
font-size: 18px;
}

.contact-info i{
margin-right: 20px;
font-size: 25px;
}

.contact-form{
max-width: 700px;
margin-right: 50px;
}

.contact-info, .contact-form{
flex: 1;
}

.contact-form h2{
color: #fff;
text-align: center;
font-size: 35px;
text-transform: uppercase;
margin-bottom: 30px;
}

.contact-form .text-box{
background: #000;
color: #fff;
border: none;
width: calc(50% - 10px);
height: 50px;
padding: 12px;
font-size: 15px;
border-radius: 5px;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
margin-bottom: 20px;
opacity: 0.9;
}

.contact-form .text-box:first-child{
margin-right: 15px;
}

.contact-form textarea{
background: #000;
color: #fff;
border: none;
width: 100%;
padding: 12px;
font-size: 15px;
min-height: 200px;
max-height: 400px;
resize: vertical;
border-radius: 5px;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
margin-bottom: 20px;
opacity: 0.9;
}

.contact-form .send-btn{
float: right;
background: #2E94E3;
color: #fff;
border: none;
width: 120px;
height: 40px;
font-size: 15px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 2px;
border-radius: 5px;
cursor: pointer;
transition: 0.3s;
transition-property: background;
}

.contact-form .send-btn:hover{
background: #0582E3;
}

@media screen and (max-width: 950px){
.contact-section{
flex-direction: column;
margin-top: 100px
}

.contact-info, .contact-form{
margin: 30px 50px;
}

.contact-form h2{
font-size: 30px;
}

.contact-form .text-box{
width: 100%;
}
}

/*css for alert messages*/

.alert-success{
z-index: 1;
background: #D4EDDA;
font-size: 18px;
padding: 20px 40px;
min-width: 420px;
position: fixed;
right: 0;
top: 10px;
border-left: 8px solid #3AD66E;
border-radius: 4px;
}

.alert-error{
z-index: 1;
background: #FFF3CD;
font-size: 18px;
padding: 20px 40px;
min-width: 420px;
position: fixed;
right: 0;
top: 10px;
border-left: 8px solid #FFA502;
border-radius: 4px;
}
/* end Nav-bar */

.footer__container {
background-color: #141414;
padding: 7rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 350px;
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
margin-left: -20px;
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
}
</style>
