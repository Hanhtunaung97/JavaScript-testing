// console.log(screen);
// console.log(location);
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


const previewPhotoHandler = (event) => {
  event.preventDefault();
  console.log(photos.files);
  for (const photo of photos.files) {
    const fileReader = new FileReader();
    fileReader.addEventListener("load", (event) => {
      console.log(event.target.result);
      const img = new Image(200, 200);
      img.src = event.target.result;
      img.classList.add("object-cover", "object-center", "rounded-lg");
      uploaderUi.append(img);
    });
    fileReader.readAsDataURL(photo);
  }
};

// photoUploadForm.addEventListener("submit", previewPhotoHandler);
photos.addEventListener("change",previewPhotoHandler)
