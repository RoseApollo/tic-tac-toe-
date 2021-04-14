class theme
{
    constructor(back, object, highlight, text)
    {
        this.back = back;
        this.object = object;
        this.highlight = highlight;
        this.text = text;
    }
}

const themes = 
{
    'orange': new theme('#231F20', '#ec5020', '#fa6d42', '#ffffff')
}

function setTheme(name)
{
    root.style.setProperty('--theme-back', themes[name].back);
    root.style.setProperty('--theme-object', themes[name].object);
    root.style.setProperty('--theme-highlight', themes[name].highlight);
    root.style.setProperty('--theme-text', themes[name].text);
}