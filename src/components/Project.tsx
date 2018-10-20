import React = require("react");

const Project = (title: string, description: Node) => {
    return (
        <div>
            <h2>{title}</h2>
            {description}
        </div>
    );
};

export default Project;
