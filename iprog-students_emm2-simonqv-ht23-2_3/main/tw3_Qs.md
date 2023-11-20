# Questions:
* We tried to place the "summary"-button so that it would always be in the corner, but in some cases, when the page was loading, the button moved to the left. This was is probably because the content box below shrinks, but we thought the flex would fill out the page. Why did it not work? 
* How can "model.ready" exists/work when it is only defined in the firebaseModel file, and not in the dinner model? 


# Questions and Answers:
* What is media query?
  * Media queries are used to style your page/application depending on device and specifications. Different envorionments results in different layouts.
* What's the point of using the css class styles when you can add the styles directly to the object (e.g. button)? 
  * To avoid code duplication and convoluted code. To make the page more coherent, same style everywhere. Easier to change stuff if needed. 
