<template>
  <nav
    class="navbar"
    :style="{ backgroundColor: navBarColor, position: navBarPosition }"
  >
    <div class="navbar__container">
      <router-link to="/" id="navbar__logo" @click="logoClicked">
        <img class="VR-logo" src="../assets/logo.png" />
        VR RUSH</router-link
      >
      <div class="navbar__toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
        <li class="navbar__item">
          <router-link to="/Experience" class="navbar__links"
            >Experience</router-link
          >
        </li>
        <li class="navbar__item">
          <router-link to="/Faq" class="navbar__links">Faq</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/Pricing" class="navbar__links">Pricing</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/Contact" class="navbar__links">Contact</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="/login" v-if="!strapi_jwt" class="navbar__links"
            >Login</router-link
          >
        </li>
        <li class="navbar__avatar" @click="dropdownVisible = !dropdownVisible">
          <img v-if="strapi_jwt" class="avatar" :src="avatarUrl" />
          <div class="dropdown" :class="{ active: dropdownVisible }">
            <div class="logout__btn" @click.prevent="onClick">Logout</div>
          </div>
        </li>
        <li class="navbar__btn">
          <router-link to="/register" v-if="!strapi_jwt" class="button"
            >Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.min.css";

export default {
  name: "NavBar",
  data() {
    return {
      strapi_jwt: undefined,
      avatarUrl:
        "https://www.logolynx.com/images/logolynx/4b/4beebce89d681837ba2f4105ce43afac.png",
    };
  },
  setup() {
    const { logout } = useStrapiAuth();
    const router = useRouter();

    const onClick = () => {
      logout();
      router.push("/");
      location.reload();
    };

    const dropdownVisible = ref(false);

    const mountedd = () => {
      const handleOutsideClick = (event) => {
        const target = event.target;
        const dropdown = document.querySelector(".dropdown");
        if (!dropdown.contains(target)) {
          dropdownVisible.value = false;
        }
      };

      document.addEventListener("click", handleOutsideClick);
    };
    return {
      onClick,
      dropdownVisible,
    };
  },
  mounted() {
    this.strapi_jwt = document.cookie.includes("strapi_jwt");
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");
    const navbarItems = document.querySelectorAll(
      ".navbar__item, .navbar__btn"
    );

    navbarItems.forEach((item) => {
      item.addEventListener("click", () => {
        menu.classList.remove("is-active");
        menuLinks.classList.remove("active");
        menuLinks.style.right = "-1000px";
      });
    });

    menu.addEventListener("click", function () {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", this.handleScroll);

    const dropdownVisible = ref(false);

    const handleOutsideClick = (event) => {
      const target = event.target;
      const dropdown = document.querySelector(".dropdown");
      if (!dropdown.contains(target)) {
        dropdownVisible.value = false;
      }
    };

    document.addEventListener("click", handleOutsideClick);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        this.navBarColor = "black";
        this.navBarPosition = "fixed";
      } else {
        this.navBarColor = "rgba(128, 128, 128, 0.5)";
        this.navBarPosition = "absolute";
      }
    },
    logoClicked() {
      if (this.$route.path === "/") {
        window.location.reload();
        window.scrollTo(0, 0);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Kumbh Sans", sans-serif;
}
.navbar {
  background: #131313;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
.navbar__container {
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
}

#navbar__logo {
  background: linear-gradient(to right, #00ffff, #ff00ff);
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
}
.vr-logo {
  margin-right: 0.5rem;
}
@media screen and (max-width: 360px) {
  .VR-logo {
    display: none;
  }
  #navbar__logo { 
    display: none;
  }
}
.navbar__menu {
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
}
.navbar__links {
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
}
.navbar__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px 20px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 4px;
  background: #ff00ff;
  color: #fff;
}
.button:hover {
  animation: pulse 0.5s;
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.navbar__links {
  height: 80px;
  text-decoration: none;
}

.navbar__links.router-link-active {
  background: linear-gradient(to right, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navbar__links:hover {
  background: linear-gradient(to right, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 1s ease-in-out infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media screen and (max-width: 965px) {
  .navbar__container {
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    top: 0;
  }
  .navbar__menu {
    display: grid;
    grid-template-columns: auto;
    margin: 0;
    width: 100%;
    position: absolute;
    left: -1000px;
    opacity: 0;
    transition: all 0.5 ease;
    height: 94vh;
    z-index: -1;
    margin-top: 80px;
    transition: all 0.5s ease;
    overflow-y: auto;
  }
  .navbar__menu.active {
    background: #131313;
    position: fixed;
    left: 0;
    margin-top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 99;
    height: 100vh;
    font-size: 1.6rem;
  }

  .navbar__toggle .bar {
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background: #fff;
  }
  .navbar_item {
    width: 100%;
  }
  .navbar_item:focus {
    width: 100%;
  }
  .navbar__links {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
  #mobile-menu {
    position: absolute;
    top: 20%;
    right: 5%;
    transform: translate(5%, 20%);
  }
  .navbar__btn {
    padding-bottom: 7rem;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80px;
    margin-top: 0;
  }
  .navbar__toggle .bar {
    display: block;
    cursor: pointer;
  }
  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }
  #mobile-menu.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  #mobile-menu.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  .navbar__toggle {
  cursor: pointer;
}
.navbar__avatar img {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none; /* Set initial border style */
  border-radius: 50%; /* Make the image round */
  transition: border-color 0.3s;
  margin-left: 0px;
}
.navbar__avatar img:hover {
border: 2px solid white; /* Add white border when hovering */
} 
.dropdown {
  position: sticky;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  background-color: #444444;
  padding: 10px;
  display: none;
  border-radius: 5px;
  margin-top: 25px;
}
.dropdown div {
cursor: pointer;
}

.logout__btn {
  color: white;
}

.dropdown.active {
display: block;
}
.dropdown::before {
content: "";
position: absolute;
top: -15px;
left: 50%;
transform: translateX(-50%);
width: 0;
height: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 15px solid #444444;
  }
}

@media screen and (min-width: 965px) {
.navbar__toggle {
  cursor: pointer;
}
.navbar__avatar img {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none; /* Set initial border style */
  border-radius: 50%; /* Make the image round */
  transition: border-color 0.3s;
  margin-left: 20px;
}
.navbar__avatar img:hover {
border: 2px solid white; /* Add white border when hovering */
} 
.dropdown {
position: absolute;
top: 100px;
margin-left: -5px;
width: 100px;
background-color: #ffffff;
background-color: #444444;
padding: 10px;
display: none;
border-radius: 5px;
}
.dropdown div {
cursor: pointer;
}

.logout__btn {
  color: white;
}

.dropdown.active {
display: block;
}
.dropdown::before {
content: "";
position: absolute;
top: -15px;
left: 50%;
transform: translateX(-50%);
width: 0;
height: 0;
border-left: 10px solid transparent;
border-right: 10px solid transparent;
border-bottom: 15px solid #444444;
  }
}
</style>
