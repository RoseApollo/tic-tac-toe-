class theme
{
    constructor(back, object, highlight, text, win, loose, pre)
    {
        this.back = back;
        this.object = object;
        this.highlight = highlight;
        this.text = text;
		this.win = win;
		this.loose = loose;
		this.predict = pre;
    }
}

const themes = 
{
    'orange': new theme('#231F20', '#ec5020', '#fa6d42', '#ffffff', '#9DB17C', '#b86868', '#9DB17C'),
	'greyscale': new theme('#000000', '#555555', '#AAAAAA', '#FFFFFF', '#CCCCCC', '#333333', '#CCCCCC')
}

const themenames =
[
    'orange',
    'greyscale'
]

function setupTheme()
{
    themenames.forEach(function(val)
    {
        var option = document.createElement("option");
        option.text = val;

        themesel.add(option);
    });
}

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