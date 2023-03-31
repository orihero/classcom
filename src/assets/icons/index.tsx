import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function UserIcon(props: SvgProps) {
  return (
    <Svg width={17} height={21} viewBox="0 0 17 21" fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M8.17 13.532c-3.867 0-7.17.585-7.17 2.926 0 2.342 3.282 2.948 7.17 2.948 3.868 0 7.17-.586 7.17-2.927 0-2.34-3.281-2.947-7.17-2.947z"
        stroke="#565656"
        strokeOpacity={0.24}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M8.17 10.191a4.596 4.596 0 10-4.596-4.596 4.58 4.58 0 004.564 4.596h.032z"
        stroke="#565656"
        strokeOpacity={0.24}
        strokeWidth={1.42857}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
