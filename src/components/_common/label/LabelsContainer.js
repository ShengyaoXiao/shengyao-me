import React from 'react';
import Label from "./Label";

import "./labelsContainer.css";

const LabelsContainer = ({labels, activeLabels, onLabelClick, clearSelectedLabels, horizontal}) => {
    const className = horizontal ? "labels-container-horizontal" : "labels-container-vertical ";

    const parseToArray = labels => {
        const labelsArray = [];
        for(let label of labels) {
            labelsArray.push(label);
        }
        return labelsArray;
    }

    const labelsArray = parseToArray(labels);
    return (
        <div className={"labels-container text-unselectable "+className}> 
            <Label label="show all" selected={activeLabels.length === 0} onClick={clearSelectedLabels}/>
            {
                labelsArray.map(
                    label=> <Label label={label} isCommon={true} key={label} selected={activeLabels.includes(label)} onClick={onLabelClick} />
                )
            }
        </div>
    );
}

export default LabelsContainer;