
const test = document.getElementsByClassName("img1")[0];
const test1= document.getElementsByClassName("img2")[0];
const test2 = document.getElementsByClassName("img3")[0];
const test3 = document.getElementsByClassName("img4")[0];
const test4 = document.getElementsByClassName("img5")[0];
// const test = document.getElementsByTagName("a")(1);
test.addEventListener("click", changeborder);
test1.addEventListener("click", changeborder);
test2.addEventListener("click", changeborder);
test3.addEventListener("click", changeborder);
test4.addEventListener("click", changeborder);
 function changeborder(x){
x.target.style.border = "5px solid red";  
  }
var imgArray = ["test", "test1", "test2","test3","test4"]

function randomBg() {
    x = Math.random()
    y = Math.round(x * 10)
    if (imgArray[y] != undefined) {
        document.createElementByClassName("blah").style.backgroundImage = 
			"url('" + imgArray[y] + "')"
    } else {
            document.createElementByClassName("blah").style.backgroundImage =
				"url("https://picsum.photos/id/237/200/300")"
    }    
}
