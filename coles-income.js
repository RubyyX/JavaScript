// Program that scrapes myColes income page to calculate summary statistics for all time earnings

var length = document.getElementsByClassName("sapMListItems sapMListUl sapMListShowSeparatorsAll sapMListModeSingleSelectMaster")[0].getElementsByClassName("sapMObjectNumberText").length;
var earnings = 0;
var count = 0;

for(var i=0; i<length; i++){
	var pay = document.getElementsByClassName("sapMListItems sapMListUl sapMListShowSeparatorsAll sapMListModeSingleSelectMaster")[0].getElementsByClassName("sapMObjectNumberText")[i].innerText;
	if(pay != "-/-"){
		earnings = earnings + parseFloat(pay);
		count++;
	}
}

console.log("Total Earnings: $" + Math.round(earnings*100)/100);
console.log("Average Weekly: $" + Math.round((earnings*100)/count)/100);
