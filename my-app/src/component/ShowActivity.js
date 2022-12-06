/** @format */

function ShowActivity(props) {
  let { AddActivity, active, deleteActivity } = props;
  // console.log(AddActivity, `show`);
  let days = AddActivity.map(a => a.days);

  let allDay = [];
  for (let i = 1; i <= days[0]; i++) {
    allDay.push(i);
  }

  return (
    <ul className="">
      {AddActivity.map((a, i) => {
        return (
          <li
            key={a.activity + `` + i}
            className="activityBx flex  border justify-between"
          >
            <ul className="border flex-25 flex activityNm  flex-direction-column align-center justify-center ">
              <span className="activityName">{a.activity}</span> <br />
              <span className="activityMonth">{a.month}</span>
            </ul>
            <ul className="dayCnt flex flex-70  flex-wrap-yes  gap align-center align-content-center">
              {allDay.map(d => {
                return (
                  <li
                    key={d}
                    onClick={() => active(a.activity, d)}
                    className={
                      a.activeDays.includes(d)
                        ? `active day flex   align-center justify-center `
                        : `day flex   align-center justify-center `
                    }
                  >
                    {d}
                  </li>
                );
              })}
            </ul>

            <span
              className="closeBtn flex   align-center justify-center"
              onClick={() => deleteActivity(a)}
            >
              ❌
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default ShowActivity;
