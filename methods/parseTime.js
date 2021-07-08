function parseTime(ctx) {
    let date = new Date(ctx.context.$now + 600000);
    let dateISO = date.toISOString();
    let parsedDate = dateISO.split('T');
    let parsedTime = parsedDate[1].split('.');
    ctx.context.parsedTime = parsedDate[0] + ' ' + parsedTime[0];

    let dateEnd = new Date(ctx.context.$now + 660000);
    let dateISOEnd = dateEnd.toISOString();
    let parsedDateEnd = dateISOEnd.split('T');
    let parsedTimeEnd = parsedDateEnd[1].split('.');
    ctx.context.parsedTimeEnd = parsedDateEnd[0] + ' ' + parsedTimeEnd[0];
    return ctx;
}