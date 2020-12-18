Stacked Deck

A third-party deck randomizer for Riot Games' Legends of Runeterra!

REQUIREMENTS:
To run the software, download and extract the files. Navigate the root directory 'stacked-deck' and
use the command 'npm install' to install required packages.

Once the packages are installed, navigate to the root directory 'stacked-deck' and use command 'ng serve --open' to locally host the project. The project will open on localhost:4200.

USAGE:
To use Stacked Deck, simply press the "Randomize Deck" button.
When pressed, the page will update with the one/two regions your deck contains, the deck code (available to copy to clipboard), and an array of the cards found in your deck!

The provided deck code can be imported directly into Legends of Runeterra itself. If you would like to check the vailidity of the codes provided, the code can be cross-referenced to deck building sites such as https://lor.mobalytics.gg

RESOURCES USED:
https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
https://stackoverflow.com/questions/49911541/errorproperty-select-does-not-exist-on-type-htmlelement
https://github.com/angular/angular-cli/issues/2221
https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/

The deck code generator is pulled from Riot Games public repository. The TypeScript implementation of this encoder is provided by maintainer icepeng https://github.com/RiotGames/LoRDeckCodes https://github.com/icepeng/lor-deckcode

CHANGES:
Replacing jQuery and Vega Lite is the use of Angular components. jQuery was omitted as the npm libraries for it conflicted with the TypeScript implementation of the various Angular components. Vega Lite was foregone as other third-party deck building tools have such features; it also goes against the Stacked Deck's design philosophy of randomness and luck to include such breakdowns.


Stacked Deck isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Legends of Runeterra. Legends of Runeterra and Riot Games are trademarks or registered trademarks of Riot Games, Inc. Legends of Runeterra © Riot Games, Inc.