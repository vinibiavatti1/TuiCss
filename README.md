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
            <a href="#!">Open</a>
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

### Fieldset Status Bar
<img src="https://image.ibb.co/grD4ep/tui_fieldset_statusbar.png"/>

```html
<div class="tui-window">
    <fieldset class="tui-window-fieldset">
        ...
        <div class="tui-fieldset-statusbar">Text format: UTF-8</div>
        ...
    </fieldset>
</div>
```

### Buttons
<img src="https://image.ibb.co/dqaLkU/tui_buttons.png" />

```html
<a href="#!" class="tui-button">button</a>
<button class="tui-button">button</button>
```

### Status Bar
<img src="https://image.ibb.co/egTHX9/tui_statusbar.png" />

```html
<div class="tui-statusbar">
    <ul>
        <li><a href="#!"><span class="red-168-text">F1</span> Help</a></li>
        <li><a href="#!"><span class="red-168-text">F2</span> Shell</a></li>
        <li><a href="#!"><span class="red-168-text">F3</span> Open</a></li>
        <span class="tui-statusbar-divider"></span>
        <li><a href="#!"><span class="red-168-text">F10</span> Exit</a></li>
    </ul>
</div>
```

### Menu List
<img src="https://image.ibb.co/ihphX9/tui_menu_list.png" />

```html
<div class="tui-window">
    <fieldset class="tui-window-fieldset tui-window-fieldset-no-legend tui-border-solid">
        <ul>
            <li class="cyan-255-hover black-255-text-hover">
                <span class="tui-shortcut">A</span>
                <span>Register Tables</span>
            </li>
            <li class="cyan-255-hover black-255-text-hover">
                <span class="tui-shortcut">B</span>
                <span>Quit</span>
            </li>
        </ul>
    </fieldset>
</div>
```

### Panel
<img src="https://image.ibb.co/dapGs9/tui_panel.png" />

```html
<div class="tui-panel">
    ...
</div>
```

### Inputs
<img src="https://image.ibb.co/fCRFKp/tui_inputs.png" />

```html
<!-- Input -->
<input class="tui-input" type="text" />
<input class="tui-input" type="number" />
<input class="tui-input" type="email" />
<input class="tui-input" type="password" />
<input class="tui-input" type="color" />
<input class="tui-input" type="date" />
<input class="tui-input" type="datetime-local" />

<!-- Select -->
<select class="tui-input">
    <option selected>-- SELECT --</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>
<select class="tui-input" multiple>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
</select>

<!-- Checkbox -->
<label class="tui-checkbox">
    Checkbox
    <input type="checkbox"/>
    <span></span>
</label>

<!-- Radio -->
<fieldset class="tui-input-fieldset">
    <legend>Radios</legend>
    <label class="tui-radio">
        Option 1
        <input type="radio" name="radio" checked />
        <span></span>
    </label>
    <label class="tui-radio">
        Option 2
        <input type="radio" name="radio" />
        <span></span>
    </label>
</fieldset>

<!-- Textarea -->
<textarea class="tui-input"></textarea>
```

### Window Textarea
<img src="https://image.ibb.co/gzkxX9/tui_win_textarea.png" />

```html
<div class="tui-window">
    <fieldset class="tui-window-fieldset">
        <legend align="center">FILE.C</legend>
        <button class="tui-fieldset-button"><span class="green-255-text">↑</span></button>
        <button class="tui-fieldset-button tui-fieldset-button-left"><span class="green-255-text">■</span></button>
        <textarea class="tui-textarea"></textarea>
    </fieldset>
</div>
```

### Table
<img src="https://image.ibb.co/cN8nzp/tui_table.png" />

```html
<table class="tui-table tui-table-hover">
    <thead>
        <tr>
            <td>Name</td>
            <td>Size</td>
            <td>MTime</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/.mc</td>
            <td>1024</td>
            <td>Apr 24 01:24</td>
        </tr>
    </tbody>
</table>
```

### Progress Bar
<img src="https://image.ibb.co/moYRs9/tui_progress.png" />

```html
<!-- Determinate -->
<div class="tui-progress">
    <span style="width: 25%"></span>
</div>

<!-- Indeterminate -->
<div class="tui-progress">
    <span class="tui-indeterminate"></span>
</div>
```

## CSS Classes
| Class | Description |
| --- | --- |
| `.tui-divider` | Create a white bottom divider |
| `.tui-black-divider` | Create a black bottom divider |
| `.tui-no-shadow` | Remove the shadow |
| `.tui-no-padding` | Remove padding |
| `.tui-shadow` | Create a shadow in the element |
| `.tui-white-bg` | Used in html tag to create a white 168 dot background |
| `.tui-blue-bg` | Used in html tag to create a blue 168 dot background |
| `.left` | Quick left float |
| `.right` | Quick right float |
| `.inline` | Quick inline display |
| `.block` | Quick block display |
| `.tui-shortcut` | Used in lists to put some text like shortcuts on the right side of the main text |
| `.tui-content` | Put a default padding in the container |
| `.tui-nav` | Create a navbar |
| `.tui-nav-fixed` | Change the navbar to a fixed position |
| `.tui-statusbar` | Create a Status Bar |
| `.tui-input` | Create a TUI theme input like inputs, selects, textareas... |
| `.tui-button` | Create a TUI button. It can be used to a, buttons, input[type="button"] |
| `.tui-panel` | Create a TUI panel |
| `.tui-window` | Create a TUI window |
| `.tui-window-fieldset` | Put the border for the TUI window |
| `.tui-input-fieldset` | Used to create a container for the inputs like checkboxes and radios |
| `.tui-border-solid` | Change the border like fieldset borders to a solid border |
| `.tui-fieldset-button` | Create a action button in the fieldset like buttons to close, minimize, maximize... |
| `.tui-fieldset-button-left` | Change the position of the fieldset button to the left side |
| `.tui-fieldset-statusbar` | Create a bottom status bar in the fieldset |
| `.tui-checkbox` | Create TUI checkbox |
| `.tui-radio` | Create TUI radio |
| `.tui-progress` | Create a TUI progress bar |
| `.tui-indeterminate` | Set the progress bar to indeterminate property |
| `.tui-dropdown` | Create a menu dropdown. It can be used to the navbar itens, buttons... |
| `.tui-dropdown-content` | The content that will be displayed for the dropdown |
| `.tui-sidenav` | Create a left sidenav. To active, just move the cursor for the left side of the screen |
| `.tui-table` | Create a table |
| `.tui-table-hover` | Add an hover effect for the table rows |
| `.tui-textarea` | Create a textarea without background |
| `.tui-clock` | Create a clock space in the navbar |

## Credit
TuiCss Framework (c) Copyright 2018<br>
by Vinícius Reif Biavatti<br>
VBFoundation
