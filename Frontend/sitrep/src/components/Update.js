const Update = ({update}) => {
    return (<div className="row">
            <p>{update.issue}</p>
                <p className="p-4">{update.time_ago} ago</p>
            <hr className="border-top border-dark"></hr>
        </div>
)
}

export default Update;