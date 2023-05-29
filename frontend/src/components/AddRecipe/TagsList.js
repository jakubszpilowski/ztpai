import './TagsList.css';
import React from "react";

export const TagsList = ({tags, onDeleteTag}) => {
    const handleDeleteTag = (index) => {
        onDeleteTag(index);
    }

    return (
        <div className="list-of-tags-div">Tags:
            <ul className="list-of-tags">
                {tags.map((tag, index) => (
                    <li className="tag-li" key={index} onClick={(e) => handleDeleteTag(index)}>
                        <span className="tag-span">{tag}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}