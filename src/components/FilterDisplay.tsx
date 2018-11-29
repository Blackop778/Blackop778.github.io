import { bind } from "classnames/bind";
import React = require("react");

import Dropdown from "./Dropdown";
import styles = require("./FilterDisplay.scss");
import { languages } from "./Languages";
import { ProjectProps } from "./Project";

const cx = bind(styles);

interface IProps {
    children: JSX.Element | JSX.Element[];
}

interface IState {
    languages: boolean[];
}

class FilterDisplay extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        const languageStates: boolean[] = new Array(Object.keys(languages).length);
        languageStates.fill(true);

        this.state = { languages: languageStates };
    }

    public render() {
        const children = React.Children.map(this.props.children, (child: React.ReactElement<ProjectProps>) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { languages: this.state.languages });
            }
        });

        return (
            <div>
                <Dropdown />
                {children}
            </div>
        );
    }
}

export default FilterDisplay;
