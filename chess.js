function ShowMoves(from) {
    x = document.getElementById(from);

    switch (x.innerHTML) {
        case '♙':
            var name = "WP";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);
            var mp = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) + 1);
            var mm = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) + 1);
            var mn = wbchars[wbchars.indexOf(ic[0])] + (Number(ic[1]) + 1);

            if (Number(ic[1]) == 8) {
                console.log("White Choose Turn!");
            }

            if (ic[0] == "A") {
                if (!document.getElementById(mp).innerHTML == "") {
                    layout[name]['move'].push(mp);
                }
            } else if (ic[0] == "H") {
                if (!document.getElementById(mm).innerHTML == "") {
                    layout[name]['move'].push(mm);
                }
            } else {
                if (!document.getElementById(mp).innerHTML == "") {
                    layout[name]['move'].push(mp);
                }
                if (!document.getElementById(mm).innerHTML == "") {
                    layout[name]['move'].push(mm);
                }
            }
            
            for (let i = 1; i <= 2; i++) {
                if (!((Number(ic[1]) + i) > 8)) {
                    layout[name]['move'].push(ic[0] + (Number(ic[1]) + i));
                } 

            	if (!document.getElementById(mn).innerHTML == "") {
                    let index = layout[name]['move'].indexOf(mn);
                    if (index !== -1) {
                        layout[name]['move'].splice(index, 1);
                    }
            	}
            }

            HighLight(layout[name]['move']);
            break;
        case '♟':
            var name = "BP";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);
            var mp = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) - 1);
            var mm = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) - 1);
            var mn = wbchars[wbchars.indexOf(ic[0])] + (Number(ic[1]) - 1);

            if (Number(ic[1]) == 1) {
                console.log("Black Choose Turn!");
            }
            
            if (ic[0] == "A") {
                if (!document.getElementById(mp).innerHTML == "") {
                    layout[name]['move'].push(mp);
                }
            } else if (ic[0] == "H") {
                if (!document.getElementById(mm).innerHTML == "") {
                    layout[name]['move'].push(mm);
                }
            } else {
                if (!document.getElementById(mp).innerHTML == "") {
                    layout[name]['move'].push(mp);
                }
                if (!document.getElementById(mm).innerHTML == "") {
                    layout[name]['move'].push(mm);
                }
            }
            
            for (let i = -1; i >= -2; i--) {
                if (!((Number(ic[1]) + i) < 1)) {
                    layout[name]['move'].push(ic[0] + (Number(ic[1]) + i));
                }

                if (!document.getElementById(mn).innerHTML == "") {
                    let index = layout[name]['move'].indexOf(mn);
                    if (index !== -1) {
                        layout[name]['move'].splice(index, 1);
                    }
                }
            }

            HighLight(layout[name]['move']);
            break;
        case '♖':
            var name = "WR";
            console.log(layout[name]['char']);
            break;
        case '♜':
            var name = "BR";
            console.log(layout[name]['char']);
            break;
        case '♖<sub>+1</sub>':
            var name = "WR";
            console.log("♖ +1hp");
            break;
        case '♜<sub>+1</sub>':
            var name = "BR";
            console.log("♜ +1hp");
            break;
        case '♗':
            var name = "WB";
            console.log(layout[name]['char']);
            break;
        case '♝':
            var name = "BB";
            console.log(layout[name]['char']);
            break;
        case '♘':
            var name = "WN";
            console.log(layout[name]['char']);
            break;
        case '♞':
            var name = "BN";
            console.log(layout[name]['char']);
            break;
        case '♕':
            var name = "WQ";
            console.log(layout[name]['char']);
            break;
        case '♛':
            var name = "BQ";
            console.log(layout[name]['char']);
            break;
        case '♔':
            var name = "WK";
            console.log(layout[name]['char']);
            break;
        case '♚':
            var name = "BK";
            console.log(layout[name]['char']);
            break;
        default:
        	console.log("?");
            break;
    }
}

