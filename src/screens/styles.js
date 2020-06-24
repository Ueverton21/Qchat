import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  labelForm: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 15
  },
  input: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 12,
    fontSize: 16,
    color: '#555',
    borderRadius: 4
  },
  button: {
    backgroundColor: '#228B22',
    borderRadius: 4,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtButton: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },
  boxNew: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  txtNew: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  txtNewButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#119',
    marginLeft: 5
  },
  loginError: {
    marginTop: 5,
    color: '#E22',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
