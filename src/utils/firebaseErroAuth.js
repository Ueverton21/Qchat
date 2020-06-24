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
  }
}
