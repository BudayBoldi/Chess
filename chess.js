function ShowMoves(from) {
    let x = document.getElementById(from).innerHTML;

    switch (x) {
        case '♙':
            var name = "WP";
            console.log(layout[name]['char']);
            for (let i = 1; i <= 2; i++) {
                let ic = from.split(/(\d+)/);
                layout[name]['move'].push(ic[0] + (Number(ic[1]) + i));
            }
            break;
        case '♟':
            var name = "BP";
            console.log(layout[name]['char']);
            for (let i = -1; i >= -2; i--) {
                let ic = from.split(/(\d+)/);
                layout[name]['move'].push(ic[0] + (Number(ic[1]) + i));
            }
            break;
        case '♖':
            var name = "WR";
            console.log(layout[name]['char']);
            break;
        case '♜':
            var name = "BR";
            console.log(layout[name]['char']);
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
        default:
            break;
    }
}

const layout = {
    'WP': {'char':'&#9817;','start':["A2","B2","C2","D2","E2","F2","G2","H2"], 'move':[]}, 
    'BP': {'char':'&#9823;','start':["A7","B7","C7","D7","E7","F7","G7","H7"], 'move':[]}, 
    'WR': {'char':'&#9814;','start':[], 'move':[]}, 
    'BR': {'char':'&#9820;','start':[], 'move':[]}, 
    'WB': {'char':'&#9815;','start':[], 'move':[]}, 
    'BB': {'char':'&#9821;','start':[], 'move':[]}, 
    'WN': {'char':'&#9816;','start':[], 'move':[]}, 
    'BN': {'char':'&#9822;','start':[], 'move':[]}
};
const objKeys = Object.keys(layout);
const wchars = ["A",  "C",  "E",  "G"];
const bchars = ["B", "D", "F", "H"];
let counter = 1;

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
