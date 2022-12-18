import { useRef, UIEvent, KeyboardEvent  } from "react";
import shallowEqual from "shallowequal";

type Props = {
    onChange: Function | null;
} & React.HTMLProps<HTMLSpanElement>;

export default function CalValue(props: Props) {
    const elem = useRef(null);
    const { onChange } = props;

    const keyDown = (event: KeyboardEvent<HTMLElement>) => {
        const ENTER = 13;

        if (event.keyCode === ENTER) {
            event.preventDefault();
            emitChange(event);
        }
    };
    

  const emitChange = (event: UIEvent) => {
    if (!elem || !elem.current) {
        return;
    }
    var value = elem.current.innerHTML;

    if(onChange && value !== this.props.value.toString()) {
      event.target = { value: value };
      this.props.onChange(event);
    }
  }

    return (
        <span
          className="editable"
          {...props}
          ref={elem}
          onKeyDown={keyDown}
          onBlur={emitChange}
          contentEditable={!this.props.disabled}
          dangerouslySetInnerHTML={{__html: this.props.value}}></span>
      );
}

class CalValue extends Component {
  constructor(props) {
    super(props);
    this.emitChange = this.emitChange.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  render() {
    return (
      <span
        className="editable"
        {...this.props}
        onKeyDown={this.keyDown}
        onBlur={this.emitChange}
        contentEditable={!this.props.disabled}
        dangerouslySetInnerHTML={{__html: this.props.value}}></span>
    );
  }

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(this.props, nextProps);
  }

  componentDidUpdate() {
    if(this.props.value !== React.findDOMNode(this).innerHTML) {
      React.findDOMNode(this).innerHTML = this.props.value;
    }
  }

  emitChange(event) {
    var value = React.findDOMNode(this).innerHTML;

    if(this.props.onChange && value !== this.props.value.toString()) {
      event.target = { value: value };
      this.props.onChange(event);
    }
  }
}
