import React = require("react");

import FilterDisplay from "../components/FilterDisplay";
import { languages } from "../components/Languages";
import { Project } from "../components/Project";

const Portfolio = () => {
    return (
        <div>
            <h2>My Portfilio</h2>
            <FilterDisplay>
                <Project title="test1" description={<p>I'm a java project</p>} language={languages.JAVA} />
                <Project title="test2" description={<p>I'm a C++ project</p>} language={languages.CPP} />
            </FilterDisplay>
        </div>
    );
};

export default Portfolio;
