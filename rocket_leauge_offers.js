var posts = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length - 1;
var postsArray = [];
for(let i=1; i<posts; i++){
	let post = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText;
	numb = post.match(/\d/g);
	if(numb != null){
		numb = numb.join("");
		postsArray.push(parseInt(numb));
	}
}

copy(postsArray);
