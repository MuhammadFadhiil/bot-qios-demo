function getStoreId(ctx) {
    if (!ctx.data.storeId) {
        var index = ctx.context.chooseStore - 1;
        var storeId = ctx.data.allStore[index].id;
        var phoneStore = ctx.data.allStore[index].phone;
        ctx.data.storeId = storeId;
        ctx.data.phoneStore = phoneStore;    
    }
    return ctx;
}