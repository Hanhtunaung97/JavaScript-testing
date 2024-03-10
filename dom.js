// console.dir(document);
// console.log(document.head);
// console.log(document.body);
// const el1=document.createElement("h1");
// el1.innerText="Ming Ga Lar Par"
// el1.classList.add("text-primary","bg-primary-subtle","text-center","mx-3","p-3","rounded")
// el1.style.color="olive"
// el1.style.backgroundColor="purple"
// el1.style.padding="20px"
// const el2=document.createElement("p");
// el2.innerText=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit velit ipsa dolore animi fugit, ad quae adipisci omnis incidunt quaerat ducimus esse natus id totam eaque dolorem! Aut, possimus ullam."
// el2.style.padding="0 20px"
// el2.classList.add("mx-3","p-3","bg-success-subtle","rounded")

// const el3=document.createElement("ul");
// el3.classList.add("list-group","mb-3","ms-3")
// const el4=document.createElement("li");
// el4.innerText="Google";
// el4.classList.add("list-group-item")
// const el5=document.createElement("li");
// el5.innerText="YouTube";
// el5.classList.add("list-group-item")
// const el6=document.createElement("li")
// el6.innerText="Facebook"
// el6.classList.add("list-group-item")
// const frg=document.createDocumentFragment();
// console.dir(frg);
// // append
// frg.append(el4);
// frg.append(el5);
// frg.append(el6);
// el3.append(frg)
// document.body.append(el3)
// prepend
// el3.append(el4);
// el3.prepend(el5);
// el3.prepend(el6);
// const a=document.createElement("a");
// a.href="https://mms-it.com"
// a.innerText="To MMS-IT"
// a.classList.add("btn","btn-primary")
// const btn=document.createElement("button");
// btn.innerText="Search"
// btn.classList.add("btn","btn-outline-success","ms-3")
// // btn.style.marginLeft="20px"
// const greet=() => {
//     console.log("I'm greet");
//     return "Min ga lar par";
// }
// btn.addEventListener("click",greet)
// const br=document.createElement("br");
// const br1=document.createElement("br");

// const img=document.createElement("img")
// img.src="./Image/4.jpg";
// append
// document.body.append(el1);
// document.body.append(el2);
// document.body.append(el3);
// document.body.append(a)
// document.body.append(btn);
// document.body.append(br)
// document.body.append(br1)
// document.body.append(img)
// before & after
// document.body.append(el3)
// el3.before(el2);
// el2.before(el1);
// el3.after(a);
// a.after(btn);
// 
// const button=document.createElement("button");
// console.log(button);
// button.classList.add("btn","btn-primary")
// // button.innerHTML=`<i class='bi bi-house'></i> Home Page`
// const homeBtn=document.createElement("i")
// homeBtn.classList.add("bi","bi-house")
// button.append(homeBtn);
// const textNote=document.createTextNode(" Home page");
// console.dir(textNote);
// button.append(textNote)

// document.body.append(button)

