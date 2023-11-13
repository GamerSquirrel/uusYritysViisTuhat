import "./munCSS.css";

function KolmasKomponentti() {
    let jee = "yeehaw!!";
    let koe = 12312356789;
    let sorkintaa = "Taidanpas sorkkia hiukan tätä osiota..";
    return (
        <div>
            <h2 style={{ color: "hotpink" }}>{sorkintaa}</h2>
            <h4
                id="testi"
                style={{
                    borderColor: "1px solid red",
                    padding: "2rem",
                }}
            >
                {jee} {koe}
            </h4>
        </div>
    );
}

export default KolmasKomponentti;
