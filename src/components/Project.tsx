import { bind } from "classnames/bind";
import React = require("react");

import { Language, languages } from "./Languages";
import styles = require("./Project.scss");

const cx = bind(styles);

interface IProps {
    title: string;
    description: React.ReactNode;
    language: Language;
    languages?: boolean[];
}

class Project extends React.PureComponent<IProps, {}> {
    public language: Language;

    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        const hidden = !this.props.languages[this.props.language.index];
        return (
            <div className={hidden ? cx("hidden") : undefined}>
                <h2>{this.props.title}</h2>
                {this.props.description}
            </div>
        );
    }
}

export { Project, IProps as ProjectProps };
