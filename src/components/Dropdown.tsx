import { bind } from "classnames/bind";
import React = require("react");

import styles = require("./Dropdown.scss");

const cx = bind(styles);

interface IProps {
    label: string;
    children: JSX.Element | JSX.Element[];
}

interface IState {
    clicked: boolean;
}

class Dropdown extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = { clicked: false };

        this.onClick = this.onClick.bind(this);
    }

    public onClick() {
        this.setState({ clicked: !this.state.clicked });
    }

    public render() {
        const contentClassnames = ["dropdown-content", this.state.clicked && "show"];
        return (
            <div className={cx("dropdown")}>
                <button onClick={this.onClick} className={cx("dropdown-button")}>{this.props.label}</button>
                <div className={cx(contentClassnames)}>
                    {React.Children.toArray(this.props.children)}
                </div>
            </div>
        );
    }
}

export default Dropdown;
