function ShowMoves(from) {
    x = document.getElementById(from);

    if (turn == "black") {
        if (["♙", "♖", "♖<sub>+1</sub>", "♗", "♘", "♔", "♕"].includes(x.innerHTML)) {
            return false;
        }
    } else {
        if (["♟", "♜", "♜<sub>+1</sub>", "♝", "♞", "♚", "♛"].includes(x.innerHTML)) {
            return false;
        }
    }

    switch (x.innerHTML) {
        case '♙':
            var name = "WP";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);
            var mp = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) + 1);
            var mm = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) + 1);
            var mn = ic[0] + (Number(ic[1]) + 1);

            if (Number(ic[1]) == 8) {
                console.log("RIP");
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
            var mn = ic[0] + (Number(ic[1]) - 1);

            if (Number(ic[1]) == 1) {
                console.log("RIP");
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
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);

            if (ic[0] != "A") {
                var ipp = 1;
                do {
                    var ml = wbchars[wbchars.indexOf(ic[0]) - ipp] + ic[1];
                    if (document.getElementById(ml) == null) { break; }
                    layout[name]['move'].push(ml);
                    ipp++;
                } while ((document.getElementById(ml).innerHTML == ""));
            }

            if (ic[0] != "H") {
                var imm = 1;
                do {
                    var mr = wbchars[wbchars.indexOf(ic[0]) + imm] + ic[1];
                    if (document.getElementById(mr) == null) { break; }
                    layout[name]['move'].push(mr);
                    imm++;
                } while ((document.getElementById(mr).innerHTML == ""));
            }

            if (ic[1] != "8") {
                var ip = 1;
                do {
                    var mf = ic[0] + (Number(ic[1]) + ip);
                    if (document.getElementById(mf) == null) { break; }
                    layout[name]['move'].push(mf);
                    ip++;
                } while ((document.getElementById(mf).innerHTML == ""));
            }

            if (ic[1] != "1") {
                var im = 1;
                do {
                    var mb = ic[0] + (Number(ic[1]) - im);
                    if (document.getElementById(mb) == null) { break; }
                    layout[name]['move'].push(mb);
                    im++;
                } while ((document.getElementById(mb).innerHTML == ""));
            }

            HighLight(layout[name]['move']);
            break;
        case '♜':
            var name = "BR";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);

            if (ic[0] != "A") {
                var ipp = 1;
                do {
                    var ml = wbchars[wbchars.indexOf(ic[0]) - ipp] + ic[1];
                    if (document.getElementById(ml) == null) { break; }
                    layout[name]['move'].push(ml);
                    ipp++;
                } while ((document.getElementById(ml).innerHTML == ""));
            }

            if (ic[0] != "H") {
                var imm = 1;
                do {
                    var mr = wbchars[wbchars.indexOf(ic[0]) + imm] + ic[1];
                    if (document.getElementById(mr) == null) { break; }
                    layout[name]['move'].push(mr);
                    imm++;
                } while ((document.getElementById(mr).innerHTML == ""));
            }

            if (ic[1] != "1") {
                var im = 1;
                do {
                    var mb = ic[0] + (Number(ic[1]) - im);
                    if (document.getElementById(mb) == null) { break; }
                    layout[name]['move'].push(mb);
                    im++;
                } while ((document.getElementById(mb).innerHTML == ""));
            }

            if (ic[1] != "8") {
                var ip = 1;
                do {
                    var mf = ic[0] + (Number(ic[1]) + ip);
                    if (document.getElementById(mf) == null) { break; }
                    layout[name]['move'].push(mf);
                    ip++;
                } while ((document.getElementById(mf).innerHTML == ""));
            }

            HighLight(layout[name]['move']);
            break;
        case '♖<sub>+1</sub>':
            var name = "WR";
            console.log("♖ +1hp");
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);

            if (ic[0] != "A") {
                var ipp = 1;
                do {
                    var ml = wbchars[wbchars.indexOf(ic[0]) - ipp] + ic[1];
                    if (document.getElementById(ml) == null) { break; }
                    layout[name]['move'].push(ml);
                    ipp++;
                } while ((document.getElementById(ml).innerHTML == ""));
            }

            if (ic[0] != "H") {
                var imm = 1;
                do {
                    var mr = wbchars[wbchars.indexOf(ic[0]) + imm] + ic[1];
                    if (document.getElementById(mr) == null) { break; }
                    layout[name]['move'].push(mr);
                    imm++;
                } while ((document.getElementById(mr).innerHTML == ""));
            }

            if (ic[1] != "8") {
                var ip = 1;
                do {
                    var mf = ic[0] + (Number(ic[1]) + ip);
                    if (document.getElementById(mf) == null) { break; }
                    layout[name]['move'].push(mf);
                    ip++;
                } while ((document.getElementById(mf).innerHTML == ""));
            }

            if (ic[1] != "1") {
                var im = 1;
                do {
                    var mb = ic[0] + (Number(ic[1]) - im);
                    if (document.getElementById(mb) == null) { break; }
                    layout[name]['move'].push(mb);
                    im++;
                } while ((document.getElementById(mb).innerHTML == ""));
            }

            HighLight(layout[name]['move']);
            break;
        case '♜<sub>+1</sub>':
            var name = "BR";
            console.log("♜ +1hp");
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);

            if (ic[0] != "A") {
                var ipp = 1;
                do {
                    var ml = wbchars[wbchars.indexOf(ic[0]) - ipp] + ic[1];
                    if (document.getElementById(ml) == null) { break; }
                    layout[name]['move'].push(ml);
                    ipp++;
                } while ((document.getElementById(ml).innerHTML == ""));
            }

            if (ic[0] != "H") {
                var imm = 1;
                do {
                    var mr = wbchars[wbchars.indexOf(ic[0]) + imm] + ic[1];
                    if (document.getElementById(mr) == null) { break; }
                    layout[name]['move'].push(mr);
                    imm++;
                } while ((document.getElementById(mr).innerHTML == ""));
            }

            if (ic[1] != "1") {
                var im = 1;
                do {
                    var mb = ic[0] + (Number(ic[1]) - im);
                    if (document.getElementById(mb) == null) { break; }
                    layout[name]['move'].push(mb);
                    im++;
                } while ((document.getElementById(mb).innerHTML == ""));
            }

            if (ic[1] != "8") {
                var ip = 1;
                do {
                    var mf = ic[0] + (Number(ic[1]) + ip);
                    if (document.getElementById(mf) == null) { break; }
                    layout[name]['move'].push(mf);
                    ip++;
                } while ((document.getElementById(mf).innerHTML == ""));
            }

            HighLight(layout[name]['move']);
            break;
        case '♗':
            var name = "WB";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);

            if (ic[1] != "8") {
                var ip = 1;
                var ipp = 1;

                do {
                    var mmb = wbchars[wbchars.indexOf(ic[0]) - ip] + (Number(ic[1]) + ip);
                    if (document.getElementById(mmb) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mmb);
                    }

                    ip++;
                } while ((document.getElementById(mmb) != null));

                do {
                    var mpb = wbchars[wbchars.indexOf(ic[0]) + ipp] + (Number(ic[1]) + ipp);
                    if (document.getElementById(mpb) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mpb);
                    }

                    ipp++;
                } while ((document.getElementById(mpb) != null));
            }

            if (ic[1] != "1") {
                var im = 1;
                var imm = 1;

                do {
                    var mm = wbchars[wbchars.indexOf(ic[0]) - im] + (Number(ic[1]) - im);
                    if (document.getElementById(mm) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mm);
                    }

                    im++;
                } while ((document.getElementById(mm) != null));

                do {
                    var mp = wbchars[wbchars.indexOf(ic[0]) + imm] + (Number(ic[1]) - imm);
                    if (document.getElementById(mp) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mp);
                    }

                    imm++;
                } while ((document.getElementById(mp) != null));
            }

            HighLight(layout[name]['move']);
            break;
        case '♝':
            var name = "BB";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);

            if (ic[1] != "1") {
                var im = 1;
                var imm = 1;

                do {
                    var mm = wbchars[wbchars.indexOf(ic[0]) - im] + (Number(ic[1]) - im);
                    if (document.getElementById(mm) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mm);
                    }

                    im++;
                } while ((document.getElementById(mm) != null));

                do {
                    var mp = wbchars[wbchars.indexOf(ic[0]) + imm] + (Number(ic[1]) - imm);
                    if (document.getElementById(mp) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mp);
                    }

                    imm++;
                } while ((document.getElementById(mp) != null));
            }

            if (ic[1] != "8") {
                var ip = 1;
                var ipp = 1;

                do {
                    var mmb = wbchars[wbchars.indexOf(ic[0]) - ip] + (Number(ic[1]) + ip);
                    if (document.getElementById(mmb) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mmb);
                    }

                    ip++;
                } while ((document.getElementById(mmb) != null));

                do {
                    var mpb = wbchars[wbchars.indexOf(ic[0]) + ipp] + (Number(ic[1]) + ipp);
                    if (document.getElementById(mpb) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mpb);
                    }

                    ipp++;
                } while ((document.getElementById(mpb) != null));
            }

            HighLight(layout[name]['move']);
            break;
        case '♘':
            var name = "WN";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);
            var mp = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) + 1);
            var mm = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) + 1);
            var mpb = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) - 1);
            var mmb = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) - 1);
            var mn = ic[0] + (Number(ic[1]) + 1);
            var mnb = ic[0] + (Number(ic[1]) - 1);
            var mbp = wbchars[wbchars.indexOf(ic[0]) + 1] + ic[1];
            var mbm = wbchars[wbchars.indexOf(ic[0]) - 1] + ic[1];

            if (ic[1] == "1") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mbm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm);
                }
            } else if (ic[1] == "8") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbm);
                } else {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm);
                }
            } else {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm);
                }
            }
            
            HighLight(layout[name]['move']);
            break;
        case '♞':
            var name = "BN";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);
            var mp = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) + 1);
            var mm = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) + 1);
            var mpb = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) - 1);
            var mmb = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) - 1);
            var mn = ic[0] + (Number(ic[1]) + 1);
            var mnb = ic[0] + (Number(ic[1]) - 1);
            var mbp = wbchars[wbchars.indexOf(ic[0]) + 1] + ic[1];
            var mbm = wbchars[wbchars.indexOf(ic[0]) - 1] + ic[1];

            if (ic[1] == "1") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mbm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm);
                }
            } else if (ic[1] == "8") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbm);
                } else {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm);
                }
            } else {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mn);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mnb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm);
                }
            }

            HighLight(layout[name]['move']);
            break;
        case '♕':
            var name = "WQ";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];

            layout[name]['move'].push("D1", "E1");

            HighLight(layout[name]['move']);
            break;
        case '♛':
            var name = "BQ";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];

            layout[name]['move'].push("D8", "E8");

            HighLight(layout[name]['move']);
            break;
        case '♔':
            var name = "WK";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];

            lephet.forEach(function(item) {
                layout[name]['move'].push(item);
            });

            HighLight(layout[name]['move']);
            break;
        case '♚':
            var name = "BK";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];

            lephet.forEach(function(item) {
                layout[name]['move'].push(item);
            });

            HighLight(layout[name]['move']);
            break;
        default:
        	console.log("?");
            break;
    }
}

