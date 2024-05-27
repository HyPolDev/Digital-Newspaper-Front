import "./UserPanel.css"
export const UserPanel = ({ profile }) => {

    return (
        <>
            <div className="row-12 centre flex">

                <div className="col-2">
                    {profile.userName}
                </div>
                <div className="col-2">
                    {profile.email}
                </div>
                <div className="col-2">
                    {profile.role}
                </div>


            </div>
        </>
    )
}