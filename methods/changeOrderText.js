function dataWithoutExtra(ctx) {
    let info = ctx.data.order;
    let order = info.data;

    let newArray = [];
    for (let i = 0; i < order.length; i++) {
        if (order[i].sku !== "7h9" && order[i].sku !== "7h10") {
            newArray.push(order[i]);
        }
    }

    ctx.data.newArrayData = newArray;

    return ctx;
}

function changeOrderText(message, context, data, options, config) {
    // let info = data.order;
    let order = data.newArrayData;

    let listOrder = "Pesanan mana yang mau Kakak ubah\n\n";
    for (let i = 0; i < order.length; i++) {
        listOrder += i + 1 + ". " + order[i]["name"] + " - " + order[i]["qty"] + "x" + "\n";
    }

    let finRecap = {
        type: "text",
        content: listOrder
    };

    return finRecap;
}

function confirmChangeOrderText(message, context, data, options, config) {
    let index = data.changeMenu - 1;
    let orderSKU = data.sku;
    let orderName = context.orderName
    let dataOrder = data.dataOrder;

    const element = dataOrder[orderSKU];
    const detail = element.detailOrder

    let listOrder = "*" + orderName + "*" + " mana yang ingin diubah?\n\n";
    for (let i = 0; i < detail.length; i++) {
        if (detail[i]["notes"]) {
            listOrder += i + 1 + ". " + detail[i]["menu"] + " " + detail[i]["notes"] + "\n";
        } else {
            listOrder += i + 1 + ". " + detail[i]["menu"] + "\n";
        }
    }

    let finRecap = {
        type: "text",
        content: listOrder
    };

    return finRecap;
}

function changeOrDeleteText(message, context, data, options, config) {
    let index = data.changeMenu - 1;
    let orderSKU = data.sku;
    let dataOrder = data.dataOrder;

    if(!context.multipleArray){
        index = 0;
    }
    
    let listOrder = "";
    const element = dataOrder[orderSKU];
    const detail = element.detailOrder
    listOrder = "Jadi berapa " + "*" + detail[index]["menu"] + " - " + detail[index]["qty"] + "x" + "*" + " yang kamu mau pesan?" + "\n\n" + "Atau ketik 0 untuk menghapus " + detail[index]["menu"] + " dari pesananmu";

    let finRecap = {
        type: "text",
        content: listOrder
    };

    return finRecap;
}
