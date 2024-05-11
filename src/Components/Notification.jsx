import React from "react";
import { notificationImages } from "../Constants";

export const Notification = ({ className, title }) => {
  return (
    <div
      className={`${className || ""} flex items-center pr-6 p-4
   bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1">
        <h6 className="mb-1 font-semibold justify-between">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5 ">
            {notificationImages.map((item, index) => {
              <li key={index}>
                <img
                  src={item}
                  width={20}
                  height={20}
                  className="w-full"
                  alt=""
                />
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
