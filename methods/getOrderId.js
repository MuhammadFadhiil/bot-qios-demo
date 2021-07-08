function getOrderId(ctx) {
    var orderId = ctx.payload.result.id;
    ctx.data.orderId = orderId;

    var finOrder = {
        type: "text",
        content: JSON.stringify(ctx)
    };

    return finOrder;
}