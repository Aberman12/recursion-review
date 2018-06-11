// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

if(typeof obj === 'number'){
console.log(obj.toString())
return obj.toString();
} else if (typeof obj === 'string'){
console.log(obj)
return  '\"' + obj + '\"';
} else if(typeof obj === 'boolean'){
console.log(obj)
return obj.toString();
} else if(obj === null){
console.log(obj)
return 'null';
} else if(Array.isArray(obj)){
return array(obj);
} else if(typeof obj === 'object' && !Array.isArray(obj)){
 return object(obj);
} else if(typeof obj === 'function'){
return {};
} 

function array(ar){
console.log('ar');
var arStr = '';
for(var j = 0; j < ar.length; j++){
arStr += stringifyJSON(ar[j]) + ',';
}
arStr = arStr.slice(0,arStr.length-1);
return '[' + arStr + ']';
}

function object(obj1){
var objStr = '';
for(var prop in obj1){
objStr += stringifyJSON(prop) + ':' + stringifyJSON(obj1[prop]) + ',';

}
objStr = objStr.slice(0,objStr.length-1);
console.log(objStr);
return '{' + objStr + '}';
}

};
