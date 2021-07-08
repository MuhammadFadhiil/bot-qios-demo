function recapAllOrderFinal(message, context, data, options, config) {
    let info = data.order;
    let fullOrder = info.data;
    let name = data.name;
    let phone = data.phone;
    let address = data.addressNotes;
    let email = data.email;
    let baristaNotes = data.baristaNotes;

    let finalOrder = "Siap! ini rekap pemesanan " + name + "\n\n" + "*Pengiriman*" + "\n\n" + "Nama: " + name + "\n" + "No. telepon: " + phone + "\n" + "Alamat: " + address + "\n" + "Email: " + email + "\n\n" + "*Pesanan*" + "\n\n";

    for (let i = 0; i < fullOrder.length; i++) {
        if (fullOrder[i].available){
            // format uang
            
            let formatTotal = fullOrder[i]["total"].toString().split('').reverse().join('');
            let total = formatTotal.match(/\d{1,3}/g);
            formatTotal = total.join('.').split('').reverse().join('');

            finalOrder += i + 1 + ". " + fullOrder[i]["name"] + "-" + fullOrder[i]["notes"] + " " + fullOrder[i]["qty"] + "x" + "\n" + "Total: Rp" + formatTotal + "\n";
        }
    }
    
    finalOrder += "Catatan untuk Barista: " + baristaNotes + "\n\n";

    // format shipping price
    let shippingPrice = data.shippingPrice.toString().split('').reverse().join('');
    let shipping = shippingPrice.match(/\d{1,3}/g);
    shippingPrice = shipping.join('.').split('').reverse().join('');

    finalOrder += "Biaya pengiriman: Rp" + shippingPrice;

    let totalPrice = data.shippingPrice + info.total;
    
    // format total price (order + shipping)
    let formatTotalAll = totalPrice.toString().split('').reverse().join('');
    let totalAll = formatTotalAll.match(/\d{1,3}/g);
    formatTotalAll = totalAll.join('.').split('').reverse().join('');
    
    finalOrder += "\n\n" + "*" + "Total pembayaran: Rp" + formatTotalAll + "*" + "\n\n" + "1. Lanjut ke pembayaran" + "\n" + "2. Ubah data pengiriman" + "\n" + "00. Kembali";

    let finOrder = {
        type: "text",
        content: finalOrder
    };

    return finOrder;
}