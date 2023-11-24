Instructions
---
## To run Exercise 2, open your preferred terminal in the current project folder, then type
```sh
cd exercise-2
```
### Firstly, we need to install the depedencies
```sh
npm install
```

### Finally, to run the App
```sh
npm start
```

### Compile the App in Production Build
```sh
npm run build
```



Exercise 1
---
* Used Bootstrap 5 for styling and AOS for animations


Exercise 2
---
* Used ReactJS as JS framework. 
* Used React Bootstrap for styling and for the extra reusable components
* Used Framer Motion for animations
* Used React Router DOM for functional routing


###### Bonus points
* Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`.
* Because ++'a' will result into 'NaN'. First of all , 'a' is a String. '++' denotes an increment, which will then result into a 'NaN' error if used with a String. The result without the toLowerCase() method is 'baNaNa' 

