# Memory Game

This memory game is a simple game to help train short-term memory. It consists of a grid with blank coloured boxes. The number of the box is shown when the player selects the box. The number remains shown until the player selects the next box. If the numbers are a match they remain shown. However if the numbers are not a match they are hidden again.

![Responsive Mockup](assets/images/amiresponsive.jpeg)

## Features

### Description

The description says what type of game it is and how to play it.

![Description](assets/images/description.jpeg)

### Game grid

The game grid contains the boxes that the player selects.

![Game grid](assets/images/game_grid.jpeg)

### Message sent when game is won

![Message](assets/images/message.png)

### New game button

The new game button starts the game again from the beginning.

![New game button](assets/images/button.jpeg)

## Testing

The game was tested with the following tools:

- various browsers: Google Chrome, Microsoft Edge, Safari and Firefox

- [HTML Test](https://validator.w3.org/)

I tried to remove the forward slashes from the elements with no closing tag but they were automatically added back. Here is the result of the HTML test:

![HTML test result](assets/images/html_test.jpeg)

- [CSS Test](https://jigsaw.w3.org/css-validator/validator)

Here is the result of the CSS test:

![CSS test result](assets/images/css_test.jpeg)

- [Javascript test](https://jshint.com/)

Here is the result of the JavaScript test:

![Javascript test result](assets/images/javascript_test.jpeg)

- Lighthouse in Google devtools

![Lighthouse test result](assets/images/lighthouse_test.png)

## Bugs

This project had many bugs throughout its development. It took a long time and lots of trial and error to get the game working properly. Here are examples of the bugs:

- The boxes couldn't be clicked but that problem was solved

- After the first box was clicked the second box couldn't be immediately clicked. This issue was solved by changing the code.
  
There are no current bugs in the code.

## Deployment

To deploy the site, I went to the settings tab of my GitHub repo and selected pages.

I made sure that the source was set to 'Deploy from Branch', the main branch was selected and the folder was set to / (root). Then I clicked save and waited for
the build to finish. Finally I clicked on 'github-pages'.

Here is the deployed site:

[Deployed Site](https://catherinep37.github.io/Project_2/)

## Credits

I took some inspiration from the following projects:

[Marina Ferreira's memory game](https://marina-ferreira.github.io/tutorials/js/memory-game/)

[Aldo Hadinata's memory game](https://github.com/4ldoHadinata/memory-game-js)
