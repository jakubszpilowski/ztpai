import React from "react";
import './AddModalComponent.css';
import {AddFormComponent} from "./AddFormComponent";

export const AddModalComponent = () => {
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-size">
                <div className="modal-content">
                    <div className="modal-header bg-color">
                        <h1 className="modal-title fs-5 app-font font-black" id="exampleModalLabel">Add recipe</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <AddFormComponent/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary app-font" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn bg-color app-font font-black">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}