const form = document.querySelector("#photoUploaderForm");
const photos = document.querySelector("#photos");
const uploaderUi=document.querySelector("#uploaderUi")

uploaderUi.addEventListener("click",() => {
 photos.click();
})

const previewPhotosHandler=(event) => {
    event.preventDefault();
    // console.log(photos.files);
  // [...photos.files].forEach()
    for (const photo of photos.files) {
      const reader = new FileReader();
    // console.log(reader);
    reader.addEventListener("load", (event) => {
      console.log(event.target.result);
      const img = new Image(150,150);
      img.src = event.target.result;
      img.classList.add("rounded-lg","object-cover")
      uploaderUi.append(img);
    });
    reader.readAsDataURL(photo);
    }
    
  }
// form.addEventListener("submit", );
photos.addEventListener("change",previewPhotosHandler)
