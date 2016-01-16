var self = require("sdk/self");
var tabs = require("sdk/tabs");
var cm = require("sdk/context-menu");
var selection = require("sdk/selection");


var menuItem = cm.Item({
    label: "Translate",
    context: cm.SelectionContext(),
    contentScriptFile : self.data.url("script.js"),
    onMessage: function () {
        handleClick();
    }
});


function handleClick() {
    var text = selection.text;
    tabs.open('https://translate.google.com/#auto/fa/' + text);
}