function businessHours(ctx) {
  let today = new Date();
  today.setHours(today.getHours() + 7);
  hour = today.getHours();
  day = today.getDay();

  // ctx.context.hour = hour;
  // ctx.context.day = day;

  // opening hours selama psbb
  if ((day == 0 || day == 6) && hour > 6 && hour < 19) {
    ctx.context.checker = "businessHours";
  } else if (day != 0 && day != 6 && hour > 8 && hour < 19) {
    ctx.context.checker = "businessHours";
  } else {
    ctx.context.checker = "outsideBusinessHours";
  }

  // if (
  //     today.getHours() > 8 &&
  //     today.getHours() < 21
  // ) {
  //   ctx.context.checker = "businessHours";
  // } else {
  //   ctx.context.checker = "outsideBusinessHours";
  // }

  let dateClose = new Date(ctx.context.$now);
  let dateISOClose = dateClose.toISOString();
  let parsedDateClose = dateISOClose.split('T');
  let parsedTimeClose = parsedDateClose[1].split('.');
  ctx.context.parsedTimeClose = parsedDateClose[0] + ' ' + "12:00:00";

  return ctx;
}
