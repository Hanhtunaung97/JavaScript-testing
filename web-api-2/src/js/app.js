// console.log(screen);
// console.log(location);
// console.log(history);
// console.log(navigator);
// console.log(navigator.geolocation);
// navigator.geolocation.getCurrentPosition((po) => {
//     console.log(po);
//     console.log(po.coords.latitude);
//     console.log(po.coords.longitude);
// })
// console.log(navigator.userAgent);
// console.log(navigator.getBattery());

const form = document.querySelector("#photoUploadForm");
const photos = document.querySelector("#photos");
const photoUploadUi = document.querySelector("#photoUploadUi");
photoUploadUi.addEventListener("click", () => {
  photos.click();
});

const photoPreview = (event) => {
  event.preventDefault();
  // console.log(photos.files);
  // const photo=photos.files[0];
  // [...photos.files].forEach()
  for (const photo of photos.files) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      console.log(event.target.result);
      const img = new Image(200, 200);
      img.src = event.target.result;
      img.classList.add("rounded-lg","object-cover","object-center")
      photoUploadUi.append(img);
    });
    reader.readAsDataURL(photo);
  }
};
// form.addEventListener("submit",)
photos.addEventListener("change", photoPreview);
