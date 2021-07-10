class theme
{
    constructor(back, object, highlight, text, win, loose, pre)
    {
        this.back = back; // background
        this.object = object; // button color
        this.highlight = highlight; // when button is hovered
        this.text = text; // text
		this.win = win; // win background
		this.loose = loose; // loose background
		this.predict = pre; // prediction outline
    }
}

// theme definitions

const themes = 
{
    'orange': new theme('#231F20', '#ec5020', '#fa6d42', '#ffffff', '#9DB17C', '#b86868', '#9DB17C'), // main theme
	'greyscale': new theme('#000000', '#555555', '#AAAAAA', '#FFFFFF', '#CCCCCC', '#333333', '#CCCCCC') // test theme, but not too bad lol
}

// once theme has been added to themes, add it here so it is added to the onscreen picker

const themenames =
[
    'orange',
    'greyscale'
]

// setup the onscreen theme selector

function setupTheme()
{
    themenames.forEach(function(val)
    {
        var option = document.createElement("option");
        option.text = val;

        themesel.add(option);
    });
}

// update scene from onscreen scene selector

function updateTheme()
{
    setTheme(themesel.options[themesel.selectedIndex].value);
}

// set scene data in CSS

function setTheme(name)
{
    root.style.setProperty('--theme-back', themes[name].back);
    root.style.setProperty('--theme-object', themes[name].object);
    root.style.setProperty('--theme-highlight', themes[name].highlight);
    root.style.setProperty('--theme-text', themes[name].text);
	root.style.setProperty('--theme-out-win', themes[name].win);
	root.style.setProperty('--theme-out-loose', themes[name].loose);
	root.style.setProperty('--theme-out-predict', themes[name].predict);
}