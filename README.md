## DESCRIPTION ##
Cocktail-o-Maker is an interactive website where users can search for cocktail recipes.
The users can create an account, verify their age according to the drinking laws 
(filtered page with mocktails if user is underage)
and are then able to add drinks to favorites and rate drinks/write reviews. 

It is also a space for the ones who want to make the most of what they have, since users will be able to list their 
ingredients that they have at home and find cocktails accordingly.


## What you have done ##
We have used the API "thecocktaildb" , which provides data of the cocktails such as the ingredients, measures, a picture etc. and 
based the website around this data.

Currently, we do not have users implemented but instead made a mockup to verify their age. 
A simple search function is implemented. When clicking on a drink, you get some information. 
You are also able to add drinks to the mockup-users favorites. 

## What you still plan to do ##
We still have to implement the user, filter the page if user is underage, filtered search, multi-ingredient search and the ranking/review system.
We also have to work on structuring the code and keeping presenters/views separate. 

## PROJECT FILE STRUCTURE ##
We use a router for navigation between pages. We use presenters and views.
```bash
TopBar.vue (Shows the topbar with logout button)
├── presenters
│   ├── HomePagePresenter.vue (Shows the start page with a mock login/under 20 selector)
│   ├── detailsAPIPresenter.vue (Api call for the drinkdetails + addfavourite callback => detailsView.vue)
│   ├── searchPresenter.vue (Call API for search + display, send and get informations from the different search views)
│   └── userPresenter.vue (Showing username through userView.vue + Api call for the favourites => drinkThumb.vue)
└── views
    ├── detailsView.js  (redundant file..)
    ├── detailsView.vue (Displays the recipe for a drink)
    ├── drinkThumb.vue (Displays a single drink name and thumbnail)
    ├── ingredientThumb.vue (Displays a single ingredients name)
    ├── searchFormView.vue (Display an input box and search boutton, emit click and input event listeners)
    ├── searchResultView.vue (Display the data of the PromiseStateSearch saved in the component state of searchPresenter)
    ├── searchSidebarView.vue (Display the different filters available and emit an event listener when you update filters selected)
    └── userView.vue (Displays the username recieved from the presenter)
```
### searchPresenter workflow

![alt text](./searchPresenter.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
