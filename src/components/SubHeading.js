import React from "react";
import groupIcon from "./images/group-icon.png";

function SubHeading() {
    return (
        <div class="sub-nav-frame d-flex justify-content-between align-items-center ">
            <ul class="nav-links-list p-0 ">
                <li className="activ-lis">All Posts(32)</li>
                <li className="d-none d-lg-block">Article</li>
                <li className="d-none d-lg-block">Event</li>
                <li className="d-none d-lg-block">Education</li>
                <li className="d-none d-lg-block">Job</li>
            </ul>
            <div class="button-frame d-flex gap-3 align-items-center side-nav">
                <div class="dropdown">
                    <button class="btn btn-secondary border-0 dropdown-toggle bg-EDE px-3 py-2 text-dark fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Write a Post
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="/">Action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Another action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Something else here</a>
                        </li>
                    </ul>
                </div>
                <button type="button" class="desk-flex btn btn-primary px-3 py-2 d-flex align-items-center justify-content-center gap-2">
                    <img src={groupIcon} alt="" className="d-none d-lg-inline"/>
                    Join Group
                </button>
            </div>
        </div>
    )
}

export default SubHeading;