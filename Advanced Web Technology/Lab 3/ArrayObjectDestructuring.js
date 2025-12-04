function destructure(array) {
    const [first, second, third] = array;
    console.log(first);
    console.log(second);
    console.log(third);
}

destructure([1, 2, 3]);

let obj={
    name:"Malay",
    age:20,
    city:"Jamnagar"
}
function destructureobj(obj){
    const {name,age,city}=obj;
    console.log(name);
    console.log(age);
    console.log(city);
}

destructureobj(obj);