// renderer
let x = prompt("Enter the character name:", "Paraszt");
switch (x) {
    case 'Paraszt':
        var wx = "&#9817;";
        var bx = "&#9823;";
        break;
    case 'bastya':
        var wx = "&#9814;";
        var bx = "&#9820;";
        break;
    case 'Futo':
        var wx = "&#9815;";
        var bx = "&#9821;";
        break;
    case 'lo':
        var wx = "&#9816;";
        var bx = "&#9822;";
        break;
    default:
        break;
}

function ShowMoves(from) {
    console.log(from);
}

const wchars = ["A",  "C",  "E",  "G"];
const bchars = ["B", "D", "F", "H"];
let counter = 1;

do {
    if (counter %2 != 0) {
        wchars.forEach(function(item) {
            let wchar = document.getElementById(item + counter);
            wchar.onclick = function () { ShowMoves(this.id) };
            wchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #fff;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            wchar.innerHTML = wx;
        });
        bchars.forEach(function(item) {
            let bchar = document.getElementById(item + counter);
            bchar.onclick = function () { ShowMoves(this.id) };
            bchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #999;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            bchar.innerHTML = bx;
        });
    } else {
        wchars.forEach(function(item) {
            let wchar = document.getElementById(item + counter);
            wchar.onclick = function () { ShowMoves(this.id) };
            wchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #999;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            wchar.innerHTML = bx;
        });
        bchars.forEach(function(item) {
            let bchar = document.getElementById(item + counter);
            bchar.onclick = function () { ShowMoves(this.id) };
            bchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #fff;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            bchar.innerHTML = wx;
        });
    }
    counter += 1;
} while(counter != 9);
