function addProduct(){
	var productTitle=prompt(`What is the new product?`);
	if(productTitle){
		var randomHex1=Math.floor(Math.random()*8);
		var randomHex2=Math.floor(Math.random()*8);
		var randomHex3=Math.floor(Math.random()*8);
		var randomColour=`#`+convertToHex(randomHex1)+convertToHex(randomHex2)+convertToHex(randomHex3);
		var newProduct=document.createElement(`div`);
		newProduct.setAttribute(`class`,`product1`);
		newProduct.setAttribute(`style`,`box-shadow:0px 0px 40px #000,inset 0px 0px 100px;`+randomColour);
		newProduct.innerHTML=`
			<table class="product2">
				<tr>
					<td class="productName" colspan="2">
						`+productTitle+`
					</td>
				</tr>
				<tr>
					<td class="productFloating">
						0
					</td>
					<td class="productTotal">
						0
					</td>
				</tr>
			</table>
		`;
		var ghost=document.querySelector(`#ghost`);
		ghost.parentNode.insertBefore(newProduct,ghost);
	}
}
function convertToHex(hex16){
	var hexValues=[
		`0`,
		`1`,
		`2`,
		`3`,
		`4`,
		`5`,
		`6`,
		`7`,
		`8`,
		`9`,
		`a`,
		`b`,
		`c`,
		`d`,
		`e`,
		`f`
	];
	return hexValues[hex16];
}