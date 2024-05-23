import { View, type ViewProps, Text, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ClarityView } from '@/components/view/ClarityView';

import { useThemeColor } from '@/hooks/useThemeColor';

export function WelcomeView() {
  return
  <ClarityView />

}

    const styles = StyleSheet.create({
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
}
});