import "./BittonBack.module.css";

function ButtonBack({ children }) {
    return (
        <button type="button" className="button">{children}</button>
    );
}

export { ButtonBack };