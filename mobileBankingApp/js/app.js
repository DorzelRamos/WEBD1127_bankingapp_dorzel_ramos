$(function () {
  let login = $("section#login");
  let welcomeMain = $("section#welcome-main-content");
  let fullGradient = $("div#full-gradient-background");
  let submitBtn = $("button#submit");
  let welcomeTop = $("#welcome-top-content");
  let welcomeMiddle = $("#welcome-middle-content");
  let welcomeBottom = $("#welcome-bottom-content");
  let checkingMain = $("#checking-main-content");
  let checkingBtn = $("#checking");
  let redChevron = $("#left");
  let checkingDataDivs = $(".checking-data-divs");
  console.log(checkingDataDivs);

  login.css("visibility", "visible");
  checkingMain.css("visibility", "hidden")
  welcomeMain.css("visibility", "hidden");


  submitBtn.click(loadWelcome)

  function loadWelcome() {
    login.css("visibility", "hidden");
    welcomeMain.css("visibility", "visible");
    fullGradient.css("visibility", "hidden");
    let tl = gsap.timeline();
    tl.from(welcomeTop,{opacity:0, y: -200, duration: 0.8, ease: "power2.out"}, "+=0.5");
    tl.from(welcomeMiddle,{opacity:0, y: 200, duration: 0.5, ease: "power2.out"});
  }
  checkingBtn.click(loadChecking);
  function loadChecking() {
    welcomeMain.css("visibility", "hidden");
    checkingMain.css("visibility", "visible");
    let tl = gsap.timeline();
    tl.from(checkingDataDivs, {opacity: 0, duration: 2, stagger: 0.3, ease: "power4.out"});

  }

  redChevron.click(reLoadchecking);
  function reLoadchecking() {
    checkingMain.css("visibility", "hidden");
    welcomeMain.css("visibility", "visible");


  }
});
