# richiewirz.github.io
Music website for Richie Wirz

# How to use
## Structure Overview
### HTML
One main html file, index.html, where visitors are directed. Set up such that each "page" - Home, Music, Info, and Contact - are sections of index.html.

### CSS
Developed using SASS, an abstraction on CSS, which allows for the use of variables and nesting. However, this requires using a compiler. The SASS has been compiled into CSS, which can be edited as usual, without a compiler.

### JavaScript
There are two javascript files, one to handle page mechanics, and one for the music player, found in main.js and player.js respectively.

## Making Changes
My first recommendation is to download and install Atom from https://atom.io/. This program is a text editor with additional functionality provided by packages.

### Styles
If you would like to use SASS for styling, install the SASS autocompiler package.
* When you open Atom, you should be prompted with the Welcome Guide. If this doesn't appear, it can be opened from the menu bar under "Help" > "Welcome Guide".
* Select "Install a Package" > "Open Installer"
* Search for "sass-autocompile" and install
  * You may have to also install "language-sass" if it is not installed by default
* You can leave the default settings

Now Looking at the "style.scss" file, you will be able to make changes and have them reflected in your page's style (via "style.min.css")
* General CSS applies styles to HTML elements through selectors, either ids (prefixed with "#") or class (prefixed with ".").
  * SASS has the added functionality of nesting, meaning you can place selectors within parent selectors in order to specify where styles get applied. In this way you can style a title element (h1, h2, h3) differently based on what its parent element is.
* SASS also uses variables, prefixed by "$", which allow you to specify a value in one line and have it carried throughout the stylesheet. In order to change a color, you just change the variable value, or change which variable the element's style refers to.

### Adding Songs
The javascript automatically populates the song list based on the "songs" dictionary at the top of player.js. To add another song to the list, add another sequential index, followed by a colon, then in brackets define the song's title, the artist name you want displayed on the song player, an extended list of collaborators that will be displayed in the list of songs, and links to the audio file and the corresponding album cover. Just follow the syntax of previous entries and you should be fine. Don't forget a comma to separate entries.

MP3 files can just be copied into the "audio" folder.
