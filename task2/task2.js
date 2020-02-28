var cashbox = {
  amount: 0,
  addPayment: function (payment) {
    if (payment.amount < 0) {
      console.log('amount not affected');
    }
    else {
      cashbox.amount += payment.amount;
      console.log(payment.info);
      console.log('amount:', this.amount)
    }
  },
  refundPayment: function (refund) {
    if (this.amount - refund.amount < 0) {
      console.log('cashbox amount not affected');
    }
    else {
      cashbox.amount -= refund.amount;
      console.log(refund.info);
      console.log('cashbox amount =', this.amount)
    }

  },
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' }); // show error (console), amount not affected
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' }); // cashbox amount = 10

cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount = 0
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount not affected (warning)
