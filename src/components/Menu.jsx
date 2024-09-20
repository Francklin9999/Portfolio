export default function Menu(props) {
    const { onSectionChange, menuOpened, setMenuOpened } = props;
  
    return (
      <>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="menu-button"
        >
          <div className={`menu-bar ${menuOpened ? "bar-rotate45" : ""}`} />
          <div className={`menu-bar ${menuOpened ? "hidden" : ""}`} />
          <div className={`menu-bar ${menuOpened ? "bar-rotate-45" : ""}`} />
        </button>
        <div className={`menu-container ${menuOpened ? "menu-open" : "menu-closed"}`}>
          <div className="menu-content">
            <MenuButton label="About" onClick={() => onSectionChange(0)} />
            <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
            <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
            <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
          </div>
        </div>
      </>
    );
};
  
const MenuButton = (props) => {
const { label, onClick } = props;
return (
    <button
    onClick={onClick}
    className="menu-button-label"
    >
    {label}
    </button>
);
};
  