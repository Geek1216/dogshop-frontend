import React from "react";
import "../../styles/footer.scss";
import footer from "../../images/admin-footer.png";
import f_dog from "../../images/f-dog.png";

const Admin_footer = () => {
  return (
    <>
      <div className="admin-footer">
        <img src={footer}></img>
        <div className="ad-mob-footer">
          <img src={f_dog} alt="" />
          <p>© 2022, Paw Pack Japan </p>
        </div>
      </div>
    </>
  );
};

export default Admin_footer;
