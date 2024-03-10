// const s=new String("min ga lar pr byar san kyi tar pr");
// console.log(s);
// console.log(s[0]);
// console.log(s[4]);
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,14));
// console.log(s.substring(19,35));
// console.log(s.substr(0,14));
// console.log(s.search("aung"));
// console.log(s.search("pr"));
// console.log(s.search("min"));
// console.log(s.replace("pr","bl"));
// console.log(s.replaceAll("pr","bl"));
// 
// const s1=new String("   Hola    Espanyol   ");
// console.log(s1);
// console.log(s1.length);
// console.log(s1.trim());
//
// 6 digit lucky draw => coupon 
// 000001
// 000025
// const s2=new String(7);
// console.log(s2);
// console.log(s2.padStart(6,"0"));
// console.log(s2.padEnd(6,"1"));
// console.log(s2.padStart(9,"9"));
// 
// Split (String to array)
// console.log(s.split());
// console.log(s.split(""));
// console.log(s.split(" "));
// console.log(s.split("a"));

console.log(typeof String());
const s=new String("My girlfriend is white and beautiful lady and having a sweet smile");
console.log(typeof s);
console.log(s);
console.log(s[0]);
console.log(s[4]);
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
// substring
console.log(s.substring(0,22));
console.log(s.substring(26,67));
console.log(s.substr(0,36));
// replace
console.log(s.replace("and",","));
console.log(s.replaceAll("and",","));
// search
console.log(s.search("ngatone"));
console.log(s.search("My"));
console.log(s.search("white"));
// Trim
const s1=new String("   Okay    par     ");
console.log(s1);
console.log(s1.length);
console.log(s1.trim());
console.log(s1.trim().length);
console.log(s1.trimStart());
console.log(s1.trimEnd());
// PadStart & PadEnd
const s2=new String(9);
console.log(s2);
console.log(s2.padStart(6,0));
console.log(s2.padEnd(9,0));
// Split changing object to array
console.log(s);
console.log(s.split());
console.log(s.split(""));
console.log(s.split(" "));
console.log(s.split("a"));




