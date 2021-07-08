//validate index utk confirmChangeOrderState
//index yg di cek adalah ctx.data.order.data[index].sku
function mappingIndex(ctx){
    let changeMenu = ctx.attributes.number;
    let index = changeMenu - 1;
    ctx.context.indexFound = false;
    ctx.data.changeMenu = changeMenu;

    try {
        let orderSKU = ctx.data.newArrayData[index].sku;
        let orderName = ctx.data.newArrayData[index].name;
        ctx.data.sku = orderSKU;
        ctx.context.orderName = orderName;
        ctx.context.indexFound = true;

        if(ctx.data.dataOrder[orderSKU].detailOrder.length == 1){
            ctx.context.multipleArray = false;
        }else{
            ctx.context.multipleArray = true;
        }
    } catch (error) {
        
    }

    return ctx;
}

//validate index utk changeOrDeleteState
//index yg di cek adalah dataOrderSku.detailOrder[index]
function mappingIndex2(ctx){
    let changeMenu = ctx.attributes.number;
    let index = changeMenu - 1;
    let orderSKU = ctx.data.sku;
    ctx.context.indexFound = false;
    ctx.data.changeMenu = changeMenu;

    if(!ctx.context.multipleArray){
        index = 0;
    }

    try {
        ctx.data.dataOrder[orderSKU].detailOrder[index].menu;
        ctx.context.indexFound = true;
    } catch (error) {
        
    }

    return ctx;
}
