const Navbar = () => {
    return (
        <div >
            <ul style={{
                listStyleType: "none",
                margin: 50,
                padding: 0,
                overflow: "hidden",
                opacity:0.9
            }}>


                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>

                <p><b>Note:</b> welcome to our online library</p>
        </div>

            );
}
            export default Navbar;