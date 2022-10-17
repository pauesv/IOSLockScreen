import { Text } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, withTiming, withRepeat, withSequence, } from 'react-native-reanimated';

const SwipeUpToOpen = () => {
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: withRepeat(withSequence(withTiming(-15)), -1, true),
            }
        ]
    }));

  return <Animated.Text style={[{color: 'white', fontWeight: '600', alignSelf: 'flex-end', letterSpacing: 0.5, }, animatedStyles, ]}>Swipe up to open</Animated.Text>;
};

export default SwipeUpToOpen;