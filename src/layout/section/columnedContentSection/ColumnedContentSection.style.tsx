import styled from 'styled-components'

import { font, fontWeight, radius, responsiveBreakpoints, space } from '../../../_utils/branding'
import { BaseSection } from '../baseSection'

export const StyledColumnedContentSection = styled(BaseSection)`
  & {
    margin: ${space.xl} 0;
  }

  & .kirk-columned-content-section-title {
    padding: ${space.xl} 0;
    margin: 0;
  }

  & .kirk-columned-content-section-content {
    position: relative;
  }

  & .kirk-columned-content-section-top-link {
    position: absolute;
    top: ${space.s};
    right: 0;
  }

  & .kirk-columned-content-section-subtitle {
    padding-top: ${space.m};
    padding-bottom: ${space.s};
    margin: 0;
  }

  & .kirk-columned-content-section-subtitle span {
    font-weight: ${fontWeight.medium};
  }

  & .kirk-columned-content-section-subcontent {
    margin: 0;
  }

  & .kirk-columned-content-section-footer-link {
    font-size: ${font.m.size};
    line-height: ${font.m.lineHeight};
    padding-top: ${space.m};
  }

  & .kirk-columned-content-section-media-cover img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: ${radius.s};
  }

  & .kirk-columned-content-section-media-element {
    text-align: left;
    margin-bottom: ${space.m};
  }

  & .kirk-columned-content-section-media-fit {
    text-align: center;
    margin-bottom: ${space.m};
  }

  & .kirk-columned-content-section-media-fit img {
    width: 60%;
    border-radius: ${radius.s};
    margin-bottom: ${space.m};
  }

  @media (${responsiveBreakpoints.isMediaSmall}) {
    & .kirk-columned-content-section-title {
      text-align: center;
    }

    & .kirk-columned-content-section-top-link {
      display: none;
    }

    & .kirk-columned-content-section-column:not(:first-child):not(:last-child) {
      margin-top: ${space.xl};
      margin-bottom: ${space.xl};
    }

    & .kirk-columned-content-section-column {
      text-align: center;
    }

    & .kirk-columned-content-section-media-element {
      text-align: center;
    }
  }

  @media (${responsiveBreakpoints.isMediaLarge}) {
    & .kirk-columned-content-section-column:not(:last-child) {
      margin-right: ${space.xxl};
    }
  }
`