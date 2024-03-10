// console.log(window);
// // console.log(window.console.log("ha"));

// window.addEventListener("scroll", () => {
//   console.log(scrollY);
// });
// window.addEventListener("load", () => {
//   console.log("after load");
// });
// console.log("before load");
// window.addEventListener("resize",() => {
//     console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(outerWidth);
// console.log(outerHeight);
// })

// set time out
// const run = () => {
//   console.log("I am running");
//   return "this is run";
// };
// setTimeout(run, 3000);

// // set time interval
// const clock = () => {
//   const d = new Date();
//   console.log(d.getHours(), d.getMinutes(), d.getSeconds());
// };
// // setInterval(clock, 1000);
// const timeRunner = document.querySelector(".clock");
// const stopBtn = document.querySelector(".stop-btn");
// const scrollBtn = document.querySelector(".scroll-btn");
// const here=document.querySelector(".here")
// const clockRun = () => {
//   const d = new Date();
//   timeRunner.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
// };
// const setTime= setInterval(clockRun, 1000);

// stopBtn.addEventListener("click", () => {
//   clearInterval(setTime);
// });

// scrollBtn.addEventListener("click",() => {
//     scrollTo(0,here.getBoundingClientRect().y)
// })
// console.log("outer H",outerHeight);
// console.log("outer W",outerWidth);
// console.log("inner H",innerHeight);
// console.log("inner W",innerWidth);

// window.addEventListener("scroll",() => {
//   console.log(scrollY);
// })
// window.addEventListener("load",() => {
//   console.log("this is after loaded");
// })
// console.log("this is before load");
// window.addEventListener("resize",() => {
//   console.log("outer H",outerHeight);
// console.log("outer W",outerWidth);
// console.log("inner H",innerHeight);
// console.log("inner W",innerWidth);
// })
// const clock = document.querySelector(".clock");
// const stopBtn = document.querySelector(".stop-btn");
// const scrollBtn = document.querySelector(".scroll-btn");
// const here=document.querySelector(".here");

// const runTimeOut=() => {
//   console.log("This is running");
// }
// setTimeout(runTimeOut, 3000);
// const clockRun = () => {
//   const d = new Date();
//   clock.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
// };
// const timeInterval= setInterval(clockRun, 1000);

// stopBtn.addEventListener("click",() => {
//   clearInterval(timeInterval)
// })

// scrollBtn.addEventListener("click",() => {
//   scrollTo(0,here.getBoundingClientRect().y)
// })

// console.log(window);
// window.addEventListener("scroll",() => {
//   console.log(scrollY);
// })
// window.addEventListener("resize", () => {
//   console.log("inner w", innerWidth);
//   console.log("inner h", innerHeight);
//   console.log("outer w", outerWidth);
//   console.log("outer h", outerHeight);
// });
// console.log("this is before loaded");
// window.addEventListener("load", () => {
//   console.log("this is after loaded");
// });

// const timer = () => {
//   console.log("This is set time out");
// };
// setTimeout(timer, 3000);

const clock = document.querySelector(".clock");
const stopBtn = document.querySelector(".stop-btn");
const scrollBtn = document.querySelector(".scroll-btn");
const here = document.querySelector(".here");

const setTimeInterval = () => {
  const d = new Date();
  clock.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
};
const clockRunner= setInterval(setTimeInterval, 1000);
stopBtn.addEventListener("click",() => {
  clearInterval(clockRunner);
})

scrollBtn.addEventListener("click",() => {
  scrollTo(0,here.getBoundingClientRect().y);
})
// console.log(screen);
console.log(location);
// console.log(history);
// console.log(navigator);
// console.log(navigator.geolocation);
navigator.geolocation.getCurrentPosition((pos) => {
  // console.log(pos.coords);
  console.log(pos.coords.latitude);
  console.log(pos.coords.longitude);
})
console.log(navigator.userAgent);
console.log(navigator.getBattery().then((battery) => {
  console.log(battery);
  
}));

