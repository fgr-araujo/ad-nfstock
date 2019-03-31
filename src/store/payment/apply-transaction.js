import pagarme from 'pagarme';

export default async (formattedPaymentInfo, apiKey) => {
  const connection = await pagarme.client.connect({ api_key: apiKey })
  const transaction = await connection.transactions.create(formattedPaymentInfo)
  return transaction
}