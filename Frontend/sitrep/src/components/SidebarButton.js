const SidebarButton = ({ButtonText, SidebarIcon, ShowText}) => {
    return (
        <div className="pb-3">
            <SidebarIcon className="h-100"/>
            {ShowText && <span className="pl-2">{ButtonText}</span>}
        </div>
    );
}
export default SidebarButton;