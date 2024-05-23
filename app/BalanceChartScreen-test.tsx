import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BalanceChartScreen from '@/components/views/BalanceChartScreen';

describe('BalanceChartScreen', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<BalanceChartScreen />);
    expect(getByTestId('touchable')).toBeTruthy();
  });

  it('generates historical data correctly', () => {
    const { result } = renderHook(() => BalanceChartScreen());
    const sampleData = result.current.generateHistoricalData();
    expect(sampleData.length).toBe(30);
    expect(sampleData[0]).toHaveProperty('x');
    expect(sampleData[0]).toHaveProperty('y');
  });

  it('handles press correctly', () => {
    const { getByTestId } = render(<BalanceChartScreen />);
    const touchable = getByTestId('touchable');
    fireEvent.pressIn(touchable, { nativeEvent: { locationX: 50, locationY: 50 } });
    expect(getByTestId('dotPosition')).toHaveTextContent('50, 50');
  });

  it('handles move correctly', () => {
    const { getByTestId } = render(<BalanceChartScreen />);
    const touchable = getByTestId('touchable');
    fireEvent(touchable, 'onMoveShouldSetPanResponder', { dx: 10, dy: 10 });
    expect(getByTestId('gestureState')).toHaveTextContent('10, 10');
  });
});