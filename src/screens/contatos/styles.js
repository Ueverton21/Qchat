import {StyleSheet} from 'react-native';

const styles = new StyleSheet.create({
  btnNovo: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#999',
    borderBottomWidth: .5,
  },
  boxIcone: {
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#133B23'
  },
  txtBtnNovo: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  txtSemContato: {
    marginTop: 12,
    alignSelf: 'center',
    fontSize: 16
  }
});

export default styles;
