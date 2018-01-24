/*
 * Copyright © 2018 Harsh Makadia, All rights reserved.
 */
import React from 'react';
import '../tags.css';
import TagBox from './tagBox';

const CSSVariable = {
  displayNone: {
    display: 'none',
  },
  displayInlineBlock: {
    display: 'inline-block',
  },
};

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource,
      isReadOnly: props.isReadOnly,
      borderColor: props.borderColor,
      borderColorHover: props.borderColorHover,
      backgroundColor: props.backgroundColor,
      backgroundColorHover: props.backgroundColorHover,
      fontSize: props.fontSize,
      fontColor: props.fontColor,
    };
    this.removeTagName = this.removeTagName.bind(this);
  }

  removeTagName(data) {
    const selectedTags = this.state.dataSource;
    const index = selectedTags.findIndex(item => item.id === data.id);
    if (index > -1) {
      selectedTags.splice(index, 1);
      this.setState({ dataSource: selectedTags });
    }
  }

  render() {
    const _this = this;
    const tagArr = this.state.dataSource;
    const tagHTML = tagArr.map((data, idx) => (<TagBox
      tagName={data.name}
      idx={idx}
      removeTag={() => _this.removeTagName(data)}
      key={idx}
      isReadOnly={_this.state.isReadOnly}
      borderColor={this.state.borderColor}
      borderColorHover={this.state.borderColorHover}
      backgroundColor={this.state.backgroundColor}
      backgroundColorHover={this.state.backgroundColorHover}
      fontSize={this.state.fontSize}
      fontColor={this.state.fontColor}
    />));

    return (
      <div className="all-tags">
        <div
          className="rect-tag react-tag-autocomplete-border"
          style={(this.state.isReadOnly) ? CSSVariable.displayNone : CSSVariable.displayInlineBlock}
        >
          <div className="rect-tag-name" />
        </div>

        {tagHTML}

      </div>
    );
  }
}

export default Tags;
