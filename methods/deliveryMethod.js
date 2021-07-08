function deliveryMethod(message, context, data, options, config) {
    var delivery = data.deliveryMethod;
    var deliv = delivery.data;

    var allOptions = "Melalui apa kamu ingin mengirim pesanan?\n\n";
    for (let i = 0; i < deliv.length; i++) {
        // format uang    
        var paymentPrice = deliv[i]["price"].toString().split('').reverse().join('');
        var price = paymentPrice.match(/\d{1,3}/g);
        paymentPrice = price.join('.').split('').reverse().join('');

        allOptions += i + 1 + ". " + deliv[i]["name"] + " [Rp" + paymentPrice + "]\n";
    }
    // allOptions += "\n💡_Cukup tulis angka yang kamu inginkan, ya. Contoh: 1, untuk pengiriman menggunakan Internal Courier_"

    var finDeliv = {
        type: "text",
        content: allOptions
    };

    return finDeliv;
}