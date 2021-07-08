function getFareId(ctx) {
    var index = ctx.context.chooseFare - 1;
    ctx.data.chooseFareValid = false;

    try {
        ctx.data.deliveryMethod.data[index].id;
        ctx.data.chooseFareValid = true;

        var shippingMethod = ctx.data.deliveryMethod.data[index].name;
        var shippingPrice = ctx.data.deliveryMethod.data[index].price;
        var shippingType = ctx.data.deliveryMethod.data[index].provider;
        var rateId = ctx.data.deliveryMethod.data[index].rateId;
    
        ctx.data.shippingMethod = shippingMethod;
        ctx.data.shippingPrice = shippingPrice;
        ctx.data.shippingType = shippingType;
        ctx.data.rateId = rateId;

    } catch (error) {

    }

    return ctx;
}