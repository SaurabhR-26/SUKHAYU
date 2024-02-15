import * as React from "react";
// import * as PopoverPrimitive from "@radix-ui/react-popover";

// import { cn } from "@/lib/utils";

import "./emergency.css";
export default function emergency() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          {/* <h3 onClick></h3> */}

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

          <div className="d-grid">
            <button type="add" className="btn btn-primary">
              Add
            </button>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
