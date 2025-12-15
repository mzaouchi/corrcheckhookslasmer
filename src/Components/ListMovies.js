import CardMovie from "./CardMovie"

const ListMovies=({movies, fiTitle, njoum})=>{

    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(fiTitle.toUpperCase()) && el.rating >= njoum)
    return(
        <div className="divFlex">
            {

                x.length == 0 ?

                <h1>Not Found</h1>

                :

                x.map((el,i,t)=> <CardMovie el={el}/>)
            }
        </div>
    )
}

export default ListMovies