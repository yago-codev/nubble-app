import React from 'react';

import {Circle, Path, Svg} from 'react-native-svg';

interface ErrorRoundProps {
  size?: number;
  color?: string;
}

export function ErrorRound({size = 48, color = 'white'}: ErrorRoundProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Circle cx="24" cy="24" r="24" fill="#EA3838" />
      <Path
        d="M15 15.0004L31.2279 31.9996M15.7728 32L32 15"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
}