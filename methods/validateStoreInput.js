function validateStoreInput(ctx) {
    var index = ctx.context.chooseStore - 1;
    ctx.data.chooseStoreValid = false;

    try {
        ctx.data.allStore[index].id;
        ctx.data.chooseStoreValid = true;
    } catch (error) {
        
    }

    return ctx;
}
