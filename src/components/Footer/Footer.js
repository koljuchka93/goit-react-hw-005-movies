import Container from "../Container/Container";
import "./Footer.module.css";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-bg">
                    <div className="copyright">
                        <p>&copy; by koljuchka93</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export { Footer };