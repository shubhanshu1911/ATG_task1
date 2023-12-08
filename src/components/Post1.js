import React from "react";
import share from "./images/share.png"
import Dropdown from "./Dropdown"

function Post1(props) {
    return (
        <div className="card" style={{ width: "68%" }}>
            <img src={props.image} className="card-img-top" alt="..." />
            <p style={{ padding: '2px 10px' }}>{props.type}</p>
            <div className="card-body " style={{ paddingTop: '0' }} >
                <h5 className="card-title">{props.title}</h5>
                <span><Dropdown /></span>
                <p className="card-text">{props.text}</p>
                <div className="post_footer">
                    <div className="left">
                    <img src={props.person_img} alt="hey" />
                        <p style={{ marginBottom: '0' }}>{props.name}</p>
                    </div>
                    <div className="right">
                        <p style={{ marginBottom: '0' }}>1.4k views</p>
                        <img src={share} alt="hey" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Post1;
