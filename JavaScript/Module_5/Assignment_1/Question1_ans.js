function describeValue(ele){
    return `${typeof ele} | ${(ele)? "truthy": "falsy"}`;
}


console.log(describeValue(undefined));
console.log(describeValue(0));
console.log(describeValue("hello"));
console.log(describeValue(45));
console.log(describeValue(null));
console.log(describeValue(NaN));
console.log(describeValue("0"));
