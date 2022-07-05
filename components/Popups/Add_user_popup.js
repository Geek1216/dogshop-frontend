import React from "react";
import { useState } from "react";
import "../../styles/admin_pages.scss";
import Edit_icon from "../../images/edit-ico.svg";

export const Add_user_popup = ({ setOpenModal }) => {
  return (
    <>
      <div className="popup-bg">
        <div className="add-user-popup p-5">
          <h3 className="text-center">Add User</h3>
          <h4>Groups</h4>

          <div className="add-user-radio">
            <input type="checkbox" id="Group1" />
            <label htmlFor="Group1">Group1</label>
            <img src={Edit_icon} alt="" />
            <hr />
          </div>

          <div className="add-user-radio">
            <input type="checkbox" id="Group2" />
            <label htmlFor="Group2">Group1</label>
            <img src={Edit_icon} alt="" />
            <hr />
          </div>

          <div className="add-user-radio">
            <input type="checkbox" id="Group3" />
            <label htmlFor="Group3">Group1</label>
            <img src={Edit_icon} alt="" />
            <hr />
          </div>

          <div className="add-user-radio">
            <input type="checkbox" id="Group4" />
            <label htmlFor="Group4">Group1</label>
            <img src={Edit_icon} alt="" />
            <hr />
          </div>

          <div className="add-user-radio">
            <input type="checkbox" id="Group5" />
            <label htmlFor="Group5">Group1</label>
            <img src={Edit_icon} alt="" />
            <hr />
          </div>

          <div className="pop-btn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="pop-cancle mx-2"
            >
              Cancle
            </button>
            <button className="pop-add mx-2">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};
