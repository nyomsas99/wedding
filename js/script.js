// countdown
simplyCountdown(".simply-countdown", {
  year: 2023, // required
  month: 9, // required
  day: 2, // required
  hours: 8, // Default is 0 [0-23] integer

  words: {
    //words displayed into the countdown
    days: { singular: "hari", plural: "hari" },
    hours: { singular: "jam", plural: "jam" },
    minutes: { singular: "menit", plural: "menit" },
    seconds: { singular: "detik", plural: "detik" },
  },
});
// toggler navbar
const hamburger = document.querySelector(".navbar-toggler");
const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

hamburger.addEventListener("click", function () {
  stickyTop.style.overflow = "visible";
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// scrol; button
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const song = document.querySelector("#song");
let isPlaying = false;
const audioIcon = document.querySelector(".audio-icon-wrapper i");

function disableScroll() {
  scrollTop = window.pageYOffset || document.elementFromPoint.scrollTop;
  scrollLeft = window.pageXOffset || document.elementFromPoint.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(screenTop, screenLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

function enableScroll() {
  window.onscroll = function () {
    rootElement.style.scrollBehavior = "smooth";
    // localStorage.setItem("opened", "true");
    playAudio();
  };

  function playAudio() {
    song.voume = 0.1;
    audioIconWrapper.style.display = "flex";
    song.play();
    isPlaying = true;
  }
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

disableScroll();
// if (!localStorage.getItem("opened")) {
//   disableScroll();
// }

// form
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Success!");
    });
  });
});

// nama user yang di undang
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const namaContainer = document.querySelector(".hero h4 span");
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

document.querySelector("#nama").value = nama;
// sss
