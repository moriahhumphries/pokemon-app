import React from 'react';

const PageButtons = (props) => {

    return (
        <div>
            <button style={{
                "display": "inline-block",
                "backgroundColor": "red",
                "fontWeight": "bold",
                "marginRight": "10px",
                "marginBottom" : "20px"
            }}
                    type="button" className="btn" onClick={props.handleShowMoreClick}>Show More
            </button>
            <a href="#top">
                <button style={{
                    "display": "inline-block",
                    "backgroundColor": "red",
                    "fontWeight": "bold",
                    "color": "white",
                    "marginBottom" : "20px"
                }} type="button" className="btn"> Return to top
                </button>
            </a>
        </div>
    )
}

export default PageButtons;