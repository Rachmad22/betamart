# Betamart

Betamart is a super good aplication for people who has a store. this apk will manage all of your items, you can find the stock, price, quantities, and location of products.

## How i solved this
According to the rules, it is not allowed to store data in an external database, so I created a JSON data directly in the 'db' folder

- user add product

First, I need to store the existing data in a variable, then search based on the category group and check if the rack in that category is still sufficient. If it is sufficient, then the addition of the product can be done to the data that has been stored in the initial variable.

- user add rack with capacity

I have to store the existing data in one variable. In this table, it can contain anything, so I fill in the ID, name, and maxLoad. Then, adding data can be done directly by rewriting the variable data.

- Customer can purchased product and decrease quantity of product

First, store the product data in a variable, search for the product to be added, and check if the product stock is still available or not. If it is still available, then updating the stock data can be done by changing the stock value only.

- Search List of Products with quantities lower than the parameter specified by user/Budi



- Search List of Products by location

Store all product data in one variable, search based on the rack where the product is located, and display the requested data according to the rack location.

- Search List Products within a specified price range

Store all product data in one variable, create a variable with a specific price range as a parameter, and apply filters within each specified range.



## How to run this code

- clone this repository
```
git clone https://github.com/Rachmad22/betamart.git
```
- npm install
```
npm install
```
- Type ` npm start` To Start


## Endpoint Documentation by Postman
```
https://www.postman.com/rachmadd/workspace/betamart/documentation/24691687-96d7f6e7-a95e-4487-b455-326d3b409222
```



