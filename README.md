# Question & Answer Message Board

#### Ember JS Independent Project for Epicodus, 08/19/2016

#### By Shradha Pulla

## Description

This program is a question and answer message board. It will allows users to create a new question, and add answers to that specific question. The program will allow for other basic functionalities such as - editing an existing question or answer, and deleting a question or answer.

## Setup/Installation Requirements

This program can only be accessed on a computer with Git and Atom software, and Node.js, npm, bower, Ember CLI, PhantomJS, and gulp globally installed.

* Clone this repository
* To set up package managers, type the following into the command line:
  * $ npm install
  * $ bower install
* To view the webpage, type the following:
  * $ ember server
  * Open Chrome and type in the following address: localhost:4200

## Known Bugs

No known bugs.

## Specifications

The program should... | Example Input | Example Output
----- | ----- | -----
Add new question on index page | Questions: 0; New Question: "Do caterpillars know they turn into butterflies?", Jordan Patel, 8/30/2016, "It would be so scary if they didn't you know?"   | Questions: 1, "Do caterpillars know they turn into butterflies?"
View all questions on index | Questions: 2 | "Do caterpillars know they turn into butterflies?", Jordan Patel; "How do you center a button using Bootstrap?", Caty Kobayashi
View one question by clicking on it | Questions: 2, clicked on "Do caterpillars know they turn into butterflies?" | "Do caterpillars know they turn into butterflies?": posted by Jordan Patel on 8/30/2016, "It would be so scary if they didn't you know?"
Edit question details on specific question page | "Do caterpillars know they turn into butterflies?": "It would be so scary if they didn't you know?" | "It would be so scary if they didn't you know? Edit: Some of you don't think it would be scary and that's even scarier..."
Add new answer on a question page | "Do caterpillars know they turn into butterflies?"; Answers: 0; New Answer: Layla Jones, 8/31/2016, "No they don't, but they're caterpillars so who cares?" | "Do caterpillars know they turn into butterflies?"; Answers: 1
View all answers for a question | Answers: 2 | "No they don't, but they're caterpillars so who cares?", Layla Jones, 8/31/2016; "Am I a caterpillar?", Jacob Turner, 9/15/2016
Edit answer details | "No they don't, but they're caterpillars so who cares?" | "No they don't, but they're caterpillars so who cares? Edit: I got a caterpillar and am currently building an inter-species communication device. We'll ask them directly B)"

## Future Features

HTML | CSS | Ember JS
----- | ----- | -----
--- | Make the answers smaller than the questions | Reset the Add New Question & Add New Answer forms after every use

## Support and Contact Details

Contact Epicodus for support in running this program.

## Technologies Used

* HTML
* CSS
* Bootstrap
* Ember JS

## Further Reading and Useful Links

* Make use of the many generators for code, try `ember help generate` for more details
* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions:
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Links

Git Hub Repository: https://github.com/pullashradha/QAMessageBoard

## License

*This software is licensed under the GPL license.*

Copyright (c) 2016 Shradha Pulla
