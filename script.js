//create an object class for the product to store the properties for id name
//and price of the product
 //note to create a javascript class we have class then clasname afterwards the constructor

 class Product1{
    constructor(firstId,firstName, price){
        this.firstId =firstId;
        this.firstName = firstName;
        this.price = price;
    } 
    aboutProduct(){
        console.log(`firstId:${firstId},firstName:${firstName},price:${price}`);
    }
 }
 const result= new Product1(127,"basket",46.99)
 //to the proceeding object class add the method to calculate the total price of them
 class firstTotal{
 constructor(product,quantity){
this.product = product;
this.quantity = quantity;
 }
 totalPrice(){
    console.log(this.product*this.quantity);
 }
 }
 //create another object for the shoppingCart which contains an array of shoppingCart item instances
 class shopCart{
    constructor(){
        this.firstItems["baskets","socks","bag"];
    }
 }
 //to the shoppingCart add methods to get the total inside the cart
  function alltotalPrice(){
     return this.firstItems.reduce((total,item)=>total +item.alltotalPrice());
 }
 //to remove items
  function removeOne(firstName){
this.firstItem = this.firstItem.filter(firstItem=>firstItem.firstName);
 }
 //to display cart items
  function displayOne(){
 const firstCart=document.getElementsByClassName('card-body')
    Cart.firstItem.array.forEach(firstItem => {
        const innerCart =<h3>${item.FirstName}</h3>
    });
    firstCart.innerhtml+=innerCart;
 }
    

 6//create products  
 const productOne = new product(215,"car","24.66$")
 const productTwo = new product(225,"house","246.96$")
 const productThree = new product(112,"bag","24.00$")

 // create a shoppingCart
 const ourshopCart = new shopCart();

 //add items to the cart
 ourshopCart.addItem(productTwo,4);
 ourshopCart.addItem(productThree,"car")

 //displayCart
 ourshopCart.secondDisplay()

 //removeitem
 ourshopCart.remove(productOne);