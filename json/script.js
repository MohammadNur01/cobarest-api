// let calon = {
//   nama : "Mohammad Nuraini",
//   nip : "312411",
//   email : "daaandff@gmail.com"
// }

// console.log(JSON.stringify(calon));

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//   if(xhr.readyState == 4  && xhr.status == 200){
//     let calon = JSON.parse(this.responseText);
//     console.log(calon);
//   }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

$.getJSON('coba.json', function(data){
  console.log(data);
});