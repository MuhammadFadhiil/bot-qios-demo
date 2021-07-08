function recapAllOrder(ctx) {
    var info = ctx.payload.result;
    var order = info.data;

    var listOrder = "Ini pesanan yang tersedia 🎉\n\n";
    for (let i = 0; i < order.length; i++) {
        if (order[i].available)
            // format uang
            
            var formatTotal = order[i]["total"].toString().split('').reverse().join('');
            var total = formatTotal.match(/\d{1,3}/g);
            formatTotal = total.join('.').split('').reverse().join('');

            listOrder += i + 1 + ". " + order[i]["name"] + "-" + order[i]["notes"] + " " + order[i]["qty"] + "x" + "\n" + "Total: Rp" + formatTotal + "\n";
    }
    listOrder += "\n\n" + "Ingin pesan yang lain?" + "\n\n" + "1. Lanjut pilih pengiriman" + "\n" + "2. Tambah pesanan" + "\n" + "3. Ubah pesanan";

    var finRecap = {
        type: "text",
        content: listOrder
    };

    return finRecap;
}