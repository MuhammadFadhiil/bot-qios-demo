function filterNotes(ctx) {
    let notes = ctx.attributes.data;
    let finalMenu2 = Object.assign({}, ctx.data.finalMenu);

    if (finalMenu2) {
        for (let i = 0; i < Object.keys(finalMenu2).length; i++) {
            for (let j = 0; j < Object.keys(notes).length; j++) {
                if (Object.keys(notes)[j] == Object.keys(finalMenu2)[i]) {
                    finalMenu2[Object.keys(finalMenu2)[i]].notes = notes[Object.keys(notes)[j]].notes;
                }
            }
        }
    }

    ctx.data.finalMenu = Object.assign({}, finalMenu2);

    return ctx;
}