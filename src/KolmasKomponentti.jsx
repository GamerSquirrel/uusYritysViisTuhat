import "./munCSS.css";

function KolmasKomponentti() {
    let jee = "yeehaw!!";
    let koe = 12312356789;

    return (
        <h4
            id="testi"
            style={{
                borderColor: "1px solid red",
                padding: "2rem",
            }}
        >
            {jee} {koe}
        </h4>
    );
}

export default KolmasKomponentti;
