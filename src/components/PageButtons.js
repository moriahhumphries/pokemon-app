import React from 'react';
import './../App.css';

const PageButtons = (props) => {

    return (
        <div>
            <button style={{
                "display": "inline-block",
                "backgroundColor": "red",
                "fontWeight": "bold",
                "marginLeft": "5px",
                "marginBottom": "20px"
            }}
                    type="button" className="btn button" onClick={props.handleShowMoreClick}>Show More
            </button>
            <a href="#top">
                <label>
                    <button style={{
                        "display": "inline-block",
                        "backgroundColor": "red",
                        "fontWeight": "bold",
                        "color": "white",
                        "position": "fixed",
                        "right": "15px",
                        "bottom": "10px",
                        "height": "80px",
                        "width": "80px",
                        "borderRadius": "50%"
                    }} type="button" className="btn">
                        <i className="fas fa-arrow-circle-up" style={{"fontSize": "50px", "marginTop": "24%"}}></i>
                    </button>
                </label>
            </a>
        </div>
    )
}

export default PageButtons;