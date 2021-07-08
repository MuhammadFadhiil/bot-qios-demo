function addOrder(ctx) {
  let dataOrder = ctx.data.dataOrder;
  let order = ctx.data.orderChoosen;
  let qty = ctx.data.qtyChoosen;
  let notes = ctx.data.notesChoosen;
  let extra = ctx.data.extraChoosen;
  let menu = ctx.data.menuName;

  const updatedOrder = Object.assign({}, dataOrder);

  // membuat array of object untuk setiap detail (qty & notes) dari dataOrder
  if (updatedOrder[order]) {

    try {
      if (notes) {
        let index = dataOrder[order].detailOrder.findIndex(x => x.notes === notes);
        // handle repeating order for a menu with notes
        if (updatedOrder[order].detailOrder[index].notes === notes) {
          let sumQty = parseInt(updatedOrder[order].detailOrder[index].qty) + parseInt(qty);
          sumQty = "" + sumQty;
          updatedOrder[order].detailOrder[index].qty = sumQty;
        }
        // handle repeating order for a menu without notes
      } else {
        index = dataOrder[order].detailOrder.findIndex(x => x.menu === menu);
        let sumQty = parseInt(updatedOrder[order].detailOrder[index].qty) + parseInt(qty);
        sumQty = "" + sumQty;
        updatedOrder[order].detailOrder[index].qty = sumQty;
      }
    } catch (error) {
      updatedOrder[order].detailOrder.push({ menu: menu, qty: qty, notes: notes, extra: extra });
    }

  } else {
    const detailOrder = [];
    updatedOrder[order] = {
      detailOrder
    };
    updatedOrder[order].detailOrder.push({ menu: menu, qty: qty, notes: notes, extra: extra });
  }

  // menambahkan extra (additional menu) ke dataOrder
  if (extra) {
    if (updatedOrder[extra]) {

      try {
        if (notes) {
          let index = dataOrder[extra].detailOrder.findIndex(x => x.menuNotes === notes);
          // handle repeating order for a menu with notes
          if (updatedOrder[extra].detailOrder[index].menuNotes === notes && updatedOrder[extra].detailOrder[index].menu === menu) {
            let sumQty = parseInt(updatedOrder[extra].detailOrder[index].qty) + parseInt(qty);
            sumQty = "" + sumQty;
            updatedOrder[extra].detailOrder[index].qty = sumQty;
          }
          // handle repeating order for a menu without notes
        } else {
          index = dataOrder[extra].detailOrder.findIndex(x => x.menu === menu);
          let sumQty = parseInt(updatedOrder[extra].detailOrder[index].qty) + parseInt(qty);
          sumQty = "" + sumQty;
          updatedOrder[extra].detailOrder[index].qty = sumQty;
        }
      } catch (error) {
        updatedOrder[extra].detailOrder.push({ menu: menu, qty: qty, menuNotes: notes });
      }

    } else {
      const detailOrder = [];
      updatedOrder[extra] = {
        detailOrder
      };
      updatedOrder[extra].detailOrder.push({ menu: menu, qty: qty, menuNotes: notes });
    }
  }

  ctx.data.dataOrder = {
    ...dataOrder,
    ...updatedOrder
  };

  // fungsi ini mengembalikan dataOrder menjadi object
  function modifyNotes(obj) {
    let data = {};
    for (const key in obj) {
      const element = obj[key];
      data[key] = { qty: 0 };
      element.detailOrder.forEach((e) => {
        data[key].qty += parseInt(e.qty, 10);
        if (data[key].notes) {
          if (data[key].notes.includes("||")) {
            data[key].notes += " || " + e.notes + " " + e.qty;
          } else {
            data[key].notes += " " + element.detailOrder[0].qty + " || " + e.notes + " " + e.qty;
          }
        } else {
          data[key].notes = e.notes;
        }
      });
      data[key].qty = "" + data[key].qty;
    }
    return data;
  }
  let finalDataOrder = modifyNotes(ctx.data.dataOrder);
  ctx.data.finalDataOrder = finalDataOrder;

  return ctx;
}