import pagarme from 'pagarme';

export default async (formattedPaymentInfo, apiKey) => {
  try {
    const connection = await pagarme.client.connect({ api_key: apiKey })
    const result = await connection.transactions.create(formattedPaymentInfo)
    if (result.status !== 'paid') {
      return Promise.reject('A operação foi recusada pela operadora')
    }
    return result
  } catch(err) {
    return Promise.reject(err)
  }
}