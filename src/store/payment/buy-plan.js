export default (creditCardInfo) => ({
  amount: creditCardInfo.price,
  card_number: creditCardInfo.cardNumber,
  card_cvv: creditCardInfo.cardCvv,
  card_expiration_date: creditCardInfo.cardExpirationDate,
  card_holder_name: creditCardInfo.cardHolderName,
  customer: {
    external_id: creditCardInfo.token,
    name: 'Cliente do Site',
    type: 'individual',
    country: 'br',
    email: creditCardInfo.email,
    documents: [
      {
        type: 'cpf',
        number: '09056298763'
      }
    ],
    phone_numbers: ['+552198437030']
  },
  billing: {
    name: 'Cliente do Site',
    address: {
    country: 'br',
    state: 'rj',
    city: 'Nova Friburgo',
    neighborhood: 'Centro',
    street: 'Rua Julius Arp',
    street_number: '123',
    zipcode: '26130570'
    }
  },
  items: [
    {
      id: creditCardInfo.shortDescription,
      title: creditCardInfo.shortDescription,
      unit_price: creditCardInfo.price,
      quantity: 1,
      tangible: true
    }
  ]
})