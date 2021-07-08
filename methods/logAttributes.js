function logAttributes(ctx) {
    let orderAttributes = ctx.payload.result.data.length;
    var apalah = JSON.stringify(orderAttributes);
    var metadata = {
        type: "text",
        content: apalah
    };
    return metadata;
}