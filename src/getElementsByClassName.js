// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
var ar = [];
var body = document.body;

var checkClass = (item) => {
if(item.classList && item.classList.contains(className)){
ar.push(item);
}
}

var iterate = (element) =>{
checkClass(element);
element = element.firstChild;

while(element){
iterate(element);
element = element.nextSibling;
}
}


iterate(body);
return ar;
};
