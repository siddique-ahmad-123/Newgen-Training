

//    const arr=[10,20,30,40];
//    const arr2=[12,12,3,2,4];

// //    document.write(arr.concat(arr2));
// //   document.write(arr2.unshift(10));

// //    arr.splice(2,0,60,30,30);
// //    document.write(arr);

// //    arr.slice(1,3);
// //    document.write(arr);

//  num1=parseInt(prompt("enter 1st number"));
//  num2=parseInt(prompt("enter 2st number"));

//    function add(num1,num2){
//     return  num1+num2;
//    }


//    document.write(add(num1,num2));

// num1=parseInt(prompt("enter 1st number"));
//   num2=parseInt(prompt("enter 2st number"));
//   num3=parseInt(prompt("enter 3st number"));

//   function ToFindGreatest(num1,num2,num3){
//      if(num1>num2 && num1>num3){
//         return num1;
//      }
//      else if(num2>num3 && num2>num1){
//         return num2;
//      }
//      else {
//         return num3;
//      }
//   }

//   document.write(ToFindGreatest(num1,num2,num3));

//   num1=parseInt(prompt("enter 1st number"));
//   num2=parseInt(prompt("enter 2st number"));
//   num3=parseInt(prompt("enter 3st number"));


//   const arr=[num1,num2,num3];
//   document.write("<br>",arr);

//   function maxvalue(num1,num2,num3){
//          if(num1>num2 && num1>num3){
//             return num1;
//          }
//          else if(num2>num3 && num2>num1){
//             return num2;
//          }
//          else {
//             return num3;
//          }
//       }
//       document.write("<br>",maxvalue(num1,num2,num3));


//       function minvalue(num1,num2,num3){
//         if(num1<num2 && num1<num3){
//            return num1;
//         }
//         else if(num2<num3 && num2<num1){
//            return num2;
//         }
//         else {
//            return num3;
//         }
//      }
//      document.write("<br>",minvalue(num1,num2,num3));


//    const arr3=[10,20,30,40];
//    const arr2=[12,12,3,2,4];

//     document.write("<br>",arr3.join(arr2));

//     document.write("<br>",arr3.concat(arr2));



// var str=String("hello");
// alert(str);
// alert(str.length);
// String.prototype.getCharAscii=fetchFstAscii;
// var halfLen=0;

// function fetchFstAscii(){
//    alert(this.charCodeAt(0));
//    String.prototype.halfLen=(this.length)/2;
// }

// function show(){
//    str.getCharAscii();
//    alert(str.halfLen);
// }

// var myArray=Array(5);

// myArray[0]=prompt("enter a number")
// myArray[1]=prompt("enter a number")
// myArray[2]=prompt("enter a number")
// myArray[3]=prompt("enter a number")
// myArray[4]=prompt("enter a number")

// alert(myArray);
// alert(myArray.pop());

// function add(){
//    document.frm1.value3.value=parseInt(document.frm1.value1.value) + parseInt(document.frm1.value2.value);
// }

// function displayTime(){
//    var d=new Date;
//   hrs=d.getHours();
//   min=check(d.getMinutes());
//   scnds=d.getSeconds();
//   document.getElementById('currentdate').innerHTML=hrs+":"+min+":"+scnds;
//   setTimeout('displayTime()',1000);
// }

// function myFunction() {
//    window.open("https://www.w3schools.com");
//  }

// function navApp(){
//    alert(navigator.appName);
//    alert(navigator.appVersion);
// }

// try{
// var arr=[1,2,3,4,5,6,7];
// alert(arr.join());

// var arr1=[1,2,3,4,5,6,7];
// document.log(arr1);

// var result=arr[0];
// if(result==undefined){
//     throw  "Warning";
// }


// }
// catch(Warning){
//     alert("danger")
// }

let data = '{"Drs":[' + '{"firstName":"Subhash","lastName":"Sharma"},' + '{"firstName":"Saida","lastName":"Mousafir"},' + '{"firstName":"Renu","lastName":"reischelt"}]}'

let jsonData = JSON.parse(data);

jsonData.Drs.forEach(dr => {
    let fullName = `${dr.firstName} ${dr.lastName}`.toUpperCase();
    console.log(fullName);
    
})
