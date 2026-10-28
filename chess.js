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

            if (ic[1] == "8") {
                let newChar = prompt("Choose a character (Pawn, Knight, Bishop, Rook, King): ", "Pawn");

                switch(newChar) {
                    case "Pawn":
                        x.innerHTML = "♙";
                        break;
                    case "Knight":
                        x.innerHTML = "♘";
                        break;
                    case "Bishop":
                        x.innerHTML = "♗";
                        break;
                    case "Rook":
                        x.innerHTML = "♖";
                        break;
                    case "King":
                        x.innerHTML = "♔";
                        break;
                    case "MissingNo.":
                        lephet.forEach(function(item) {
                            document.getElementById(item).innerHTML = "<img src='https://static.wikia.nocookie.net/pokemon/images/d/dc/Missingno_Sprite.png' style='height: 40px; width: 40px;'>";
                        });
                        break;
                    default:
                        alert("Non existent character!");
                }
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
                var mn = ic[0] + (Number(ic[1]) + i);

                if (!((Number(ic[1]) + i) > 8)) {
                    layout[name]['move'].push(mn);
                }

                if (document.getElementById(mn) && document.getElementById(mn).innerHTML !== "") {
                    let index = layout[name]['move'].indexOf(mn);
                    if (index !== -1) {
                        layout[name]['move'].splice(index, 1);
                    }
                    break;
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

            if (ic[1] == "1") {
                let newChar = prompt("Choose a character (Pawn, Knight, Bishop, Rook, King): ", "Pawn");

                switch(newChar) {
                    case "Pawn":
                        x.innerHTML = "♟";
                        break;
                    case "Knight":
                        x.innerHTML = "♞";
                        break;
                    case "Bishop":
                        x.innerHTML = "♝";
                        break;
                    case "Rook":
                        x.innerHTML = "♜";
                        break;
                    case "King":
                        x.innerHTML = "♚";
                        break;
                    case "MissingNo.":
                        lephet.forEach(function(item) {
                            document.getElementById(item).innerHTML = "<img src='https://static.wikia.nocookie.net/pokemon/images/d/dc/Missingno_Sprite.png' style='height: 40px; width: 40px;'>";
                        });
                        break;
                    default:
                        alert("Non existent character!");
                }
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
                var mn = ic[0] + (Number(ic[1]) + i);

                if (!((Number(ic[1]) + i) < 1)) {
                    layout[name]['move'].push(mn);
                }

                if (document.getElementById(mn) && document.getElementById(mn).innerHTML !== "") {
                    let index = layout[name]['move'].indexOf(mn);
                    if (index !== -1) {
                        layout[name]['move'].splice(index, 1);
                    }
                    break;
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
                } while ((document.getElementById(mmb).innerHTML == ""));

                do {
                    var mpb = wbchars[wbchars.indexOf(ic[0]) + ipp] + (Number(ic[1]) + ipp);
                    if (document.getElementById(mpb) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mpb);
                    }

                    ipp++;
                } while ((document.getElementById(mpb).innerHTML == ""));
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
                } while ((document.getElementById(mm).innerHTML == ""));

                do {
                    var mp = wbchars[wbchars.indexOf(ic[0]) + imm] + (Number(ic[1]) - imm);
                    if (document.getElementById(mp) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mp);
                    }

                    imm++;
                } while ((document.getElementById(mp).innerHTML == ""));
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
                } while ((document.getElementById(mm).innerHTML == ""));

                do {
                    var mp = wbchars[wbchars.indexOf(ic[0]) + imm] + (Number(ic[1]) - imm);
                    if (document.getElementById(mp) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mp);
                    }

                    imm++;
                } while ((document.getElementById(mp).innerHTML == ""));
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
                } while ((document.getElementById(mmb).innerHTML == ""));

                do {
                    var mpb = wbchars[wbchars.indexOf(ic[0]) + ipp] + (Number(ic[1]) + ipp);
                    if (document.getElementById(mpb) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mpb);
                    }

                    ipp++;
                } while ((document.getElementById(mpb).innerHTML == ""));
            }

            HighLight(layout[name]['move']);
            break;
        case '♘':
            var name = "WN";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);
            var mp = wbchars[wbchars.indexOf(ic[0]) + 2] + (Number(ic[1]) + 1);
            var mm = wbchars[wbchars.indexOf(ic[0]) - 2] + (Number(ic[1]) + 1);
            var mpb = wbchars[wbchars.indexOf(ic[0]) + 2] + (Number(ic[1]) - 1);
            var mmb = wbchars[wbchars.indexOf(ic[0]) - 2] + (Number(ic[1]) - 1);
            var mbp = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) + 2);
            var mbm = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) - 2);
            var mbp2 = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) - 2);
            var mbm2 = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) + 2);

            // o7

            if (ic[1] == "1") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                }
            } else if (ic[1] == "2") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                }
            } else if (ic[1] == "8") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                } else {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                }
            } else if (ic[1] == "7") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                }
            } else {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                }
            }
            
            HighLight(layout[name]['move']);
            break;
        case '♞':
            var name = "BN";
            console.log(layout[name]['char']);
            layout[name]['move'] = [];
            var ic = from.split(/(\d+)/);
            var mp = wbchars[wbchars.indexOf(ic[0]) + 2] + (Number(ic[1]) + 1);
            var mm = wbchars[wbchars.indexOf(ic[0]) - 2] + (Number(ic[1]) + 1);
            var mpb = wbchars[wbchars.indexOf(ic[0]) + 2] + (Number(ic[1]) - 1);
            var mmb = wbchars[wbchars.indexOf(ic[0]) - 2] + (Number(ic[1]) - 1);
            var mbp = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) + 2);
            var mbm = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) - 2);
            var mbp2 = wbchars[wbchars.indexOf(ic[0]) + 1] + (Number(ic[1]) - 2);
            var mbm2 = wbchars[wbchars.indexOf(ic[0]) - 1] + (Number(ic[1]) + 2);

            // o7

            if (ic[1] == "1") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                }
            } else if (ic[1] == "2") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                }
            } else if (ic[1] == "8") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                } else {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                }
            } else if (ic[1] == "7") {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mp);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                }
            } else {
                if (ic[0] == "A") {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbp2);
                } else if (ic[0] == "B") {
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "H") {
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbm2);
                } else if (ic[0] == "G") {
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mm);
                } else {
                    layout[name]['move'].push(mp);
                    layout[name]['move'].push(mm);
                    layout[name]['move'].push(mpb);
                    layout[name]['move'].push(mmb);
                    layout[name]['move'].push(mbp);
                    layout[name]['move'].push(mbm2);
                    layout[name]['move'].push(mbm);
                    layout[name]['move'].push(mbp2);
                }
            }

            HighLight(layout[name]['move']);
            break;
        case '♕':
            var name = "WQ";
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
        case '♛':
            var name = "BQ";
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
        case '♔':
            var name = "WK";
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
                var bip = 1;
                var ip = 1;
                var ipp = 1;

                do {
                    var mf = ic[0] + (Number(ic[1]) + bip);
                    if (document.getElementById(mf) == null) { break; }
                    layout[name]['move'].push(mf);
                    bip++;
                } while ((document.getElementById(mf).innerHTML == ""));

                do {
                    var mmb = wbchars[wbchars.indexOf(ic[0]) - ip] + (Number(ic[1]) + ip);
                    if (document.getElementById(mmb) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mmb);
                    }

                    ip++;
                } while ((document.getElementById(mmb).innerHTML == ""));

                do {
                    var mpb = wbchars[wbchars.indexOf(ic[0]) + ipp] + (Number(ic[1]) + ipp);
                    if (document.getElementById(mpb) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mpb);
                    }

                    ipp++;
                } while ((document.getElementById(mpb).innerHTML == ""));
            }

            if (ic[1] != "1") {
                var bim = 1;
                var im = 1;
                var imm = 1;

                do {
                    var mb = ic[0] + (Number(ic[1]) - bim);
                    if (document.getElementById(mb) == null) { break; }
                    layout[name]['move'].push(mb);
                    bim++;
                } while ((document.getElementById(mb).innerHTML == ""));

                do {
                    var mm = wbchars[wbchars.indexOf(ic[0]) - im] + (Number(ic[1]) - im);
                    if (document.getElementById(mm) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mm);
                    }

                    im++;
                } while ((document.getElementById(mm).innerHTML == ""));

                do {
                    var mp = wbchars[wbchars.indexOf(ic[0]) + imm] + (Number(ic[1]) - imm);
                    if (document.getElementById(mp) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mp);
                    }

                    imm++;
                } while ((document.getElementById(mp).innerHTML == ""));
            }

            HighLight(layout[name]['move']);
            break;
        case '♚':
            var name = "BK";
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
                var bim = 1;
                var im = 1;
                var imm = 1;

                do {
                    var mb = ic[0] + (Number(ic[1]) - bim);
                    if (document.getElementById(mb) == null) { break; }
                    layout[name]['move'].push(mb);
                    bim++;
                } while ((document.getElementById(mb).innerHTML == ""));

                do {
                    var mm = wbchars[wbchars.indexOf(ic[0]) - im] + (Number(ic[1]) - im);
                    if (document.getElementById(mm) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mm);
                    }

                    im++;
                } while ((document.getElementById(mm).innerHTML == ""));

                do {
                    var mp = wbchars[wbchars.indexOf(ic[0]) + imm] + (Number(ic[1]) - imm);
                    if (document.getElementById(mp) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mp);
                    }

                    imm++;
                } while ((document.getElementById(mp).innerHTML == ""));
            }

            if (ic[1] != "8") {
                var bip = 1;
                var ip = 1;
                var ipp = 1;

                do {
                    var mf = ic[0] + (Number(ic[1]) + bip);
                    if (document.getElementById(mf) == null) { break; }
                    layout[name]['move'].push(mf);
                    bip++;
                } while ((document.getElementById(mf).innerHTML == ""));

                do {
                    var mmb = wbchars[wbchars.indexOf(ic[0]) - ip] + (Number(ic[1]) + ip);
                    if (document.getElementById(mmb) == null) { break; }

                    if (ic[0] != "A") {
                        layout[name]['move'].push(mmb);
                    }

                    ip++;
                } while ((document.getElementById(mmb).innerHTML == ""));

                do {
                    var mpb = wbchars[wbchars.indexOf(ic[0]) + ipp] + (Number(ic[1]) + ipp);
                    if (document.getElementById(mpb) == null) { break; }

                    if (ic[0] != "H") {
                        layout[name]['move'].push(mpb);
                    }

                    ipp++;
                } while ((document.getElementById(mpb).innerHTML == ""));
            }

            HighLight(layout[name]['move']);
            break;
        default:
        	console.log("NANI?!?");
            break;
    }
}

