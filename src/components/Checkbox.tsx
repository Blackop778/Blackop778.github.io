import { bind } from "classnames/bind";
import React = require("react");

import styles = require("./Checkbox.scss");

const cx = bind(styles);

interface IProps {
    checked: boolean;
    label: string;
    onChanged: (newState: boolean) => {};
}

interface IState {
    checked: boolean;
}

class Checkbox extends React.Component<IProps, IState> {
    public constructor(props: any) {
        super(props);

        this.state = { checked: props.checked };

        this.onCheckboxClicked = this.onCheckboxClicked.bind(this);
    }

    public onCheckboxClicked() {
        this.props.onChanged(!this.state.checked);
        this.setState({ checked: !this.state.checked });
    }

    public render() {
        const checkboxClassnames = ["checkbox", this.state.checked && "checked"];
        return (
            <div className={cx("checkbox-container")}>
                <div className={cx(checkboxClassnames)} onClick={this.onCheckboxClicked} />
                <span className={cx("checkbox-text")}>{this.props.label}</span>
            </div>
        );
    }
}

export default Checkbox;