const layout = {
    'WP': {'char':'♙','start':["A2", "B2","C2","D2","E2","F2","G2","H2"], 'move':[]}, 
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
const lephet = [
    "A1", "B1","C1","D1","E1","F1","G1","H1", 
    "A2", "B2","C2","D2","E2","F2","G2","H2", 
    "A3", "B3","C3","D3","E3","F3","G3","H3", 
    "A4", "B4","C4","D4","E4","F4","G4","H4", 
    "A5", "B5","C5","D5","E5","F5","G5","H5", 
    "A6", "B6","C6","D6","E6","F6","G6","H6", 
    "A7", "B7","C7","D7","E7","F7","G7","H7", 
    "A8", "B8","C8","D8","E8","F8","G8","H8"
];
let counter = 1;
var ww = 0;
var bw = 0;
var turn = "black";

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
            if (ogbg != "lightblue") {
                document.getElementById(item).style.backgroundColor = ogbg;
            }
            document.getElementById(item).onclick = function () { ShowMoves(this.id) };
        }, 2000);
    });
}

function Clicked(to) {
    if (["♙", "♖", "♗", "♘", "♔"].includes(document.getElementById(to).innerHTML)) {
        bw += 1;
        console.log("Black Wins: " + bw);
    }

    if (["♟", "♜", "♝", "♞", "♚"].includes(document.getElementById(to).innerHTML)) {
        ww += 1;
        console.log("White Wins: " + ww);
    }

    if (bw >= 15) {
        if (document.getElementById(to).innerHTML == "♕") {
            console.log("Big Black Win!");
        }
    }

    if (ww >= 15) {
        if (document.getElementById(to).innerHTML == "♛") {
            console.log("Big White Win!");
        }
    }

    if (document.getElementById(to).innerHTML == "♖<sub>+1</sub>") {
        document.getElementById(to).innerHTML = "♖";
        x.innerHTML = "";
    } else if (document.getElementById(to).innerHTML == "♜<sub>+1</sub>") {
        document.getElementById(to).innerHTML = "♜";
        x.innerHTML = "";
    } else if (document.getElementById(to).innerHTML == "♕" && bw < 15) {
        if (x.innerHTML != "♕") {
            console.log("Such a waste ...");
            x.innerHTML = "";
        }
    } else if (document.getElementById(to).innerHTML == "♛" && ww < 15) {
        if (x.innerHTML != "♛") {
            console.log("Such a waste ...");
            x.innerHTML = "";
        }
    } else {
        document.getElementById(to).innerHTML = x.innerHTML;
        x.innerHTML = "";
    }

    if (turn == "black") {
        turn = "white";
    } else {
        turn = "black";
    }
}
