
// const intensiveTask = () => {
//     let total = 0;
//     const startTime = performance.now();
//     for (let i = 1; i < 9990000000; i++) {
//       total += i;
//     }
//     const endTime = performance.now();
//     console.log("duration time:", endTime - startTime);
//     return total;
//   };

// addEventListener('message',(message) => {
//     console.log("working process");
//     const total=intensiveTask();
//     // console.log(message);
//     postMessage(total)
// })

const intensiveTask = () => {
  let total = 0;
  const startTime = performance.now();
  for (let i = 1; i < 9999999000; i++) {
    total += i;
  }
  const endTime = performance.now();
  console.log("duration time", endTime - startTime);
  return total;
};

addEventListener('message',(message) => {
  console.log(message);
  const total=intensiveTask();
  postMessage(total);
})