function recapOrderPartlyText(message, context, data, options, config) {
    var info = data.order;
    var order = info.data;
    var name = data.name;

    var listOrder = "Ingin lanjut dengan pesanan ini?\n\n";
    for (let i = 0; i < order.length; i++) {
        if (order[i].available)
            // format uang
            
            var formatTotal = order[i]["total"].toString().split('').reverse().join('');
            var total = formatTotal.match(/\d{1,3}/g);
            formatTotal = total.join('.').split('').reverse().join('');

            listOrder += i + 1 + ". " + order[i]["name"] + "-" + order[i]["notes"] + " " + order[i]["qty"] + "x" + "\n" + "Total: Rp" + formatTotal + "\n";
    }
    listOrder += "\n\n" + "1. Lanjut pilih pengiriman" + "\n" + "2. Tambah pesanan" + "\n" + "3. Ubah pesanan";


    var finRecap = {
        type: "text",
        content: listOrder
    };

    return finRecap;
}
