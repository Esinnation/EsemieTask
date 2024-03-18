export const Data = {
  createdAt:'9/11/2023',
  invoiceName:'INV-001',
  exchangeRate:1,
  status:'Paid',
  billFrom: {
    name:'Odalo PLC.',
    address:'Lekki, Lagos, Nigeria',
    number:'+234 800 000 0000',
    balanceDue:'4,000'
  },
  billTo:{
    name:'Kelly Audu',
    address:'Ilasan New Road, Ikate Lekki,',
    state:'Lagos State',
    acctNo:'00100010056',
    bankName:'UBA',
    invoiceDate:'12th, Aug 2022',
    dueDate:'12th, Aug 2022',
  },
  items:[
    {
      id:0,
      name:'Toot Brush',
      qty:1,
      amount:4000
    },
    {
      id:1,
      name:'Hp Elitebook 830 G3',
      qty:2,
      amount:100000
    },
  ],
  discount:0,
  vat:0
}