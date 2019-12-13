//Fetching and array organizer

function productList() {
    for (let i = 0; i < groceriesList.length; i += 3) {
        loop++
        products.push(groceriesList[i].trim());
        
    }
}

function pricesList() {
    for (let i = 1; i < groceriesList.length; i += 3) {
        prices.push(groceriesList[i].trim());
        
    }
}

function countryList() {
    for (let i = 2; i < groceriesList.length; i += 3) {
        country.push(groceriesList[i].trim());
        
    }
}