self.on(
    'click',
    function (node, data) {
        var text = window.getSelection().toString();
        window.open('https://translate.google.com/#auto/fa/' + text);
    }
);

self.on(
    'context',
    function () {
        var text = window.getSelection().toString();
            if (text.length > 20) {
                text = text.substr(0, 20) + '...';
            }
        return 'Translate "' + text + '"';
    });