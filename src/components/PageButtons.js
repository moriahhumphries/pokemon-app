import React from 'react';
import './../App.css';

const PageButtons = (props) => {

    return (
        <div>
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
                    }} type="button" className="btn button">
                        <i className="fas fa-arrow-circle-up" style={{"fontSize": "50px", "marginTop": "24%"}}></i>
                    </button>
                </label>
            </a>
        </div>
    )
}

export default PageButtons;