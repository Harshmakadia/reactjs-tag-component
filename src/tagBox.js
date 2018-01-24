import React from 'react';
import '../tags.css';

class TagBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCloseIcon: false,
            isReadOnly: props.isReadOnly,
            borderColor: props.borderColor,
            borderColorHover: props.borderColorHover,
            backgroundColor: props.backgroundColor,
            backgroundColorHover: props.backgroundColorHover,
            fontSize: props.fontSize,
        };
        this.showCloseIcon = this.showCloseIcon.bind(this);
        this.hideCloseIcon = this.hideCloseIcon.bind(this);
        this.removeTagName = this.removeTagName.bind(this);
    }

    removeTagName(name) {
        // passing the value of tagName to it;s parent component Tag to remove it's value from array
        if (this.props.removeTag) {
            this.props.removeTag(name);
        }
    }

    showCloseIcon() {
        // Show cross icon
        this.setState({hovered : true});
        if (!this.state.isReadOnly) {
            this.setState({showCloseIcon: true});
        }
    }

    hideCloseIcon() {
        // Hide cross icon
        this.setState({showCloseIcon: false, hovered: false});
    }

    render() {
        const CSSVariable = {
            hoverBlock: {
                borderColor: this.props.borderColorHover,
                backgroundColor: this.props.backgroundColorHover
            },
            normalBlock: {
                borderColor: this.props.borderColor,
                backgroundColor: this.props.backgroundColor
            },
        };

        const _this = this;
        return (
            <div
                style = {this.state.hovered ? CSSVariable.hoverBlock : CSSVariable.normalBlock}
                className="rect-tag react-tag-border"
                onMouseEnter={_this.showCloseIcon}
                onMouseLeave={_this.hideCloseIcon}
                key={_this.props.idx}
            >
                <p className="rect-tag-name" style={{fontSize: this.props.fontSize}}>{_this.props.tagName}</p>
                {
                    (_this.state.showCloseIcon) ?
                        (<div
                            className="tag-close-btn"
                            onClick={() => _this.removeTagName(_this.props.tagName)}
                        >
                            <span className="tag-close-cross"/>
                        </div>)
                        :
                        ('')
                }
            </div>
        );
    }
}

export default TagBox;
