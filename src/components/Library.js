import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import loading from "./4.gif";
import { useEffect, useState } from "react";

const Library = () => {
  const [location, setLocation] = useState("");
  const [books, setBooks] = useState([]);
  let weatherApi = `https://openlibrary.org/search.json?q=${location}&mode=ebooks&has_fulltext=true`;
  
  useEffect(()=>{
    document.getElementById("divLoading").classList.remove("hidden");
    fetch(`https://openlibrary.org/search.json?q=fantastic&mode=ebooks&has_fulltext=true&limit=30`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.docs.length; i++) {
        data.docs[i].cover_img = `https://covers.openlibrary.org/b/id/${data.docs[i].cover_i}.jpg`;
        data.docs[i].key = `https://openlibrary.org${data.docs[i].key}`;
      }
      setBooks(data.docs);
      document.getElementById("divLoading").classList.add("hidden");
    });
  },[])
  const changeHandler = (e) => {
    setLocation(e.target.value);
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      document.getElementById("divLoading").classList.remove("hidden");
      fetch(weatherApi)
        .then((res) => res.json())
        .then((data) => {
          for (let i = 0; i < data.docs.length; i++) {
            data.docs[i].cover_img = `https://covers.openlibrary.org/b/id/${data.docs[i].cover_i}.jpg`;
            data.docs[i].key = `https://openlibrary.org${data.docs[i].key}`;
          }
          setBooks(data.docs);
          document.getElementById("divLoading").classList.add("hidden");
        });
    }
  };
    return (
      <>
      <div id="navBar">
            <MenuBookIcon /> <pre> Library</pre>{" "}
            <div id="searchOuter"><div id="searchBar">
              <SearchIcon />
              <input
                onChange={changeHandler}
                onKeyDown={enterSearch}
                placeholder="Search for your favourite book"
              />
            </div>
            <div id="divLoading" className="hidden">
              Loading <img src={loading} />
            </div>
            </div>
          </div>
        <div id="detailsOuter">
          {books.map((item, i) => {
            return (
              <a key={i} href={item.key} target="_blank">
                <div id="weatherDeatils">
                  <p id="cityName">{item.title}</p>
                  <p id="cityRegion">
                    by{" "}
                    {item.author_name === undefined
                      ? "unknown"
                      : item.author_name[0]}
                  </p>
                  <img alt="Image not available" src={item.cover_img} />
                  <p id="cityText">{item.cover_edition_key}</p>
                </div>
              </a>
            );
          })}
        </div>
      </>
    );
};

export default Library;
