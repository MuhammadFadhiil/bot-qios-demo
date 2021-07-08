function orderChooseMapping(ctx) {
    var att = ctx.content;

    if(att == "1"){
        ctx.data.orderChoosen = "7h1";
        ctx.data.menuName = "Kopi Harian 220ml";
    } else if (att == "2"){
        ctx.data.orderChoosen = "7h2";
        ctx.data.menuName = "Kopi Harian Coconut 220ml"
    } else if (att == "3"){
        ctx.data.orderChoosen = "7h3";
        ctx.data.menuName = "Long Black 220ml";
    } else if (att == "4"){
        ctx.data.orderChoosen = "7h4";
        ctx.data.menuName = "Express Shot 220 ml";
    } else if (att == "5"){
        ctx.data.orderChoosen = "7h5";
        ctx.data.menuName = "Kopi Harian Literan";
    } else if (att == "6"){
        ctx.data.orderChoosen = "7h6";
        ctx.data.menuName = "Cookies Latte Literan";
    } else if (att == "7"){
        ctx.data.orderChoosen = "7h7";
        ctx.data.menuName = "Speculatte Literan";
    } else {
        ctx.data.orderChoosen = "7h8";
        ctx.data.menuName = "Matcha Latte Literan";
    }

    return ctx;
}