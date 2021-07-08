function filterMethod(raw, data) {
    let menu = raw.menu;
    let dingpan = raw.dingpan;
    let qty = raw.qty;
    let notes = raw.notesmenu;
    let finalMenu2 = data.finalMenu;

    if (dingpan) {
        dingpan.forEach(element => {
            if (element.belongsTo && Object.keys(element.belongsTo).length > 0) {
                let belongsTo = element.belongsTo;
                menu[belongsTo.index]['dingpan'] = element.value;
            }
        });
    }

    if (qty) {
        qty.forEach(element => {
            if (element.belongsTo && Object.keys(element.belongsTo).length > 0) {
                if (element.value != "0") {
                    let belongsTo = element.belongsTo;
                    menu[belongsTo.index]['qty'] = element.value;
                }
            }
        });
    }
    if (notes) {
        notes.forEach(element => {
            if (element.belongsTo && Object.keys(element.belongsTo).length > 0) {
                let belongsTo = element.belongsTo;
                if (menu[belongsTo.index]['notes'] != null) {
                    menu[belongsTo.index]['notes'] += element.value + " ";
                } else {
                    menu[belongsTo.index]['notes'] = element.value + " ";
                }
            }
        });
    }

    if (finalMenu2) {
        for (let i = 0; i < Object.keys(finalMenu2).length; i++) {
            for (let j = 0; j < notes.length; j++) {
                if (notes[j].belongsTo.value == Object.keys(finalMenu2)[i]) {
                    finalMenu2[Object.keys(finalMenu2)[i]].notes = notes[j].value;
                }
            }
        }
    }

    let finalMenu = {};
    menu.forEach(element => {
        finalMenu[element.value] = {
            type: element.dingpan || "-",
            qty: element.qty || "1",
            notes: element.notes || "normal"
        };
    });
    data.sesuatu = finalMenu2;

    if (data.finalMenu) {
        return finalMenu2;
    } else {
        return finalMenu;
    }
}