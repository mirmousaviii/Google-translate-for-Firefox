var self = require("sdk/self");
var cm = require("sdk/context-menu");


cm.Item({
    label: "Translate",
    context: cm.SelectionContext(),
    contentScriptFile : self.data.url("script.js")

});

