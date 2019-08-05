import { bind } from "classnames/bind";
import React = require("react");

import octocat = require("../assets/octocat.png");
import { Language } from "./Languages";
import styles = require("./Project.scss");

const cx = bind(styles);

interface IProps {
    title: string;
    description: React.ReactNode;
    githubLink?: string;
    language: Language;
    languages?: boolean[];
}

class Project extends React.Component<IProps, {}> {
    public constructor(props: IProps) {
        super(props);
    }

    public render() {
        const hidden = !this.props.languages[this.props.language.index];

        let githubLink = null;
        if (this.props.githubLink) {
            githubLink = (
                <div className={cx("img-container")}>
                    <a href={this.props.githubLink} target="_blank">
                        <img src={String(octocat)} />
                    </a>
                </div>
            );
        }

        const projectClassnames = [hidden ? "hidden" : null, "project"];
        return (
            <div className={cx(projectClassnames)}>
                <div className={this.props.githubLink && cx("text")}>
                    <h2>{this.props.title}</h2>
                    {this.props.description}
                    {`Language: ${this.props.language.displayName}`}
                </div>
                {githubLink}
            </div>
        );
    }
}

export { Project, IProps as ProjectProps };
