import { deleteTreasureRequest, respondTreasureRequest } from "../ApiManager";

export const Request = ({ requestObject, currentUser, listOpenRequests }) => {

    const confirmRequest = () => {
        return (
          <button
            onClick={closeRequestYes}
            className="request__delete">
            ✅
          </button>
        );
      };
    

    const denyRequest = () => {
        return (
          <button
            onClick={closeRequestNo}
            className="request__delete">
            🚫
          </button>
        );
      };
    
      const deleteRequest = () => {
        return (
            <button
            onClick={() => {
                deleteTreasureRequest(requestObject).then(() => {
                    listOpenRequests()
                    window.alert("This item is now available for others to request")
                })
            }}
            className="request__delete"
            > Delete From My List</button>
        )
    }
    
      const closeRequestYes = () => {
        const copy = {
          userId: requestObject.userId,
          treasureId: requestObject.treasureId,
          dateRequested: requestObject.dateRequested,
          dateReviewed: new Date(),
          itemApproval: "Approved",
        };
        respondTreasureRequest(requestObject, copy).then(listOpenRequests());
      };
    
      const closeRequestNo = () => {
        const copy = {
          userId: requestObject.userId,
          treasureId: requestObject.treasureId,
          dateRequested: requestObject.dateRequested,
          dateReviewed: new Date(),
          itemApproval: "Denied",
        };
        respondTreasureRequest(requestObject, copy)
        .then(() => {
            listOpenRequests()
        })
      };

    return (
    <section className="request" key={`request--${requestObject.id}`}>
            <div>{requestObject.treasure.name}</div>
            <img className="request__img" src={requestObject.treasure.photoLink}/>
            <div>Date Requested: {requestObject.dateRequested*1000}.toLocaleDateString()</div>
            <div>Item Status: {requestObject.itemApproval}</div>
            {currentUser.leader ? (<>
            <div>{confirmRequest()}</div> 
            <div>{denyRequest()}</div>
            </>)
             : deleteRequest()}
            </section>
    )
}