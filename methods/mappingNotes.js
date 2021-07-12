function mappingNotes(ctx) {
    var order = ctx.data.orderChoosen;

    if (order == "a1" || order == "a2" || order == "a3") {
        if (ctx.context.notes1 && !ctx.context.notes2) {
            switch (ctx.attributes.number) {
                case "1":
                    ctx.context.notes2 = "Less coffee";
                    break;
                case "2":
                    ctx.context.notes2 = "Normal";
                    break;
                case "3":
                    ctx.context.notes2 = "Extra coffee (+ Rp2.000)";
                    ctx.data.extraChoosen = "a6";
                    break;
            }
            if (ctx.content == "00") {
                ctx.context.notes1 = null;
            }
        } else {
            switch (ctx.attributes.number) {
                case "1":
                    ctx.context.notes1 = "Less sweet";
                    break;
                case "2":
                    ctx.context.notes1 = "Normal";
                    break;
            }
        }
        ctx.data.notesChoosen = ctx.context.notes1 + ", " + ctx.context.notes2;
    }

    if (order == "a4" || order == "a5") {
        if (ctx.context.notes1 && !ctx.context.notes2) {
            switch (ctx.attributes.number) {
                case "1":
                    ctx.context.notes2 = "Less coffee";
                    break;
                case "2":
                    ctx.context.notes2 = "Normal";
                    break;
                case "3":
                    ctx.context.notes2 = "Extra coffee (+ Rp6.000)";
                    ctx.data.extraChoosen = "a7";
                    break;
            }
            if (ctx.content == "00") {
                ctx.context.notes1 = null;
            }
        } else {
            switch (ctx.attributes.number) {
                case "1":
                    ctx.context.notes1 = "Less sweet";
                    break;
                case "2":
                    ctx.context.notes1 = "Normal";
                    break;
            }
        }
        ctx.data.notesChoosen = ctx.context.notes1 + ", " + ctx.context.notes2;
    }

    return ctx;
}

// this function for mapping barista notes
function mappingBaristaNotes(ctx) {
    let content = ctx.content;

    if (content == "1") {
        ctx.data.baristaNotes = "-";
        ctx.context.validateBaristaNotes = true;
    } else {
        if (content.length > 140) {
            ctx.context.validateBaristaNotes = false;
        } else {
            ctx.context.validateBaristaNotes = true;
            ctx.data.baristaNotes = content;
        }
    }

    return ctx;
}
