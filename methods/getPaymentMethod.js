function getPaymentMethod(ctx) {
    var index = ctx.context.choosePayment;
    if (index == 1)
        ctx.data.paymentMethod = "GOPAY";
    else if (index == 2)
        ctx.data.paymentMethod = "OVO";
    else if (index == 3)
        ctx.data.paymentMethod = "DANA";
    else if (index == 4)
        ctx.data.paymentMethod = "BANKTRANSFER";
    else if (index == 5)
        ctx.data.paymentMethod = "LINKAJA";
    return ctx;
}