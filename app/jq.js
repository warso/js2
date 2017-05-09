export function $(selector) {
    if (!this) return new $(selector);
    this.element = document.querySelector(selector);
    return this;
}
$.prototype.click = function(cb) {
    this.element.addEventListener('click', cb, false);
    return this;
}
$.prototype.hide = function() {
    this.element.style.display = 'none';
    return this;
}
$.prototype.html = function(content) {
    this.element.innerHTML = content;
    return this;
}