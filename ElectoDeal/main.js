let cart= document.querySelectorAll(".btn");

let products=[
	{
	name:'Dell',
	tag:'dell1',
	price: 450,
	incart: 0
	},
	{
	name:'HP Pavilion Aero',
	tag:'hp',
	price: 600,
	incart: 0
	},
	{
	name:'Apple Macbook Air',
	tag:'macbook1',
	price: 800,
	incart: 0
	},
	{	
	name:'Apple Macbook Pro',
	tag:'applemacbookpro',
	price: 899,
	incart: 0
	},
	{
	name:'Iphone 12',
	tag:'iphone12',
	price: 550,
	incart:0
	},
	{
	name:'Iphone 13',
	tag:'iphone13',
	price: 650,
	incart: 0
	},
	{
	name:'Samsung Galaxy S21',
	tag:'samsunggalaxys21',
	price: 750,
	incart: 0
	},
	{
	name:'Samsung Galaxy Fold',
	tag:'samsunggalaxyfold',
	price: 750,
	incart: 0
	},
	{	
	name:'Fossil',
	tag:'fossil',
	price: 250,
	incart: 0
	},
	{
	name:'FitNess Tracker',
	tag:'fitnesstracker',
	price: 199,
	incart:0
	},
	{	
	name:'Apple Watch Serie 6',
	tag:'applewatch6',
	price: 499,
	incart: 0
	},
	{
	name:'Galaxy Watch 5',
	tag:'galaxywatch5',
	price: 250,
	incart:0
	},
]

for(let i=0; i<cart.length; i++){
	cart[i].addEventListener('click', ()=>{
	cartNumbers(products[i]);
	totalcost(products[i]);
	})
}

function onLoadcartNumbers() {
	let productNumbers=localStorage.getItem('cartNumbers');
	
	if(productNumbers){
		//document.querySelector('.cart span').textContent= productNumbers;
	}
}


function cartNumbers(product){

	let productNumbers = localStorage.getItem('cartNumbers');

	productNumbers=parseInt(productNumbers);

	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent= 1;

	}
	setItems(product);
}


function setItem(product){

	let cartItems = localStorage.getItem('productIncart');
	cartItems = JSON.parse(cartItems);

	if(cartItems != null) {

		if (cartItems[product.tag] == undefinied){
			cartItems={ 
				...cartItems, [product.tag]:product
			}
		}
		cartItems[product.tag].incart += 1;
	} else{

		product.incart= 1;
	 	cartItems={ [product.tag]:product
		}
	}

	localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}

function totalcost(product){ 

	let cartCost=localStorage.getItem('totalcost');

	console.log("My cartCost is", cartCost);
	console.log(typeof cartCost);

	if(cartCost != null){
		cartCost=parseInt(cartCost);
		localStorage.setItem("totalcost", cartCost + product.price);

	}else{

			localStorage.setItem("totalcost",product.price);
	}

}
function displaycart(){
	let cartItems=localStorage.getItem("productsIncart");
	cartItems= JSON.parse(cartItems);
	let productContainer=document.querySelector(".product");

	console.log(cartItems);
	if (cartItems && productContainer) {
		productContainer.innerHTML='';
		Object.values(cartItems).map(item =>{
			productContainer.innerHTML += `
			<div class="product">
				<ion-icon name="close-circle"></ion-icon>
				<img src="./image/${item.tag}.jpg"
				<span>${item.name}</span>
			</div>
			<div class="price">$${item.price},00</div>
			<div class="quantity">
				<ion-icon class="descrease" 
				name="arrow-dropleft-circle"></ion-icon> 
			 	<span>${item.incart}</span>
			 	<ion-icon class="increase" 
				name="arrow-dropright-circle"></ion-icon> 
			</div>
			<div class="total">
			$${item.incart * item.price},00
			</div>
			`;
		 });

		productContainer.innerHTML+=`
			<div class="basketTotalContainer">
				<h4 class="basketTotalTitle">
					Basket  Total
				</h4>
				<h4 class="basketTotal">
					$${cartCost},00
				</h4>
			</div>
		`

	}
}
 onLoadcartNumbers();
 displaycart();






































