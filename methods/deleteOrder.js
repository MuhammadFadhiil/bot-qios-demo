function deleteOrder(ctx) {
    let index = ctx.data.changeMenu - 1;
    let orderSKU = ctx.data.sku;
    let dataOrder = ctx.data.dataOrder;
    let selectedItem = dataOrder[orderSKU].detailOrder;

    if (!ctx.context.multipleArray) {
        index = 0;
    }

    const extra = selectedItem[index].extra;

    if (selectedItem.length > 1) {
        if (extra) {
            //delete additional menu (extra)
            if (dataOrder[extra].detailOrder.length > 1) {
                let indexExtra = dataOrder[extra].detailOrder.findIndex(x => x.qty === selectedItem[index].qty);
                dataOrder[extra].detailOrder.splice(indexExtra, 1);
                //delete menu
                selectedItem.splice(index, 1);
            } else {
                delete dataOrder[extra];
                //delete menu
                selectedItem.splice(index, 1);
            }
        } else {
            selectedItem.splice(index, 1);
        }
    } else {
        if (extra) {
            //delete additional menu (extra)
            if (dataOrder[extra].detailOrder.length > 1) {
                let indexExtra = dataOrder[extra].detailOrder.findIndex(x => x.qty === selectedItem[index].qty);
                dataOrder[extra].detailOrder.splice(indexExtra, 1);
                //delete menu
                delete dataOrder[orderSKU];
            } else {
                delete dataOrder[extra];
                //delete menu
                delete dataOrder[orderSKU];
            }
        } else {
            delete dataOrder[orderSKU];
        }
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
