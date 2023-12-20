var Project = function(id, name, iconUrl, html, accentColor = "#000000", isHigh = false, isWide = false)
{
    this.id = id;
    this.name = name;
    this.htmlDescription = html;
    this.iconUrl = iconUrl;
    this.isHigh = isHigh;
    this.isWide = isWide;
    this.accentColor = accentColor;
}