# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
------------
## I did the following steps in order to complete this Project
### project is downloaded
while reading the instructions ,I found a GitHub link which gives a brief idea about the project which is provide by **udacity**.
I opened the link in chrome and downloaded the ZIP file and extract that file.
After extracting the zip file I get the following files. They are:
1. `css/app.css`
2. `img/geometry2.png`
3.  `js/app.js`
4. `index.html`(strating file)
5. `readme.md`files
## Steps followed by me in order to finish the project
I observed the code given by udacity in all the files .Finally I observe that mode of the modifications will be occur in app.js file .
+ In that file udacity provided **shuffle** function from stack overflow in order to shuffle the cards provided in the memory game.
+ all the shuffled cards are stored in the array called `changedCards`.After the cards are shuffled I just want to create a timer in order to display the timer in the game.
+ I had taken required variables in order to display the timer like **sec,min,hrs** and by using **innerHTML** for variable time I display the timer.
+ After that I added addEventListeners to all the shuffled cards. I started timer whenever the the user clicks on a card'
+ I declared two classes called **unmatched** and **disable** .unmatched is the class use when we click the cards which are not matched the operations present in it is executed.
+ After clicking on the each card the diable function makes it not to click again.
+ I used some logic in order to match the cards .After performing all these operations I used `starRate` function in order to give the star rating to it . Star are disappeared  when the moves are increased according to my code and I used starCount variable too.
+ I used **Restart** function to reload the game. when ever the user clicks on reload link provided on the top of the game .The game will be restarted.
+ After matching all the cards one pop menu is displayed .I displayed this pop by using **sweetalert** which contains the information like time , starRating and starCount .
