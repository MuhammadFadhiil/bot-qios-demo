function orderChooseMapping(ctx) {
    var att = ctx.content;

    if(att == "1"){
        ctx.data.orderChoosen = "a1";
        ctx.data.menuName = "Kopi Susu Botol 220 ml";
    } else if (att == "2"){
        ctx.data.orderChoosen = "a2";
        ctx.data.menuName = "Kopi Item Botol 220 ml"
    } else if (att == "3"){
        ctx.data.orderChoosen = "a3";
        ctx.data.menuName = "Kopi Coconut Botol 220 ml";
    } else if (att == "4"){
        ctx.data.orderChoosen = "a4";
        ctx.data.menuName = "Kopi Susu Botol 1 L";
    } else {
        ctx.data.orderChoosen = "a5";
        ctx.data.menuName = "Aren Latte Botol 1 L";
    }

    return ctx;
}