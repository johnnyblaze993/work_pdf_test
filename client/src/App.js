import "./App.css";

function App() {
	// pdf folder location: server/pdfs - All pdfs have been deleted from this folder for privacy.

	const filename = "1809_C2093_22.pdf"; //29 pages
	// const filename = "2009_E2065_22.pdf"; //55 pages
	// const filename = "2009_E2068_22.pdf"; //12 pages
	// const filename = "AX20MCB208AXJ31_007.pdf"; //22 pages
	// const filename = "AX20MEM215AXJ31_001.pdf"; //18 pages
	// const filename = "AX22MHB362AXJ31_291.pdf"; //9 pages
	// const filename = "NOSE LH MSH 039 SN 151522687.pdf"; //8 pages
	// const filename = "PQDR CLOSING MEM W81WCJ_20_0022 _M20H91125_.pdf"; //4 pages
	// const filename = "PQDR CLOSING MEMO W81WCJ_19_0055 _M19H92505_.pdf"; // 1 page
	// const filename = "PQDR CLOSING MEMO W81WCJ_22_0018 _M22H91285_.pdf"; // 2 pages

	const fetchHandler = async () => {
		const response = await fetch(`http://localhost:3000/pdf/${filename}`);
		if (!response.ok) {
			throw new Error("error!");
		}
		const pdfBlob = await response.blob();
		const pdfUrl = URL.createObjectURL(pdfBlob);
		window.open(pdfUrl);
	};

	return (
		<div className="App">
			<h1>PDF test</h1>
			<button onClick={fetchHandler}>Download PDF</button>
		</div>
	);
}

export default App;
