export default (errCode) => {
  switch (errCode) {
    case 'auth/email-already-in-use':
      return 'Usuário já existe em nosso sistema e não podemos cadastra-lo novamente'
    default:
      return 'Ocorreu um erro e não podemos prossegir. Cheque os dados'
  }
}