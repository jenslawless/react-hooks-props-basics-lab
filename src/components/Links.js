import React from "react";

function Links({ linkedin, github }) {
    return (
        <div>
            <h3>Links
                <a href={github}>{github}</a>
                <a href={linkedin}>{linkedin}</a>
            </h3>
        </div>
    );
}

export default Links;