const layout = {
    'WP': {'char':'♙','start':["A2","B2","C2","D2","E2","F2","G2","H2"], 'move':[]}, 
    'BP': {'char':'♟','start':["A7","B7","C7","D7","E7","F7","G7","H7"], 'move':[]}, 
    'WR': {'char':'♖<sub>+1</sub>','start':["A1", "H1"], 'move':[]}, 
    'BR': {'char':'♜<sub>+1</sub>','start':["A8", "H8"], 'move':[]}, 
    'WB': {'char':'♗','start':["C1", "F1"], 'move':[]}, 
    'BB': {'char':'♝','start':["C8", "F8"], 'move':[]}, 
    'WN': {'char':'♘','start':["B1", "G1"], 'move':[]}, 
    'BN': {'char':'♞','start':["B8", "G8"], 'move':[]},
    'WQ': {'char':'♕','start':["D1"], 'move':[]},
    'BQ': {'char':'♛','start':["D8"], 'move':[]},
    'WK': {'char':'♔','start':["E1"], 'move':[]},
    'BK': {'char':'♚','start':["E8"], 'move':[]},
};
const objKeys = Object.keys(layout);
const wchars = ["A",  "C",  "E",  "G"];
const bchars = ["B", "D", "F", "H"];
const wbchars = ["A", "B", "C", "D", "E", "F", "G", "H"];
let counter = 1;
var ww = 0;
var bw = 0;

do {
    if (counter %2 != 0) {
        wchars.forEach(function(item) {
            let wchar = document.getElementById(item + counter);
            wchar.onclick = function () { ShowMoves(this.id) };
            wchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #fff;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            objKeys.forEach(function(name) {
                if (layout[name]['start'].includes(item + counter)) {
                    wchar.innerHTML = layout[name]['char'];
                    return true;
                }
            });
        });
        bchars.forEach(function(item) {
            let bchar = document.getElementById(item + counter);
            bchar.onclick = function () { ShowMoves(this.id) };
            bchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #999;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            objKeys.forEach(function(name) {
                if (layout[name]['start'].includes(item + counter)) {
                    bchar.innerHTML = layout[name]['char'];
                    return true;
                }
            });
        });
    } else {
        wchars.forEach(function(item) {
            let wchar = document.getElementById(item + counter);
            wchar.onclick = function () { ShowMoves(this.id) };
            wchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #999;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            objKeys.forEach(function(name) {
                if (layout[name]['start'].includes(item + counter)) {
                    wchar.innerHTML = layout[name]['char'];
                    return true;
                }
            });
        });
        bchars.forEach(function(item) {
            let bchar = document.getElementById(item + counter);
            bchar.onclick = function () { ShowMoves(this.id) };
            bchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #fff;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
            objKeys.forEach(function(name) {
                if (layout[name]['start'].includes(item + counter)) {
                    bchar.innerHTML = layout[name]['char'];
                    return true;
                }
            });
        });
    }
    counter += 1;
} while(counter != 9);

function HighLight(arr) {
    arr.forEach(function(item) {
        let ogbg = document.getElementById(item).style.backgroundColor;
        document.getElementById(item).style.backgroundColor = "LightBlue";
        document.getElementById(item).onclick = function () { Clicked(this.id) };
        setTimeout(() => {
            document.getElementById(item).style.backgroundColor = ogbg;
            document.getElementById(item).onclick = function () { ShowMoves(this.id) };
        }, 2000);
    });
}

function Clicked(to) {
    if (["♙", "♖", "♗", "♘", "♕", "♔"].includes(document.getElementById(to).innerHTML)) {
        bw += 1;
        console.log("Black Wins: " + bw);
        if (bw == 16) {
            console.log("Big Black Win!");
        }
    }

    if (["♟", "♜", "♝", "♞", "♛", "♚"].includes(document.getElementById(to).innerHTML)) {
        ww += 1;
        console.log("White Wins: " + ww);
        if (ww == 16) {
            console.log("Big White Win!");
        }
    }

    if (document.getElementById(to).innerHTML == "♖<sub>+1</sub>") {
        document.getElementById(to).innerHTML = "♖";
        x.innerHTML = "";
    } else if (document.getElementById(to).innerHTML == "♜<sub>+1</sub>") {
        document.getElementById(to).innerHTML = "♜";
        x.innerHTML = "";
    } else {
        document.getElementById(to).innerHTML = x.innerHTML;
        x.innerHTML = "";
    }
}
