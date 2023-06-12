<template>
  <NavBar />
    <div class="main">
      <div class="main__container">
        <div class="main__content">
          <h2>Explore our technologie and the beautiful world of VR</h2>
          <router-link to="/register"
            ><button class="main__btn">Get Started</button></router-link
          >
        </div>
        <div class="main__img--container">
          <img
            src="https://www.venturesquare.net/wp-content/uploads/2018/04/180425-vr-001.png"
            alt="pic"
            class="main__img"
          />
        </div>
      </div>
    </div>
    <div class="experience-container">
      <div class="description-container">
        <h1 class="description1">see the game experience we propose</h1>
        <h2 class="description2">explore our selection below!</h2>
      </div>
      <div class="experiences-container">
        <nuxt-link to="/experience#1" class="experience">
          <img
            src="../assets/experience1.jpg"
            alt="Experience Image"
            class="experience-img"
          />
          <div class="experience-body">
            <h2 class="experience-title">Plant vs Zombie</h2>
            <p class="experience-text">
              "Plants vs. Zombies: Battle for Neighborville VR" is an exciting and
              immersive adaptation of the popular "Plants vs. Zombies" franchise.
              In this game, you enter a colorful and vibrant world where you must
              defend your town against a horde of zombies with the help of your
              team of plants.
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="/experience#2" class="experience">
          <img
            src="../assets/experience2.jpg"
            alt="Experience Image"
            class="experience-img"
          />
          <div class="experience-body">
            <h2 class="experience-title">The Walking Dead</h2>
            <p class="experience-text">
              "The Walking Dead: Saints & Sinners" VR game. Explore the streets of
              post-apocalyptic New Orleans, scavenge for resources, craft weapons
              and make tough decisions to survive. Get ready for an intense and
              immersive VR experience!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="/experience#3" class="experience">
          <img
            src="../assets/experience3.jpg"
            alt="Experience Image"
            class="experience-img"
          />
          <div class="experience-body">
            <h2 class="experience-title">Beat Saber</h2>
            <p class="experience-text">
              Beat Saber VR is a high-energy music game that combines the thrill
              of rhythm games with the immersion of virtual reality. Players slice
              through beats with glowing sabers, while dancing to the beat of the
              music. Come experience the ultimate music game!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="/experience#4" class="experience">
          <img
            src="../assets/experience4.jpg"
            alt="Experience Image"
            class="experience-img"
          />
          <div class="experience-body">
            <h2 class="experience-title">Resident Evil 4</h2>
            <p class="experience-text">
              Resident Evil 4 VR brings the acclaimed survival-horror game to a
              new level of immersion. With intuitive controls and stunning
              graphics, players are transported to a terrifying world of zombies
              and monsters. Get ready to face your fears in this unforgettable VR
              experience.
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="/experience#5" class="experience">
          <img
            src="../assets/experience5.jpg"
            alt="Experience Image"
            class="experience-img"
          />
          <div class="experience-body">
            <h2 class="experience-title">Minecraft VR</h2>
            <p class="experience-text">
              Minecraft VR allows players to explore and build in a fully
              immersive world. Experience the joy of building with your own hands
              in virtual reality, and join with others for unforgettable
              multiplayer adventures. Get ready to craft, mine, and build like
              never before!
            </p>
          </div>
        </nuxt-link>
        <nuxt-link to="/experience#6" class="experience">
          <img
            src="../assets/experience6.jpg"
            alt="Experience Image"
            class="experience-img"
          />
          <div class="experience-body">
            <h2 class="experience-title">Subnautica</h2>
            <p class="experience-text">
              Subnautica VR takes players on an unforgettable adventure beneath
              the waves of an alien planet. With stunning graphics and immersive
              gameplay, players explore the depths, gather resources, and survive
              in a breathtaking underwater world. Dive in and discover the
              mysteries of the deep!
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="home-experience">
      <img
        src="https://images.pexels.com/photos/7864586/pexels-photo-7864586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="home-experience"
        class="home-experience"
      />
      <h1>Experience the best Vr experience of all time!</h1>
      <h2>Learn more about our price below!</h2>
    </div>
    <h1
      style="
        text-align: center;
        margin-bottom: 0px;
        margin-top: 40px;
        color: grey;
        font-size: 24px;
      "
    >
      Frequently Asked Questions
    </h1>
    <div class="faq-container">
      <div class="faq">
        <div class="question">
          <h3>What is the price for 1 hour of Vr experience ?</h3>
  
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div class="answer">
          Our pricing for 1 hour of VR experience varies depending on the package
          you choose. We offer a range of packages to cater to different needs and
          budgets. Our basic package starts at $30 per hour and includes access to
          our standard VR equipment and experiences. Our premium package includes
          access to our latest VR technology and exclusive experiences, and is
          priced at $50 per hour. Please contact us for more details and to book
          your VR experience today!
        </div>
      </div>
      <div class="faq">
        <div class="question">
          <h3>Where are we located ?</h3>
  
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div class="answer">
          Our 5 location are located in the United State and are the following:<br /><br />
          1234 Main Street, New York, NY: Our New York location features
          state-of-the-art VR headsets that provide a fully immersive experience.
          You'll feel like you're really there!<br /><br />
          5678 Hollywood Boulevard, Los Angeles, CA: At our Hollywood location,
          you can experience VR like a movie star. Our equipment is
          top-of-the-line and our content is always cutting-edge.<br /><br />
          9101 International Drive, Orlando, FL: Our Orlando location offers a
          unique VR experience that takes you on a tour of some of the world's
          most famous theme parks. You'll feel like you're really there, riding
          the rides and enjoying the attractions!<br /><br />
        </div>
      </div>
      <div class="faq">
        <div class="question">
          <h3>What types of experiences do we offer ?</h3>
  
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div class="answer">
          At our VR experience, we offer a wide range of experiences that are
          designed to transport you to different worlds and dimensions. From
          heart-pumping action and adventure to relaxing and immersive
          environments, we have something for everyone. Some of our most popular
          experiences include:<br /><br />
          1-Action and Adventure: Experience the thrill of being in the middle of
          intense battles and high-speed chases in our action-packed VR
          experiences.<br /><br />
          2-Exploration and Discovery: Discover new worlds and explore unknown
          territories in our immersive and expansive VR environments.
          <br /><br />3-Relaxation and Meditation: Take a break from the stresses
          of everyday life and unwind in our tranquil and calming VR experiences.
          <br /><br />4-Education and Learning: Learn new skills and expand your
          knowledge in our educational and informative VR experiences.
          <br /><br />5-Social and Multiplayer: Connect with friends and other
          players from around the world in our social and multiplayer VR
          experiences.
        </div>
      </div>
      <div class="faq">
        <div class="question">
          <h3>How long does a typical VR experience last ?</h3>
  
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div class="answer">
          The duration of our VR experiences can vary depending on the specific
          experience you choose. Typically, our experiences range from 15 minutes
          to an hour in length. However, some of our more complex and immersive
          experiences may last up to 90 minutes.
        </div>
      </div>
      <div class="faq">
        <div class="question">
          <h3>Is it safe to use VR for extended periods of time ?</h3>
  
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div class="answer">
          Yes, it is generally safe to use VR for extended periods of time, as
          long as certain precautions are taken. However, it's important to keep
          in mind that everyone's experience may differ, and certain individuals
          may experience discomfort or motion sickness when using VR.
  
          <br /><br />To minimize the risk of discomfort or motion sickness, it's
          recommended that users take frequent breaks, especially during longer VR
          sessions. Additionally, it's important to use VR equipment properly and
          according to manufacturer guidelines, and to ensure that the equipment
          is well-maintained and in good condition.
  
          <br /><br />At our VR experience, we take the safety of our customers
          very seriously, and we provide guidelines and recommendations to ensure
          a comfortable and safe experience. If you have any concerns or questions
          about using VR for extended periods of time, please feel free to speak
          with one of our knowledgeable staff members.
        </div>
      </div>
      <div class="faq">
        <div class="question">
          <h3>
            Do I need to make a reservation in advance to experience your VR
            content ?
          </h3>
  
          <svg width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="black"
              stroke-width="7"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
        </div>
        <div class="answer">
          Yes, we highly recommend making a reservation in advance to ensure that
          you have a spot reserved for the VR experience of your choice. While
          walk-ins are welcome, there is no guarantee that we will have available
          time slots to accommodate your visit without a reservation.
          <br />
          <a href="/Contact">Click Here to reserve!</a>
        </div>
      </div>
    </div>
    <section class="pricing">
      <div class="card-wrapper" id="1">
        <div class="card-header" id="pricing1">
          <img src="/assets/priceImg.svg" />
          <h2>Medium</h2>
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
          <h2>Premium</h2>
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
          <h2>Starting</h2>
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
  
  <script>
