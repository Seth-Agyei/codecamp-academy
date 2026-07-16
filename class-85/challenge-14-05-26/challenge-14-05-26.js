// Author : seth    <GithubName : Seth-Agyei
// Smart Restaurant Ordering System


class meal{
    constructor(mealName, Price, Category){
        this.mealName = mealName
        this.Price = Price
        this.Category = Category
    }
    showInformation(){
      return{
         Meal : this.mealName,
         Price : this.Price,
         Category : this.Category
        }
       
    }
    
    prepareMeal(){
      return "Preparing meal........."
    }

}

class Burger extends meal{
    constructor(mealName, Price, Category, hasCheese){
       super(mealName, Price, Category)
        this.hasCheese = hasCheese
    }

    showInformation(){
      return{
         Meal : this.mealName,
         Price : this.Price,
         Category : this.Category,
         hasCheese : this.hasCheese
        }
    }

    prepareMeal(){
        return "Grilling the burger and preparing ingredients."
    }
}


class Pizza extends meal{
    constructor(mealName, Price, Category, size){
       super(mealName, Price, Category)
        this.size = size
    }

    showInformation(){
      return{
         Meal : this.mealName,
         Price : this.Price,
         Category : this.Category,
         size : this.size
        }
    }

    prepareMeal(){
        return "Baking the pizza in the oven."
    }
}


class Salad extends meal{
    constructor(mealName, Price, Category, dressing){
       super(mealName, Price, Category)
        this.dressing = dressing
    }

    showInformation(){
      return{
         Meal : this.mealName,
         Price : this.Price,
         Category : this.Category,
         dressing : this.dressing
        }
    }

    prepareMeal(){
        return "Preparing fresh vegetables and adding dressing."
    }
}

// Creating objects of meals

const burger = new Burger( 
        "BurgerKing",
         30,
         "Burger Section",
         "true"
)

const pizza = new Pizza ( 
         "PizzaKing",
         50,
         "pizza Section",
         ["small", "medium", "large", "jumbo"]
)

const salad = new Salad ( 
         "SaladKing",
         20,
         "Salad Section",
         "Yes"
)

//Storing in an array

const menu = [burger, pizza, salad]


//Applying polymorphism to loop
console.log('||||||||||||||')
//for (let i = 0; i < menu.length; i++) {
//    console.log(menu[i]);
//    
//   
//}
for (const foodMenu of menu) {
    console.log("++++++++++++++++++++++++++++++");
    console.log(foodMenu.showInformation());
    console.log(foodMenu.prepareMeal());
    
    console.log("++++++++++++++++++++++++++++++");

     
    
}


class Desert extends meal {
    constructor(mealName, Price, Category, preparationTime){
       super(mealName, Price, Category)
        this.preparationTime = preparationTime 
    }

    showInformation(){
      return{
         Meal : this.mealName,
         Price : this.Price,
         Category : this.Category,
         preparationTime : this.preparationTime
        }
    }

    calculateDiscount(Discount){
      Discount : this.Discount 
      let discount = (this.Discount/100) * this.Price
      return discount;
    }
}


/*
const pizza1 = new Pizza()
console.log(pizza1.prepareMeal());
*/

/*// Creating objects of meals

const burger = { 
        mealName : "BurgerKing",
        Price : 30,
        Category : "Burger Section",
        hasCheese : "true"
}

const pizza = { 
        mealName : "PizzaKing",
        Price : 50,
        Category : "pizza Section",
        size : ["small", "medium", "large", "jumbo"]
}

const salad = { 
        mealName : "SaladKing",
        Price : 20,
        Category : "Salad Section",
        dressing : "Yes"
}
 */