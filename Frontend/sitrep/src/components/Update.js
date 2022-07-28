const Update = ({update}) => {
    return (<div className="row">
            <p>{update.issue}</p>
                <p className="p-4">{update.time_ago} ago</p>
            <hr  className="rounded-circle" style={{width:"100%",border:"2px solid #343a40"}}></hr>
        </div>
)
}

export default Update;