import React from 'react';

const PageButtons = (props) => {

    return (
        <div>
            <button style={{
                "display": "inline-block",
                "backgroundColor": "red",
                "fontWeight": "bold",
                "marginRight": "10px",
                "marginBottom": "20px"
            }}
                    type="button" className="btn" onClick={props.handleShowMoreClick}>Show More
            </button>
            <a href="#top">
                <label>
                    <button style={{
                        "display": "inline-block",
                        "backgroundColor": "red",
                        "fontWeight": "bold",
                        "color": "white",
                        "position": "fixed",
                        "right": "50px",
                        "bottom": "30px",
                        "height": "100px",
                        "width": "100px",
                        "borderRadius": "50%"
                    }} type="button" className="btn">
                        <i className="fas fa-arrow-circle-up" style={{"fontSize": "50px", "marginTop": "22%"}}></i>
                    </button>
                </label>
            </a>
        </div>
    )
}

export default PageButtons;