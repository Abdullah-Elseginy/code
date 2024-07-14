// ?BOM

function scrollWindow() {
  window.scrollBy(600, 600);
}
function MoveWindow() {
  window.moveBy(600, 600);
}
// window.scrollBy(600, 600);
// window.scrollTo(600, 600);
// window.moveBy(500, 500);
console.log(window.history);
console.log(window.document);
// console.log(window.print());

var NewWindow;
function opennewWindow() {
  NewWindow = window.open("", "", "width=200,height=200");
}
function movewin() {
  NewWindow.moveBy(100, 100);
  NewWindow.focus();
  NewWindow.resizeBy(10, 10);
}
function closwin() {
  NewWindow.close();
}
console.log(window.screen.height);
console.log(window.screen.width);
window.screen;