const layout = {
    'WP': {'char':'♙','start':["A2", "B2","C2","D2","E2","F2","G2","H2"], 'move':[]}, 
    'BP': {'char':'♟','start':["A7","B7","C7","D7","E7","F7","G7","H7"], 'move':[]}, 
    'WR': {'char':'♖','start':["A1", "H1"], 'move':[]}, 
    'BR': {'char':'♜','start':["A8", "H8"], 'move':[]}, 
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
            wchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #d3d7cf;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
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
            bchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #75507b;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
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
            wchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #75507b;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
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
            bchar.style.cssText = "float: left;width: 40px;height: 40px;background-color: #d3d7cf;font-size: 25px;text-align: center;display: table-cell;vertical-align: middle";
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
    if (["♕", "♙", "♖", "♗", "♘", "♔"].includes(x.innerHTML)) {
        arr.forEach(function(item) {
            if (!["♕", "♙", "♖", "♗", "♘", "♔"].includes(document.getElementById(item).innerHTML)) {
                let ogbg = document.getElementById(item).style.backgroundColor;
                document.getElementById(item).style.backgroundColor = "LightBlue";
                document.getElementById(item).onclick = function () { Clicked(this.id) };
                setTimeout(() => {
                    if (ogbg != "lightblue") {
                        document.getElementById(item).style.backgroundColor = ogbg;
                    }
                    document.getElementById(item).onclick = function () { ShowMoves(this.id) };
                }, 2000);
            }
        });
    } else if (["♛", "♟", "♜", "♝", "♞", "♚"].includes(x.innerHTML)) {
        arr.forEach(function(item) {
            if (!["♛", "♟", "♜", "♝", "♞", "♚"].includes(document.getElementById(item).innerHTML)) {
                let ogbg = document.getElementById(item).style.backgroundColor;
                document.getElementById(item).style.backgroundColor = "LightBlue";
                document.getElementById(item).onclick = function () { Clicked(this.id) };
                setTimeout(() => {
                    if (ogbg != "lightblue") {
                        document.getElementById(item).style.backgroundColor = ogbg;
                    }
                    document.getElementById(item).onclick = function () { ShowMoves(this.id) };
                }, 2000);
            }
        });
    } else {
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
}

function Clicked(to) {
    document.getElementById(to).innerHTML = x.innerHTML;
    x.innerHTML = "";
}
