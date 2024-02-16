import * as React from "react";
// import * as PopoverPrimitive from "@radix-ui/react-popover";

import { useEffect, useState } from "react";
import axios from "axios";
import "./emergency.css";
export default function Emergency() {
  const [add, setAdd] = useState("");
  // `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())
        // .then((data) => setAdd(data.address));
        .then((data) => setAdd(data.display_name));
      console.log(url);
    });
  }, []);
  console.log(add, "sfsfh");

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Emergency</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input type="phone" className="form-control" placeholder="" />
          </div>
          <div className="p-1 pl-5">
            {/* <p>road : {add.road}</p>
            <p>city : {add.city}</p>
            <p>country :{add.country}</p> */}
            <h5>Your Current Location :</h5>
            <p className="rounded-xl border border-solid border-black">{add}</p>
          </div>

          <div className="d-grid mb-3 w-1">
            <button type="add" className="btn btn-secondary" onClick="">
              Add
            </button>
          </div>

          {/* <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Save
          </Button> */}
          <div className="d-grid mb-3 w-1">
            <button type="add" className="btn bg-primary text-white" onClick="">
              Save
            </button>
            {/* <Toaster /> */}
          </div>
        </form>
      </div>
    </div>
  );
}
