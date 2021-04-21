# Alphabet Reflex Game

# LIVE DEMO: [reflex.veljkovicweb.dev](https://reflex.veljkovicweb.dev)

## Starting the project:

1. Clone the project: `git@github.com:veljkovicm/alphabet-reflex-game.git`
2. Install dependencies: `npm i`
3. Run the project: `npm start`

## Details

- Before starting user will have an option to switch between difficulties
- When user starts a game it should set off the counter that will randomly switch numbers
between 1-26
- Easy has timeout between switching 5000ms, medium 3500ms and hard 2000ms
- While the number is shown in the center, user needs to input the letter that is mapped to
the according number
- If inputted letter matches the number that its mapped to, letter will change color to green
- If inputted letter does not match or nothing is inputted, corresponding letter will turn red
- Goal of the game is to match all the letters with corresponding numbers
- No duplicated numbers in one gameplay
- Score in the top right corner should be updated automatically 
- While game is in progress, button that starts the game will change text to “stop” and can
stop and reset the game so user can restart it. Also, difficulty switch should be disabled
while in progress


![Reflex Game Screenshot](https://i.imgur.com/IHioG9b.png "Reflex Game Screenshot")
