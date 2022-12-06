/** @format */

function AddActivity(props) {
  let { changeFunc, add, activity } = props;
  return (
    <form onSubmit={add} className="flex justify-center">
      <div className="actInputCnt">
        <input
          type="text"
          name="activity"
          onChange={changeFunc}
          className="addActNm"
        />
        <input type="submit" value="Add Activity" className="subBtn" />
      </div>
    </form>
  );
}

export default AddActivity;