// 
// const ul=document.querySelector("ul");
// console.log(ul);
// console.log(ul.children);
// console.log(ul.childNodes);
// // ul.removeChild(ul.children[2])
// // ul.removeChild(ul.children[1])
// // ul.removeChild(ul.children[0]);
// ul.innerHTML=null;
// const h1=document.querySelector("h1")
// // console.dir(h1.childNodes);
// h1.innerHTML=` <i class="bi bi-list"></i> My Noted`
// console.log(h1.childNodes);
// console.dir(h1.childNodes[2]);
// h1.childNodes[2].nodeValue=" My List"
// console.log(h1);
// h1.remove();
// console.log(document);
// console.log(document.body);
// console.log(document.head);
// const el1=document.createElement("h1");
// el1.innerText="Min Ga Lar Par"
// el1.classList.add("text-primary","bg-primary-subtle","p-3","mx-3","text-center","rounded-3")
// el1.style.color="darkRed"
// el1.style.backgroundColor="olive"
// el1.style.padding="20px";
// console.log(el1);
// const el2=document.createElement("p");
// el2.classList.add("p-3","mx-3","bg-success-subtle")
// el2.style.backgroundColor="pink"
// el2.style.padding="0 20px"
// console.log(el2);
// el2.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem nulla odit beatae dolore facere mollitia distinctio quos. Eos, nulla ratione. Quam, cum modi. Ea aperiam optio beatae vel facere!"
// const el3=document.createElement("ul")
// el3.classList.add("list-group","mb-3")
// const el4=document.createElement("li")
// el4.innerText="Google"
// el4.classList.add("list-group-item")
// const el5=document.createElement("li")
// el5.innerText="YouTube"
// el5.classList.add("list-group-item")
// const el6=document.createElement("li")
// el6.innerText="Facebook"
// el6.classList.add("list-group-item")
// const frg=document.createDocumentFragment();
// frg.append(el4);
// frg.append(el5);
// frg.append(el6)
// el3.append(frg)
// el3.append(el6)
// el3.append(el5);
// el3.append(el4)
// el3.append(el4)
// el3.prepend(el5)
// el3.prepend(el6)
// const a=document.createElement("a")
// a.href="https://mms-it.com"
// a.innerText="To MMS-IT"
// a.classList.add("btn","btn-outline-primary","ms-3")
// const btn=document.createElement("button")
// btn.innerText="Search"
// btn.classList.add("btn","btn-primary","ms-2")
// btn.style.marginLeft="10px"
// const img=document.createElement("img")
// img.classList.add("mb-3")
// img.src="./Image/1.jpg"
// img.width=200;
// const br=document.createElement("br")
// const br1=document.createElement("br")
// console.log(el3);
// document.body.append(el1)
// document.body.append(el2)
// document.body.append(el3)
// document.body.append(a)
// document.body.append(btn)
// document.body.append(br)
// document.body.append(br1)
// document.body.append(img)
// const greet=() => {
//     console.log("I am greet");
//     return "Min ga lar par"
// }
// btn.addEventListener("click",greet)
// document.body.append(el3);
// el3.before(el2);
// el2.before(el1);
// el3.after(btn)
// el3.after(a);
// btn.after(br)
// br.after(br1)
// br1.after(img)
// // 
// const button=document.createElement("button")
// button.classList.add("btn","btn-primary","ms-3")
// button.innerText="Home Page"
// button.innerHTML=`<i class='bi bi-house'></i> Home Page`
// const homeBtn=document.createElement("i")
// homeBtn.classList.add("bi","bi-house")
// button.append(homeBtn)
// const textNote=document.createTextNode(" Home Page")
// button.append(textNote)
// document.body.append(button)
// const ul=document.querySelector("ul")
// console.log(ul.children);
// console.log(ul.childNodes);
// const h1=document.querySelector("h1")
// console.log(h1);
// h1.innerHTML=`<i class='bi bi-list'></i> My Note`
// console.log(h1.children);
// console.log(h1.childNodes);
// h1.childNodes[2].nodeValue=" My Note"
// h1.remove();
// ul.removeChild(ul.children[2])
// ul.removeChild(ul.children[1])
// ul.removeChild(ul.children[0])
// ul.innerHTML=null
console.log(document);
console.log(document.head);
console.log(document.body);
const el1=document.createElement("h1")
el1.innerText="Min Ga Lar Par"
// el1.style.color="olive"
// el1.style.backgroundColor="black"
// el1.style.padding="20px"
// el1.style.textAlign="center"
el1.classList.add("text-success","bg-success-subtle","p-3","m-3","text-center","rounded")
console.log(el1);
const el2=document.createElement("p")
el2.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui enim, libero obcaecati sint magni rerum praesentium temporibus aspernatur, voluptatem dignissimos debitis officiis itaque adipisci modi optio! Iure repellat et voluptas."
// el2.style.padding="0 20px"
// el2.style.backgroundColor="olive"
el2.classList.add("tex-primary","bg-primary-subtle","mx-3","p-3")
const el3=document.createElement("ul")
el3.classList.add("list-group","mb-3","mx-3")
const el4=document.createElement("li");
el4.innerText="Google"
el4.classList.add("list-group-item")
const el5=document.createElement("li")
el5.innerText="Youtube"
el5.classList.add("list-group-item")
const el6=document.createElement("li")
el6.innerText="Facebook"
el6.classList.add("list-group-item")
const a=document.createElement("a")
a.href="https://mms-it.com"
a.innerText="MMS-IT"
a.classList.add("btn","btn-outline-success","ms-3")
const btn=document.createElement("button")
btn.innerText="Search"
btn.classList.add("btn","btn-success","ms-3")
// btn.style.marginLeft="10px"
const img=document.createElement("img")
img.src="./Image/3.jpg"
img.width="200"
const br=document.createElement("br")
const br1=document.createElement("br")
const greet=() => {
    console.log("I am greet");
    return "Min ga lar Par"
}
const button=document.createElement("button")
// button.innerHTML=`<i class='bi bi-house'></i> HomePage`
button.classList.add("btn","btn-primary","ms-5")
const houseIcon=document.createElement("i")
houseIcon.classList.add("bi","bi-house")
button.append(houseIcon)
const textNode=document.createTextNode(" HomePage")
button.append(textNode)
const ul=document.querySelector("ul")
// console.log(ul.children);
// console.log(ul.childNodes);
// ul.removeChild(ul.children[2])
// ul.removeChild(ul.children[1])
// ul.removeChild(ul.children[0])
// ul.innerHTML=null;
const h1=document.querySelector("h1")
// console.dir(h1);
// console.log(h1.children);
console.log(h1.childNodes);
console.dir(h1.childNodes[2]);
h1.childNodes[2].nodeValue=" My Note"
const frg=document.createDocumentFragment()
frg.append(el4)
frg.append(el5)
frg.append(el6)
el3.append(frg)
// console.log(h1.remove());
// el3.append(el4)
// el3.append(el5)
// el3.append(el6)
// el3.append(el6)
// el3.prepend(el5)
// el3.prepend(el4)
// document.body.append(el1)
// document.body.append(el2)
// document.body.append(el3)
// document.body.append(a)
// document.body.append(btn)
// document.body.append(br)
// document.body.append(br1)
// document.body.append(img)
document.body.append(el3)
el3.before(el2)
el2.before(el1)
el3.after(a)
a.after(btn)
btn.after(br)
br.after(br1)
br1.after(img)
document.body.append(button)
btn.addEventListener("click",greet)