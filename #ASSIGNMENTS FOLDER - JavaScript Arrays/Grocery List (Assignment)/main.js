// DS ASGN STARTER TEMPLATE

// DOM Elements
let outputEl = document.getElementById('output');

//Global Variables
let groceriesList = []
let products = []
let prices = []
let country = []
let loop = 0


fetch("grocery-data.txt").then((rawData) => rawData.text()).then((data) => groceriesList = data.split(";"))



// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    //Prevents outputEl from repeating 
    if (loop < 1) {
        pricesList();
        productList();
        countryList();
    }
    outputEl.innerHTML = "";

    //Display All Products
    if (selection == 'Display All') {

        //Display number of Products present
        outputEl.innerHTML = "There is a total of " + products.length + " products present." + "<br>"

        //Display all products name and prices
        for (let i = 0; i < products.length; i++) {

            outputEl.innerHTML += "<br>" + products[i] + " " + "$" + prices[i] + " " + country[i] + "<br>"
        }

        //Display Price Range
    } else if (selection == 'Display Price Range') {

        //Prompting Min and Max Prices
        let minimumPrice = prompt('Insert the minimum price of item.')
        let maximumPrice = prompt('Insert the maximum price of Item.')

        //Display Number of Products Present
        let totalProducts = 0
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] >= Number(minimumPrice) && prices[i] <= Number(maximumPrice)) {
                totalProducts++
                outputEl.innerHTML = "There is a total of " + totalProducts + " product/products present." + "<br>"
            }
        }


        //Displaying range of price and products
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] >= Number(minimumPrice) && prices[i] <= Number(maximumPrice)) {

                //Displaying Products + its country in the price range
                outputEl.innerHTML += "<br>" + products[i] + " " + "$" + prices[i] + " " + country[i] + "<br>"
            }

        }

        //Display Country of Origin
    } else if (selection == 'Display Country of Origin') {

        //Prompting Country Names
        let countryName = prompt('Insert the name of the country').toLowerCase()


        //Display Number of Products Present
        let totalProducts = 0
        for (let i = 0; i < country.length; i++) {
            if (countryName == country[i].toLowerCase()) {
                totalProducts++
                outputEl.innerHTML = "There is a total of " + totalProducts + " product/products present." + "<br>"
            }
        }

        //Display Product name + countryOrigin + price
        for (let i = 0; i < country.length; i++) {
            if (countryName == country[i].toLowerCase()) {
                outputEl.innerHTML += "<br>" + products[i] + " " + "$" + prices[i] + " " + country[i] + "<br>"
            }
        }
    }

    //Display Random
    else if (selection == 'Display Random') {
        let randomProduct = Math.floor(Math.random() * country.length)
        console.log(randomProduct)

        //Display Number of Products Present
        let totalProducts = 1
        for (let i = 0; i < products.length; i++) {
            if (products[i] == products[randomProduct]) {
                outputEl.innerHTML = "There is a total of " + totalProducts + " product present." + "<br>"
            }
        }

        //Display a random Product
        for (let i = 0; i < products.length; i++) {
            if (products[i] == products[randomProduct]) {
                outputEl.innerHTML += "<br>" + products[i] + " " + "$" + prices[i] + " " + country[i] + "<br>"
            }
        }

    }

    //Inflation
    else if (selection == 'Inflation') {
        outputEl.innerHTML = "<h3> Oh no, it's the inflation! The prices of Everything has increased by 7%! </h3>" + "<br>"

        //Display all products but prices all increased by 7%
        for (let i = 0; i < prices.length; i++) {
            prices[i] = Math.round(prices[i] * 1.07 * 100) / 100
            outputEl.innerHTML += "<br>" + products[i] + " " + "$" + prices[i] + " " + country[i] + "<br>"
        }
    }
    //Price Stats
    else if (selection == 'Price Stats') {

        //Finding the lowest and highest price
        let lowestProduct = 0
        let highestProduct = 0
        let lowestPrice = Math.min(...prices)
        let highestPrice = Math.max(...prices)



        //Calculate total of all prices combined
        let totalPrices = 0
        for (let i = 0; i < prices.length; i++) {
            totalPrices += Math.round(prices[i] * 100) / 100
        }

        //Calculate the average price
        let averagePrice = totalPrices / prices.length
        averagePrice = Math.round(averagePrice * 100) / 100

        //Finding the index of the product with the minimum price and maximum price

        for (let i = 0; i < prices.length; i++) {

            if (lowestPrice == prices[i]) {
                lowestProduct = i
            }
            if (highestPrice == prices[i]) {
                highestProduct = i
            }
        }

        outputEl.innerHTML =
            "The product with lowest price is the " + products[lowestProduct] + " costing $" + lowestPrice + " from " + country[lowestProduct] + ".<br>" + "<br>" +
            "The product with highest price is the " + products[highestProduct] + " costing $" + highestPrice + " from " + country[highestProduct] + ".<br>" + "<br>" +
            "The average price of the products is $" + averagePrice
    }
    //Add Product
    else if (selection == 'Add Product') {

        //Add product name, price and country origin
        let addProduct = prompt("Insert the name of product you would like to add.").toLowerCase()

        let addPrice = prompt("Insert the price for the product you would like to add.")

        let addCountry = prompt("Insert the name of the country your product is from.").toLowerCase()


        //Make the first letter of the country Capital
        addProduct.split(" ")

        //Only add products with proper price number
        addPrice = Math.round(addPrice * 100) / 100;
        let notANum = isNaN(addPrice)

        if (notANum == true) {
            outputEl.innerHTML = "No Product has been added"

        }
        else if (addPrice == 0) {
            outputEl.innerHTML = "No Product has been added"

        }
        else {
            //Add the product to the grocery list
            products.push(addProduct);
            prices.push(addPrice);
            country.push(addCountry);

            outputEl.innerHTML = "You have added a product! <br>" + addProduct + " $" + addPrice + " " + addCountry;
        }
    }
    //Remove Products less than $15
    else if (selection == 'Remove Products less than $15') {
        let itemremoverCount = 0
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < 15) {
                prices.splice(i, 1);
                products.splice(i, 1);
                country.splice(i, 1);
                i--;
                itemremoverCount++
            }
        }
        outputEl.innerHTML = "You have removed a total of " + itemremoverCount
    }

    //Remove Specific Products
    else if (selection == "Remove Specific Product") {

        let removeProduct = prompt("Name the Product you would like to remove.")

        for (let i = 0; i < products.length; i++) {
            console.log(products[i])
            console.log(removeProduct)
            if (products[i].toLowerCase() == removeProduct.toLowerCase()) {
                products.splice(i, 1);
                prices.splice(i, 1);
                country.splice(i, 1);
                outputEl.innerHTML = "Your Product has been removed."
                return;
            }

        }
        outputEl.innerHTML = "Product not found."


    }
}

