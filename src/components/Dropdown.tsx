import { bind } from "classnames/bind";
import React = require("react");

import styles = require("./Dropdown.scss");

const cx = bind(styles);

interface IState {
    clicked: boolean;
}

class Dropdown extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);

        this.state = { clicked: false };

        this.onClick = this.onClick.bind(this);
    }

    public onClick() {
        console.log("Mouse clicked");
        this.setState({ clicked: !this.state.clicked });
    }

    public render() {
        const contentClassnames = ["dropdown-content", this.state.clicked && "show"];
        return (
            <div className={cx("dropdown")} >
                <div onClick={this.onClick}>Hover or click me</div>
                <div className={cx(contentClassnames)}>
                    <input type="checkbox" />
                </div>
            </div>
        );
    }
}

export default Dropdown;
