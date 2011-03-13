with (loljst) {

template(
    function(c) { return c.name === 'page'; },
    function(c, b) {
        b.push(
            '<html>',
            '<head></head>',
            '<body>'
        );
        apply({ page: c, name: 'menu', val: c.val.menu }, b);
        b.push(
            '</body>',
            '</html>'
        );
    }
);

template(
    function(c) { return c.name === 'menu'; },
    function(c, b) {
        b.push('<ul class="menu">');
        for (var i = 0, l = c.val.length; i < l; i++) {
            apply({ parent: c.name, name: 'item', val: c.val[i], page: c.page }, b);
        }
        b.push('</ul>');
    }
);

template(
    function(c) { return c.parent === 'menu' && c.name === 'item'; },
    function(c, b) {
        b.push('<li>');
        apply(c, b, 'content');
        b.push('</li>');
    }
);

template(
    function(c) { return true; },
    function(c, b) {
        b.push(
            '<a href="' + c.val.link + '">',
                c.val.text,
            '</a>'
        );
    },
    'content'
);

template(
    function(c) { return c.val.id === c.page.id; },
    function(c, b) {
        b.push(
            '<span>',
                c.val.text,
            '</span>'
        );
    },
    'content'
);

}

