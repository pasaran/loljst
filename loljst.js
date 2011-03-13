var loljst = {
    _templates: []
};

loljst.template = function(selector, body, mode) {
    this._templates.push({ selector: selector, body: body, mode: mode });
};

loljst.apply = function(context, result, mode) {
    var templates = this._templates;
    for (var i = templates.length; i--; ) {
        var template = templates[i];
        if ((mode === template.mode) && template.selector(context)) {
            return template.body(context, result, mode);
        }
    }
    return '';
};

