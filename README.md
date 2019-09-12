# TuiCss
### Text-based user interface CSS framework

TuiCss is a framework focused to create web applications using an interface based in ASCII table, like MS-DOS applications. This kind of interface is very eligible because the ultra-contrast colors used and the less effects of the elements. The main framework thats is following to develop TuiCss is <a href="https://en.wikipedia.org/wiki/Turbo_Vision">Turbo Vision Framework</a> with some techniques with [box-drawing characters](https://en.wikipedia.org/wiki/Box-drawing_character), but some others frameworks were checked too, like [curses](https://en.wikipedia.org/wiki/Curses_(programming_library)), [ncurses](https://en.wikipedia.org/wiki/Ncurses), [Newt](https://en.wikipedia.org/wiki/Newt_(programming_library)), etc. Check the [[Examples]] page to see some creations!

<img src="https://i.ibb.co/zhJMy1h/Tui-Css-home.png" width="600">

### Wiki
Check the [repository wiki](https://github.com/vinibiavatti1/TuiCss/wiki) to access the components index, examples, styles, or to know how to contribute for this project.

### Getting Started
TuiCss needs the JQuery to works with the script. To import JQuery, you can download or get this from CDN. This is the import code using Jquery from CDN:

```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
```

To use TuiCss framework in your web application, you need just to import the files in your html pages. The files are in dist folder. The folder has this structure:

```
dist  
  \- fonts
  \- images
  \- tuicss.css  
  \- tuicss.js  
  \- tuicss.min.css  
  \- tuicss.min.js  
```

Get this folder and put in you application structure. After this, choose the file to import (source or minified). This is an example of import code:

```html
<link rel="stylesheet" href="dist/tuicss.min.css"/>
<script src="dist/tuicss.min.js"></script>
```

> The fonts folder needs to be in the same directory of imported css file. It is necessary if the main font was changed to "DOS" font in the variables.scss file. Check [[Custom Theme]] page for more details.

> The images folder needs to be in the same directory of imported css file too, because some classes are targeting the images of this folder. If this folder was not in the correct place, this classes will be crashed and not works fine. 
