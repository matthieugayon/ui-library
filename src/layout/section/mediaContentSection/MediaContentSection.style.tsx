import styled from 'styled-components'

import { radius, responsiveBreakpoints, space } from '../../../_utils/branding'

export const StyledMediaContentSection = styled.div`
  margin-top: ${space.xl};
  margin-bottom: ${space.xl};

  & .kirk-media-content-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  & .kirk-media-content-img {
    min-height: 320px;
    background-position: 50% 30%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: ${space.xl};
    border-radius: ${radius.s};
  }

  & .kirk-media-content-button {
    margin-top: ${space.l};
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    &.kirk-media-content--flipped .kirk-media-content-img-column {
      order: 2;
    }

    &.kirk-media-content--flipped .kirk-media-content-img {
      margin-right: 0;
      margin-left: ${space.xl};
    }
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-media-content-img {
      height: 136px;
      min-height: 0;
      margin-left: -${space.xl};
      margin-right: -${space.xl};
    }

    & .kirk-media-content-wrapper {
      align-items: center;
    }
  }
`