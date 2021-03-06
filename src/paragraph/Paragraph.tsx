import React, { PureComponent } from 'react'
import cc from 'classcat'

import { Button, ButtonStatus } from '../button'
import { Text, TextTagType } from '../text'
import { StyledParagraph } from './Paragraph.style'

const DEFAULT_MAX_CHAR_SIZE = 180

export type ParagraphProps = Readonly<{
  className?: string
  children: string
  isExpandable?: boolean
  expandLabel?: string
  itemProp?: string
}>

type ParagraphState = {
  isExpanded: boolean
}

export class Paragraph extends PureComponent<ParagraphProps> {
  static defaultProps: Partial<ParagraphProps> = {
    className: '',
    isExpandable: false,
    expandLabel: '',
    itemProp: null,
  }

  state: ParagraphState = {
    isExpanded: false,
  }

  expandParagraph = () => {
    this.setState({ isExpanded: true })
  }

  getTruncatedText() {
    return `${this.props.children.substring(0, DEFAULT_MAX_CHAR_SIZE)}…`
  }

  render() {
    const { className, children: originalContent, isExpandable, expandLabel, itemProp } = this.props
    const { isExpanded } = this.state

    const isContentTruncated =
      isExpandable && !isExpanded && originalContent.length > DEFAULT_MAX_CHAR_SIZE
    const content = isContentTruncated ? this.getTruncatedText() : originalContent

    const readMoreButton = isContentTruncated && (
      <Button status={ButtonStatus.UNSTYLED} onClick={this.expandParagraph} className="mt-s">
        {expandLabel}
      </Button>
    )

    return (
      <StyledParagraph className={cc(className)} role="presentation">
        <Text {...(itemProp && { itemProp })} tag={TextTagType.PARAGRAPH} newlineToBr>
          {content}
        </Text>
        {readMoreButton}
      </StyledParagraph>
    )
  }
}
