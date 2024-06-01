// Custom Arrow Components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#4caf50", borderRadius: "50%", height: "30px", width: "30px" }}
            onClick={onClick}
        />
    );
}

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#4caf50", borderRadius: "50%", height: "30px", width: "30px" }}
            onClick={onClick}
        />
    );
}
