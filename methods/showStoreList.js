function showStoreList(message, context, data, options, config) {
    var merchants = data.allStore;
    var name = data.name;
    
    var store = "Hore! Kak " + name + " berada di area pengantaran Toko Kopi Tuku🎉 \n\nMau pesan dari toko mana?\n\n";
    for (let i = 0; i < merchants.length; i++) {
        store += i + 1 + ". *" + merchants[i]["name"] + " (" + merchants[i]["distance"] + "km)" + "*\n";
    }
    store += "\n💡 _Ketik angka pilihannya aja_"

    var finNumber = {
        type: "text",
        content: store
    };

    return finNumber;
}
