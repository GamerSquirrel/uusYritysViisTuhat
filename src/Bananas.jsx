import KolmasKomponentti from "./KolmasKomponentti";

function pienellä() {
    return "oon perus funktio";
}

function Isolla() {
    return <h1>iso komponentti</h1>;
}

const TokaKomponentti = () => {
    let jotain = "jotain juttuja";

    return (
        <>
            jeejeejee
            {jotain}
            joojoojoo
        </>
    );
};

function Banaani() {
    return (
        <>
            <Isolla />
            <TokaKomponentti />
            <KolmasKomponentti />
        </>
    );
}

export default Banaani;
