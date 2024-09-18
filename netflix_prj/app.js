let movies=
[
    {
        name:"Stranger things",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKu0FsmjKVMIisF2ALtMaANdeCJWaNBbnlA&s",
        rating:10
    },
    {
        name:"Jumanji",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJALX71JwANVw87_6b1RhTwDBQ5tvuJxg4w&s",
        rating:9.2
    },
    {
        name:"Venom",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-0oNe5A4hmea4ZmQ92OHBfEwQzkqxk3I9A&s",
        rating:7.0
    },
    {
        name:"DeadPool",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPTU59Y8zBkKd5MFStMQcIqFXb4Ne4XUb9Q&s",
        rating:9.0
    },
    {
        name:"Titanic",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20zO6zLZKX3wdhHtvImR97spXXqt3mzuiVQ&s",
        rating:7.5
    }

]

function searchmovie()
{
    var inp=document.querySelector(".search-box").value;
    console.log( inp)
}

function displayMovie()
{
    // let moviediv=document.createElement("div")
    // moviediv.classList.add("movie")
    // let overlaydiv=document.createElement("div")
    // overlaydiv.classList.add("overlay")
    // moviediv.appendChild(overlaydiv)  //letting overlay inside the movie div
    // console.log(moviediv)

    //another way

    let htmlString=``

    for (let i=0;i<movies.length;i++)
    {
        htmlString=htmlString+`
        
         <div class="movie">
            <div class="overlay">
                 <div class="video">

                 </div>
                 <div class="details">
                    <h1>${movies[i].name}</h1>
                    <h2>IMDB:${movies[i].rating}</h2>
                    <p>Eleven . Sid . Demon</p>
                 </div>
            </div>
            <img class="ST" src="${movies[i].poster}" alt="ST poster">
        </div>
        `
    }
    let dis=document.querySelector(".movies")
    dis.innerHTML=htmlString
}

displayMovie()