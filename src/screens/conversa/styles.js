import { StyleSheet } from 'react-native';

export default new StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#DDD',
    padding: 10
  },
  boxSubmit: {
    flexDirection: 'row',
  },
  input: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    flex: 1,
    marginRight: 10,
    fontSize: 16
  },
  btnSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxMessageEnviada: {
    marginBottom: 8,
    alignItems: 'flex-end',
    marginLeft: 60
  },
  boxMessageRecebida: {
    marginBottom: 8,
    alignItems: 'flex-start',
    marginRight: 60
  },
  enviada: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#466',
  },
  recebida: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#474',
  }
  
})
