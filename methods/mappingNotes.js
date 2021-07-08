function mappingNotes(ctx) {
    var order = ctx.data.orderChoosen;

    if (order == "7h1" || order == "7h2") {
        if (ctx.context.notes1 && !ctx.context.notes2) {
            switch (ctx.attributes.number) {
                case "1":
                    ctx.context.notes2 = "Less coffee";
                    break;
                case "2":
                    ctx.context.notes2 = "Normal";
                    break;
                case "3":
                    ctx.context.notes2 = "Extra coffee (+ Rp12.000)";
                    ctx.data.extraChoosen = "7h9";
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

    if (order == "7h5") {
        if (ctx.context.notes1 && !ctx.context.notes2) {
            switch (ctx.attributes.number) {
                case "1":
                    ctx.context.notes2 = "Less coffee";
                    break;
                case "2":
                    ctx.context.notes2 = "Normal";
                    break;
                case "3":
                    ctx.context.notes2 = "Extra coffee (+ Rp60.000)";
                    ctx.data.extraChoosen = "7h10";
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

    if (order == "7h3") {
        switch (ctx.attributes.number) {
            case "1":
                ctx.context.notes1 = "Less coffee";
                break;
            case "2":
                ctx.context.notes1 = "Normal";
                break;
        }
        ctx.data.notesChoosen = ctx.context.notes1;
    }

    if (order == "7h10") {
        switch (ctx.attributes.number) {
            case "1":
                ctx.context.notes1 = "Less sweet";
                break;
            case "2":
                ctx.context.notes1 = "Normal";
                break;
        }
        ctx.data.notesChoosen = ctx.context.notes1;
    }

    if (order == "7h4" || order == "7h8" || order == "7h9") {
        ctx.data.notesChoosen = null;
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
