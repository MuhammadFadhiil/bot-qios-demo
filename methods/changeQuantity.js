function changeQuantity(ctx) {
    let index = ctx.data.changeMenu - 1;
    let orderSKU = ctx.data.sku;
    let dataOrder = ctx.data.dataOrder;
    let quantity = ctx.data.qtyChoosen

    if (!ctx.context.multipleArray) {
        index = 0;
    }

    const selectedItem = dataOrder[orderSKU].detailOrder[index];
    const extra = selectedItem.extra;

    if (extra) {
        //update qty additional menu (extra)
        let indexExtra = dataOrder[extra].detailOrder.findIndex(x => x.qty === selectedItem.qty);
        dataOrder[extra].detailOrder[indexExtra].qty = quantity;
        //update qty menu
        selectedItem.qty = quantity;
    } else {
        selectedItem.qty = quantity;
    }

    // fungsi ini mengembalikan dataOrder menjadi object
    function modifyNotes(obj) {
        let data = {};
        for (const key in obj) {
            const element = obj[key];
            data[key] = { qty: 0 };
            element.detailOrder.forEach((e) => {
                data[key].qty += parseInt(e.qty, 10);
                if (data[key].notes) {
                    if (data[key].notes.includes("||")) {
                        data[key].notes += " || " + e.notes + " " + e.qty;
                    } else {
                        data[key].notes += " " + element.detailOrder[0].qty + " || " + e.notes + " " + e.qty;
                    }
                } else {
                    data[key].notes = e.notes;
                }
            });
            data[key].qty = "" + data[key].qty;
        }
        return data;
    }
    let finalDataOrder = modifyNotes(dataOrder);
    ctx.data.finalDataOrder = finalDataOrder;

    return ctx;
}
