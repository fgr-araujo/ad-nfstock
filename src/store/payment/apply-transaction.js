import pagarme from 'pagarme';

export default async (formattedPaymentInfo, apiKey) => {
  const headers = new Headers();

  const params = {
    method: 'POST',
    headers,
  }

  const connection = await pagarme.client.connect({ api_key: apiKey })
  const transaction = await connection.transactions.create(formattedPaymentInfo)
  return transaction
}