const SidebarButton = ({ SidebarIcon, ButtonText }) => {
    return (
        <div>
            <SidebarIcon />
            <p className="btn btn-primary">{ButtonText}</p>
        </div>
    );
}
export default SidebarButton;