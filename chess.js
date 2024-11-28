var wx = "&#9817;";
var bx = "&#9823;";

function ShowMoves(from) {
    let x = document.getElementById(from).innerHTML;

    switch (x) {
        case '♙':
            var name = "WP";
            console.log(layout[name]);
            break;
        case '♟':
            var name = "BP";
            console.log(layout[name]);
            break;
        case '♖':
            var name = "WR";
            console.log(layout[name]);
            break;
        case '♜':
            var name = "BR";
            console.log(layout[name]);
            break;
        case '♗':
            var name = "WB";
            console.log(layout[name]);
            break;
        case '♝':
            var name = "BB";
            console.log(layout[name]);
            break;
        case '♘':
            var name = "WN";
            console.log(layout[name]);
            break;
        case '♞':
            var name = "BN";
            console.log(layout[name]);
            break;
        default:
            break;
    }
}

const layout = {
    'WP': 'White Pawn', 
    'BP': 'Black Pawn', 
    'WR': 'White Rook', 
    'BR': 'Black Rook', 
    'WB': 'White Bishop', 
    'BB': 'Black Bishop', 
    'WN': 'White Night', 
    'BN': 'Black Night'
};
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
