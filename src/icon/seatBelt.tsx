// tslint:disable:max-line-length
import React from 'react'

import { IconPropsWithStatus, StatusIcon } from '../_utils/icon/status'

export const SeatBeltIcon = (props: IconPropsWithStatus) => (
  <StatusIcon {...props}>
    <path
      d="M15.58 11.452l-3.97 3.97a.925.925 0 00-.015 1.308l1.94 1.94a.925.925 0 001.292 0l3.287 3.285.662-.662-3.286-3.287 2.609-2.608 3.248 3.248.661-.661-3.247-3.249.052-.052a.925.925 0 00.015-1.308l-1.94-1.94a.925.925 0 00-1.308.016zm.647.646l1.94 1.94-3.97 3.97-1.94-1.94 3.97-3.97zM5.887 2.045l-.661.662 3.281 3.282-2.608 2.608-3.244-3.243-.662.661L5.237 9.26l-.05.05a.925.925 0 00-.015 1.307l1.293 1.293a.925.925 0 001.308-.015l.009-.008 1.315 1.347a1.829 1.829 0 002.586.03l.03-.03 1.322-1.354a1.829 1.829 0 000-2.556l-1.329-1.361.037-.037a.925.925 0 00.015-1.309l-1.293-1.293a.925.925 0 00-1.296.004L5.887 2.045zm3.917 3.94l1.293 1.293-.031.03-.015-.015-1.249 1.279-2.675 2.676-1.293-1.293 3.97-3.97z"
      fill={props.iconColor}
      fillRule="nonzero"
    />
  </StatusIcon>
)

SeatBeltIcon.defaultProps = StatusIcon.defaultProps
export default SeatBeltIcon