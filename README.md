# TuiCss
Text-based user interface CSS framework

<img src="https://image.ibb.co/gdAYN9/tuiCSS.png"/>

TuiCss is a framework to create web applications using a interface based in ASCII text like MS-DOS applications. This kind of interface is very eligible because the ultra-contrast colors used. This framework was created following the <a href="https://en.wikipedia.org/wiki/Turbo_Vision">Turbo Vision UI Framework</a> and other applications based on TUI. 

## Components

This is a simple doc for the avaiable components in the framework. For more details, download the repository and run example.html to check the full code.

### Navbar
<img src="https://image.ibb.co/fACzUp/tui_nav.png"/>

```html
<nav class="tui-nav tui-nav-fixed">
    <span class="tui-clock" id="clock"></span>
    <ul>
        <li>
            ...
        </li>
    </ul>
</nav>
```

### Navbar Menu
<img src="https://image.ibb.co/kv0Tpp/tui_menu.png"/>

```html
<li class="tui-dropdown">
    <span class="red-168-text">F</span>ile
    <div class="tui-dropdown-content">
        <ul>
            <li>
                <a href="#!">
                    <span class="red-168-text">O</span>pen
                    <span class="tui-shortcut">ctrl+o</span>
                </a>
            </li>
            <div class="tui-black-divider"></div>
            <li>
                <a href="#!">
                    <span class="red-168-text">Q</span>uit
                    <span class="tui-shortcut">F4</span>
                </a>
            </li>
        </ul>
    </div>
</li>
```

### Sidenav
<img src="https://image.ibb.co/ci06aU/tui_sidenav.png"/>

```html
<nav class="tui-sidenav">
    <ul>
        <li>
            ...
        </li>
    </ul>
</nav>
```

### Window
<img src="https://image.ibb.co/jcRMs9/tui_window.png"/>

```html
<div class="tui-window">
    <fieldset class="tui-window-fieldset">
        <legend>Window</legend>
        <button class="tui-fieldset-button"><span class="green-255-text">■</span></button>
        ...
    </fieldset>
</div>
```

## CSS Classes

## Credit
TuiCss Framework (c) Copyright 2018
by Vinícius Reif Biavatti
VBFoundation
