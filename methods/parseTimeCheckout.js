function parseTimeCheckout(ctx) {
    // schedule 1 menit utk cek jika user belum melakukan pembayaran
    let date1 = new Date(ctx.context.$now + 60000);
    let dateISO1 = date1.toISOString();
    let parsedDate1 = dateISO1.split('T');
    let parsedTime1 = parsedDate1[1].split('.');
    ctx.context.parsedTime1 = parsedDate1[0] + ' ' + parsedTime1[0];

    // schedule 55s utk cek status pembayaran OVO
    let date55s = new Date(ctx.context.$now + 55000);
    let dateISO55s = date55s.toISOString();
    let parsedDate55s = dateISO55s.split('T');
    let parsedTime55s = parsedDate55s[1].split('.');
    ctx.context.parsedTime55s = parsedDate55s[0] + ' ' + parsedTime55s[0];
    
    // schedule 15 menit start ketika user berhasil melakukan pembayaran
    let date15 = new Date(ctx.context.$now + 900000);
    let dateISO15 = date15.toISOString();
    let parsedDate15 = dateISO15.split('T');
    let parsedTime15 = parsedDate15[1].split('.');
    ctx.context.parsedTime15 = parsedDate15[0] + ' ' + parsedTime15[0];

    // schedule 2 menit start setelah scheduler 15 menit,utk cek order sudah sampai/belum
    let date2 = new Date(ctx.context.$now + 120000);
    let dateISO2 = date2.toISOString();
    let parsedDate2 = dateISO2.split('T');
    let parsedTime2 = parsedDate2[1].split('.');
    ctx.context.parsedTime2 = parsedDate2[0] + ' ' + parsedTime2[0];

    return ctx;
}