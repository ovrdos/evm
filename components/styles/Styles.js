import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
container: {
   flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
clearContainer: {
  padding: 0,
  paddingRight: 0,
  width: '90%',
  height: '14%',
  textAlign: 'right',
  alignItems: 'flex-end',
  flexDirection: 'column',
},
greeting: {
    fontSize: 18,
    color: '#000',
    textAlign: 'left',
    marginBottom: 5,
    fontWeight: 'bold',
    position: 'relative',
    left: 0,
  },
  title: {
    fontSize: 12,
    color: '#111',
    textTransform: 'uppercase',
    textAlign: 'right',
    marginBottom: 0
  },
  value: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'right',
    alignItems: 'flex-end',
    width: '100%',
  },
  dailyChange: {
    flexDirection: 'row',
    position: 'relative',
    marginRight: 3,
    fontSize: 11,
    height: 20,
  },
  dailyChangeText: {
    marginRight: 3,
    fontSize: 11
  },
  today: {
    marginLeft: 3,
    textAlign: 'right',
    fontSize: 13
  },
navItem: {
      width: 40,
      height: 3,
      fontSize: 7,
      alignItems: 'center',
      justifyContent: 'space-around',
}
});

