# React_FlashCards

Hello world!! This project, is a _flashcard app_,it is powered by React.js and the data is fetched from the [opentriviaDB](https://opentdb.com/api.php/) API. everytime the data is fetched, this includes a question, an answer, and 1 or 3 other wrong answers. So, how you can guess by now, this flashcards include on the front side the question and possible options to answer that question. And on the back side, the only right answer.

The _Styling_ was developed with plain **CSS**, included the flash card animation, that turn 180 degrees, without the use of any external package or library. The focus of the project was the functionality of the components (Card and Button), without leaving aside the importance of the stetics.

Asynchronous `fetch(`) function was used to make calls to the API, along `useEffect()` and `useState()` to manage the functionality.

## Current Functionality

- View of one flashcard, displayed on the front side with a question and 2-4 possible answer.
- `hover` and mantain "clicked" or `active` over the flashcard to fire the animation and turn 180 degrees the flashcard over its X axis. As long as the user keep "clicked" over the card, its backside will be displayed.
- Press the `button`with the name of _New Card_, to refresh the interface and that way, make a new API call and get a new question, options and right answer.

## Future Functionality to Implement

- Generate the option to change the difficultiy or level of the questions, and that way create a level set for the user. The API gives that chance.
- Display not just one, but several (users choice) flashcards, filtered by level and subject.

## Usage

- clone` the repository.
- install the dependencies:
  `npm install`
- run the app:
  `npm start`
- you are good to go.
