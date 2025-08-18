import React from "react";
import "./Activities.css";
import { AcitivityData } from "../Activity/ActivityData";
import Activity from "../Activity/Activity";

function Activities() {
  return (
    <div className="Activities">
      <h3>Recent Activities:</h3>
      
      {AcitivityData.map((activity, id) => {
        return (
          <div className="ActivityParentContainer" key={id}>
            <Activity
              profileImg={activity.profileImg}
              username={activity.username}
              action={activity.action}
              time={activity.time}
            />
          </div>
        );
      })}

    </div>
  );
}

export default Activities;
