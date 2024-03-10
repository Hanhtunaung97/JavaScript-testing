// console.log(screen);
// console.log(location);
// console.log(history);
// console.log(navigator);
// console.log(navigator.geolocation);
// navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos);
//     console.log(pos.coords.latitude);
//     console.log(pos.coords.longitude);
// })
// console.log(navigator.userAgent);
// console.log(navigator.getBattery().then((battery) => {
//     console.log(battery);
// }));

const photoUploadForm = document.querySelector("#photoUploadForm");
const photos = document.querySelector("#photos");
const uploaderUi = document.querySelector("#uploaderUi");
uploaderUi.addEventListener("click", () => {
  photos.click();
});
const photoPreviewHandler = () => {
  for (const photo of photos.files) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const img = new Image(200, 200);
      img.src = event.target.result;
      img.classList.add("rounded-lg","object-cover", "object-center");
      uploaderUi.append(img);
    });
    reader.readAsDataURL(photo);
  }
};
photos.addEventListener("change", photoPreviewHandler);
