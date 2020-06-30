export default function getError(code){
  switch(code){
    case 'auth/invalid-email' :
      return 'Formato de email inválido';

    case 'auth/user-disabled':
      return 'Email de usuário desativado';

    case 'auth/user-not-found':
      return 'Email não existe';

    case 'auth/wrong-password':
      return 'Senha incorreta, tente novamente!';

    case 'auth/email-already-in-use':
      return 'Esse email já está em uso!';

    case 'auth/invalid-email':
      return 'Endereço de email inválido!';

    case 'auth/operation-not-allowed':
      return 'Conta desativada';

    case 'auth/weak-password':
      return 'Senha fraca, tente uma senha mais forte!';
  }
}
