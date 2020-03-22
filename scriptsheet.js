function addTab(){
	var randomHex1=Math.floor(Math.random()*8);
	var randomHex2=Math.floor(Math.random()*8);
	var randomHex3=Math.floor(Math.random()*8);
	var randomColour="#"+convertToHex(randomHex1)+convertToHex(randomHex2)+convertToHex(randomHex3);
	var newTab=document.createElement("div");
	newTab.setAttribute("class","tab");
	newTab.setAttribute("style","box-shadow:0px 0px 40px #000,inset 0px 0px 100px "+randomColour);
	newTab.innerHTML=`<p class="title">Placeholder</p>`;
	var addTab=document.querySelector("#ghost");
	addTab.parentNode.insertBefore(newTab,addTab);
}
function convertToHex(hex16){
	var hexValues=[
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f"
	];
	return hexValues[hex16];
}