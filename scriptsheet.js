var affixIdentifier=1;
function addProduct(){
	var productTitle=prompt(`What is the new product?`);
	if(productTitle){
		var randomHex1=Math.floor(Math.random()*6);
		var randomHex2=Math.floor(Math.random()*6);
		var randomHex3=Math.floor(Math.random()*6);
		var randomColour=`#`+convertToHex(randomHex1)+convertToHex(randomHex2)+convertToHex(randomHex3);
		var newProduct=document.createElement(`div`);
		newProduct.setAttribute(`class`,`productContainer`);
		newProduct.setAttribute(`style`,`box-shadow:0px 0px 40px #000,inset 0px 0px 100px`+randomColour);
		newProduct.innerHTML=`
			<table class="productContent" onclick="enterProduct(`+affixIdentifier+`)">
				<tr>
					<td class="productName" colspan="2">
						`+productTitle+`
					</td>
				</tr>
				<tr>
					<td class="productToEnter" id="productToEnter`+affixIdentifier+`">
						0
					</td>
					<td class="productTotal" id="productTotal`+affixIdentifier+`">
						0
					</td>
				</tr>
			</table>
		`;
		var ghost=document.querySelector(`#ghost`);
		ghost.parentNode.insertBefore(newProduct,ghost);
		affixIdentifier++;
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
function enterProduct(productIdentifier){
	var productEntry=prompt(`Enter a value to add to the total. Affix '-' to remove product from all fields. Enter only 'e' to remove product from the 'to enter' field.`);
	if(productEntry){
		if(productEntry==`e`){
			var productEntered=parseInt(prompt(`Enter a value to remove it from the 'to enter' field but not the total.`))
			document.getElementById(`productToEnter`+productIdentifier).innerHTML=parseInt(document.getElementById(`productToEnter`+productIdentifier).innerHTML)-productEntered;
		}else{
			productEntry=parseInt(productEntry);
			document.getElementById(`productToEnter`+productIdentifier).innerHTML=parseInt(document.getElementById(`productToEnter`+productIdentifier).innerHTML)+productEntry;
			document.getElementById(`productTotal`+productIdentifier).innerHTML=parseInt(document.getElementById(`productTotal`+productIdentifier).innerHTML)+productEntry;
		}
	}
	if(document.getElementById(`productTotal`+productIdentifier).innerHTML<0){
		document.getElementById(`productTotal`+productIdentifier).innerHTML=0;
	}
}