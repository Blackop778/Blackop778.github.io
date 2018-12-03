import { bind } from "classnames/bind";
import React = require("react");

import Checkbox from "./Checkbox";
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

    public onBoxChecked(index: number, newState: boolean) {
        const newLanguageState = this.state.languages;

        newLanguageState[index] = newState;

        this.setState({ languages: newLanguageState });
    }

    public render() {
        const children = React.Children.map(this.props.children, (child: React.ReactElement<ProjectProps>) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { languages: this.state.languages });
            }
        });

        const languageCheckboxes = Object.values(languages).map((language) => {
            return (
                <Checkbox
                    key={language.index}
                    checked={true}
                    label={language.displayName}
                    onChanged={this.onBoxChecked.bind(this, language.index)}
                />
            );
        });

        return (
            <div>
                <div className={cx("dropdown-container")} >
                    <Dropdown label="Shown Languages">
                        {languageCheckboxes}
                    </Dropdown>
                </div>
                {children}
            </div>
        );
    }
}

export default FilterDisplay;
