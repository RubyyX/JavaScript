// Program that scrapes the terraria wiki for all the armour names (was done so I could try collect the whole set)

var arr1 = [];
for(let i=0; i<document.getElementsByClassName("topline").length; i++){
	arr1.push(document.getElementsByClassName("topline")[i].getElementsByTagName("td")[1].innerText);
};

var arr2 = [];
for(let i=0; i<document.getElementsByTagName("tbody")[1].getElementsByTagName("tr").length; i++){
	arr2.push(document.getElementsByTagName("tbody")[1].getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText);
}
var arr3 = arr1.concat(arr2);
copy(arr3);
