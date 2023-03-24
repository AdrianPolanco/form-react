let textState = "";

const Estado = ({ state }) => {
    state ? (textState = "Online") : (textState = "Offline");
    return (
        <span className={`estado ${textState.toLowerCase()}`}>{textState}</span>
    );
};

export default Estado;