import '@fortawesome/fontawesome-free/css/all.css'
import NavBar from "../Components/NavBar.vue";

  export default {
  components: {
    NavBar,
  },
    mounted() {
      const faqs = document.querySelectorAll(".faq");
      faqs.forEach((faq) =>
        faq.addEventListener("click", () => {
          faq.classList.toggle("active");
        }),
        this.$nextTick(() => {
        window.scrollTo(0, 0);
      })
      );
      
    },
  };
  </script>
  
  <style>
  * {
    padding: 0;
    margin: 0;
  }
  /* main section */
  
  .main {
    background-color: #141414;
    min-width: 200px;
    overflow-x: hidden; /* Prevent horizontal scrolling */
    margin: 0; /* Remove any default margin */
    padding: 0;
  }
  .main__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-self: center;
    margin: 0 auto;
    height: 90vh;
    background-color: #141414;
    z-index: 1;
    max-width: 1300px;
    max-height: 700px;
    min-height: 700px;
    padding: 0 50px;
  }
  .main__btn {
    font-size: 1rem;
    background-image: linear-gradient(to top, #f77062 0%, #fe51fe 100%);
    padding: 14px 32px;
    border: none;
    border-radius: 4px;
    color: #fff;
    margin-top: 2rem;
    cursor: pointer;
    position: relative;
    transition: all 0.35s;
    outline: none;
  }
  .main__content h2 {
    font-size: 4rem;
    margin-top: 100px;
    background-color: #ff8177;
    background-image: linear-gradient(to top, #ff0844 0%, #ffb1ff 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  .main__btn {
    position: relative;
    z-index: 2;
    color: #fff;
    text-decoration: none;
  }
  .main__btn:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 4px;
  }
  .main__btn:hover {
    color: #fff;
    animation: pulse 0.5s;
  }
  .main__btn:hover:after {
    width: 100%;
  }
  .main__img {
    height: 80%;
    width: 80%;
  }
  @media screen and (max-width: 1000px) {
    .main__img--container {
      text-align: center;
      margin-right: 50px;
    }
    .main__container {
      display: grid;
      grid-template-columns: auto;
      align-items: center;
      justify-self: center;
      width: 100%;
      min-height: 1000px;
      width: 400px;
      margin: 0 auto;
      height: 100%;
    }
    .main__content {
      text-align: center;
      margin-bottom: 4rem;
    }
    .main__content h1 {
      font-size: 2.5rem;
      margin-top: 2rem;
    }
    .main__content p {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
    .experiences-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-auto-rows: auto;
      gap: 30px;
      padding: 50px;
      justify-content: center;
      grid-gap: 40px;
      max-width: 1050px;
      min-width: 1050px;
      width: 100%;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 480px) {
    .main__content h2 {
      font-size: 50px;
      margin-top: 3rem;
    }
    .main__btn {
      padding: 12px 36px;
      margin: 2.5rem 0;
    }
    .main__container {
      display: grid;
      grid-template-columns: auto;
      align-items: center;
      justify-self: center;
      width: 100%;
      min-height: 1000px;
      width: 260px;
      margin: 0 auto;
      height: 100%;
    }
  }
  
  /* Experience Card */
  
  .description1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .description2 {
    font-size: 24px;
  }  
  .experience {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }
  
  .experience-img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 20px;
    max-width: 100%;
    min-height: 250px;
  }
  .experience-body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-height: 200px;
  }
  
  .experience-title {
    font-size: 24px;
    margin-bottom: 10px;
    color: black;
    text-decoration: underline;
    text-decoration-color: white;
  }
  
  .experience-text {
    font-size: 16px;
    color: #6c757d;
    text-decoration: underline;
    text-decoration-color: white;
  }
  .experiences-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 30px;
    padding: 50px;
    justify-content: center;
    grid-gap: 30px;
    max-width: 1050px;
    min-width: 1050px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
  }
  
  .experience:hover {
    transform: scale(1.1);
  }
  
  .experience:hover {
    cursor: pointer;
  }
  .description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    color: #828282;
    margin-bottom: -10px;
    margin-top: 50px;
  }
  @media screen and (max-width: 1150px) {
    .experiences-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 30px;
    padding: 50px;
    justify-content: center;
    grid-gap: 30px;
    max-width: 900px;
    min-width: 900px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    }
  }
  @media screen and (max-width: 1000px) {
    .experiences-container {
      display: flex;
      flex-direction: column;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      gap: 30px;
      padding: 50px;
      justify-content: center;
      grid-gap: 30px;
      width: 100%;
      max-width: 350px;
      min-width: 30px;
      width: 100%;
      margin: 0 auto;
      margin-top: 50px;
    }
  }
  @media screen and (max-width: 452px) {
    .experiences-container {
      display: flex;
      flex-direction: column;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      gap: 30px;
      padding: 50px;
      justify-content: center;
      grid-gap: 30px;
      width: 250px;
      margin: 0 auto;
      margin-top: 50px;
    }
  }
  @media screen and (max-width: 349px) {
    .experiences-container {
      display: flex;
      flex-direction: column;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      gap: 30px;
      padding: 50px;
      justify-content: center;
      grid-gap: 30px;
      width: 150px;
      margin: 0 auto;
      margin-top: 50px;
    }
  }
  @media screen and (max-width: 298px) {
    .experiences-container {
      display: flex;
      flex-direction: column;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: auto;
      gap: 30px;
      padding: 50px;
      justify-content: center;
      grid-gap: 30px;
      width: 100px;
      margin: 0 auto;
      margin-top: 50px;
    }
  }
  
  /* home experience */

  .home-experience {
    width: 100vw;
    height: 51.5vh;
    min-height: 500px;
    max-height: 500px;
    position: relative;
    overflow: hidden;
  }
  .home-experience img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(50%);
  }
  
  .home-experience h1 {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    color: white;
    font-size: 3em;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .home-experience h2 {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    font-size: 2em;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 1100px) {
    .home-experience h1 {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      color: white;
      font-size: 3em;
      text-align: center;
      white-space: nowrap;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .home-experience h2 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      color: white;
      font-size: 2em;
      text-align: center;
      white-space: nowrap;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
  /* FAQ section */
  
  .faq {
    width: 50%;
    max-width: 700px;
    margin-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #141414;
    cursor: pointer;
  }
  .question {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .question h3 {
    font-size: 1.3rem;
    font-family: "Quicksand", "sans-serif";
  }
  .answer {
    color: black;
    max-height: 0;
    overflow: hidden;
    transition: max-height 1.4s ease;
  }
  .answer p {
    font-family: "Quicksand", "sans-serif";
    padding-top: 1rem;
    line-height: 1.6;
    font-size: 1.4rem;
  }
  .faq.active .answer {
    max-height: 1001px;
    animation: fade 1s ease-in-out;
  }
  .faq.active svg {
    transform: rotate(180deg);
  }
  svg {
    transition: transform 0.5s ease-in;
  }
  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  .faq-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  /* pricing section */
  
  .pricing {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;
    margin-top: 50px;
    background-color: #141414;
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
    color: black;
  }
  .card-price {
    display: flex;
    align-items: flex-start;
    margin: 1rem;
    color: black;
  }
  .card-price p {
    font-size: 3rem;
    font-weight: 800;
    color: black;
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
    margin-top: 0px;
    background-color: #141414;
    padding: 7rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .social__media--wrap {
    margin-top: -20px;
  }
  .footer__logo {
    margin-left: -25px;
  }
  }
  </style>
  
