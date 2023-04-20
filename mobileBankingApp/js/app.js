$(function () {
  gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
  let container = $(".container");
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
  // $("body").css("visibility", "hidden");
  // $("body").load(loadLogin);

  function loadLogin(){
    // console.log("it works!");
    let tl = gsap.timeline({id:"tl00"});
    // GSDevTools.create({animation: "tl00"});
    tl.fromTo(container, {opacity: 0}, {opacity: 1, duration: 1.5});
    tl.from($(".st1"), {fill: "transparent", duration:1.5});
    tl.from($(".st1"), {drawSVG: "0%", duration:1.5}, "-=0.75");
    // console.log($(".st3"));
    tl.from($(".st3"), {opacity: 0, duration: 1, stagger: 0.1, ease: "power4.out"}, "-=1.25");
    tl.from($("input#username"), {opacity: "0", y: 100, duration:0.75}, "-=0.65");
    tl.from($("input#password"), {opacity: "0", y: 100, duration:0.75}, "-=0.65");
    tl.fromTo($("button#submit"), {opacity: "0", y: 100, duration:0.75}, {opacity: 1, y:0}, "-=0.65");


  };
  loadLogin();

  login.css("visibility", "visible");
  checkingMain.css("visibility", "hidden")
  welcomeMain.css("visibility", "hidden");
  submitBtn.click(loadWelcome)

  function loadWelcome() {
    login.css("visibility", "hidden");
    welcomeMain.css("visibility", "visible");
    fullGradient.css("visibility", "hidden");
    let tl = gsap.timeline({id: "tl01"});
    tl.from(welcomeTop,{opacity:0, y: -200, duration: 0.8, ease: "power2.out"}, "+=0.5");
    tl.from(welcomeMiddle,{opacity:0, y: 200, duration: 0.5, ease: "power2.out"});
    // GSDevTools.create({animation: "tl01"});
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
