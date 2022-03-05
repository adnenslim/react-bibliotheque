const Home = () => {
    var books = [
        //ecrire les id {id1:1,Type"..",modele:".."}

    ];
    const listItems = books.map((books) =>
        <div> {books} </div>
    );
    return (
        <div>

            <div style={{ width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
                <input type="text" style={{ width: '100%' }} />
            </div>
            {/* list of books  */}
            <div style={{ width: "100%" }}>
                <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',marginTop:'20px'}}>
                    <div style={{ width: "20%", backgroundColor: 'brown' }}>
                        <img src="" alt="" style={{width:"100%"}}/>
                        <h1>titre</h1>
                        <h2>genre</h2>
                        <h3>description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur perspiciatis excepturi enim incidunt ullam nemo recusandae harum error. Commodi maiores voluptas nostrum molestias odit aut atque aliquid ea odio.</p>
                    </div>
                    <div style={{ width: "20%", backgroundColor: 'brown' }}>book2</div>
                    <div style={{ width: "20%", backgroundColor: 'brown' }}>book3</div>
                </div>
            </div>


        </div>

    );
}
export default Home;