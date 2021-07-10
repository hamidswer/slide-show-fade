const background = document.querySelector(".first-background");
const slide = document.querySelector(".slide");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const ImageSrc = ["Img/1.jpg","Img/2.jpg","Img/3.jpg","Img/4.jpg"];
let counter = 0;
let back = function(){
    background.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url('${ImageSrc[counter]}')`;
    slide.style.backgroundImage = `url('${ImageSrc[counter]}')`;
}
previous.addEventListener("click", (e)=>{
    e.preventDefault();
    if (counter == 0) {
        counter = ImageSrc.length;
        back();
    }
    if (counter > 0) {
        counter--;
        back();
    };
});
next.addEventListener("click", (e)=>{
    e.preventDefault();
    if (counter < ImageSrc.length) {
        counter++;
        back();
    };
    if (counter == ImageSrc.length) {
        counter = 0;
        back();
    }
});





































// class Counter {
//     constructor(el,follower,sec){
//     this.followers = follower;
//     this.element = el;
//     this.seconds = sec*1000;
//     this.counter = 0;
//     this.setInt;
//     this.counts();
//     }
//     counts(){
//         this.setInt = setInterval(()=> {
//             if (this.counter < this.followers){
//                 this.counter += Math.round(this.followers/(this.seconds/100)); 
//                 if (this.counter <= this.followers){
//                     this.element.innerHTML = `${this.counter.toString()}`;
        
//                 }
//                 else {
//                     this.element.innerHTML = `${this.followers}`;
//                 } 
//             }
//             else {
//                 this.stop();
//             }
//         }, (this.seconds/100));
//     }
//     stop(){
//         clearInterval(this.setInt);
//     }
// };

// const facebook = new Counter(facebookCounter,6838, 4);
// const twitter = new Counter(twitterCounter,25012, 4);
// const instagram = new Counter(instagramCounter,34129, 4);

