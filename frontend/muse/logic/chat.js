const eventFormat = (
  { Name, Location, Phone, Date, Wage, currentMessageStatus },
  { side, style, i },
  isMusician,
  handleShowModal,
  isLastestEvent,
  setStatus
) => {
  return (
    <div className={`d-flex flex-row justify-content-${side} mb-4`}>
      <div className="p-3 ms-3" style={style}>
        <div key={`message_${i}`} className="small mb-0">
          <p className="mb-0">{Name}</p>
          {Location !== "undefined" && <p className="mb-0">{Location}</p>}
          <p className="mb-0">{Phone}</p>
          <p className="mb-0">{Date}</p>
          <p className="mb-0">{Wage} bath</p>
          {isLastestEvent && isMusician && currentMessageStatus !== "CANCELLED" && (
            <span>
              <button
                className="mx-3 mt-2 button-edit-acep"
                onClick={() => setStatus("ACCEPT")}>
                Accept
              </button>
              <button
                className="mx-3 mt-2 button-can-dec"
                onClick={() => setStatus("DECLINE")}>
                Decline
              </button>
            </span>
          )}
          {isLastestEvent && !isMusician && currentMessageStatus !== "CANCELLED" && (
            <div className="edit-cancle">
              <button
                className="mx-3 mt-2 button-edit-acep"
                onClick={() => handleShowModal({ Name, Wage })}>
                Edit
              </button>
              <button
                className="mx-3 mt-2 button-can-dec"
                onClick={() => setStatus("CANCELLED")}>
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const haveSide = (user, sender) => {
  if (sender === user._id) {
    return {
      side: "end",
      style: {
        borderRadius: "15px",
        backgroundColor: "rgba(57, 192, 237,.2)",
      },
    };
  }
  return {
    side: "start",
    style: {
      borderRadius: "15px",
      backgroundColor: "#90EE90",
    },
  };
};

module.exports = { eventFormat, haveSide };
