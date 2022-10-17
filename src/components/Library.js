import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import loading from "./4.gif";
import { useEffect, useState } from "react";

const Library = () => {
  const [location, setLocation] = useState("");
  const [books, setBooks] = useState([]);
  let [books2, setBooks2] = useState([]);
  const [trend, setTrend] = useState({});
  const [sports, setSports] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [health, setHealth] = useState([]);
  const [business, setBusiness] = useState([]);
  const weatherApi = `https://newsapi.org/docs/endpoints/everything`;

  useEffect(() => {
    document.getElementById("divLoading").classList.remove("hidden");
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=de713b26887d4c68a61209262645aa51`)
      .then((res) => res.json())
      .then((data) => {
        setTrend(data.articles[12])
        console.log(data);
        books2=[];
        for(let i=1;i<5;i++){
          books2.push(data.articles[i])
        }
        setBooks2(books2)
        setBooks(data.articles);
      });
      fetch(`https://newsapi.org/v2/everything?country=in&category=business&pageSize=3&apiKey=de713b26887d4c68a61209262645aa51`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBusiness(data.articles);
      });
      fetch(`https://newsapi.org/v2/everything?country=in&category=sports&pageSize=3&apiKey=de713b26887d4c68a61209262645aa51`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSports(data.articles);
      });
      fetch(`https://newsapi.org/v2/everything?country=in&category=health&pageSize=3&apiKey=de713b26887d4c68a61209262645aa51`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHealth(data.articles);
      });
      fetch(`https://newsapi.org/v2/everything?country=in&category=technology&pageSize=3&apiKey=de713b26887d4c68a61209262645aa51`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTechnology(data.articles);
        document.getElementById("divLoading").classList.add("hidden");
      });
  }, []);


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
            data.docs[
              i
            ].cover_img = `https://covers.openlibrary.org/b/id/${data.docs[i].cover_i}.jpg`;
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
        <div id="searchOuter">
          <div id="searchBar">
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
      <div id="detailsTrendingOuter">
      <h2 id="hTrending"> Trending</h2>
      <div id="detailsTrending">
        <a href={trend.url} target="_blank">
              <div className="trendingDetails" style={{"backgroundImage":`url(${trend.urlToImage})`}}>
                <div id="detailsText">
                  <p id="cityNameBig">{trend.title}</p>
                  <p id="cityTextBig">{trend.content === null ? "Click to find out more" : trend.content}</p>
                </div>
              </div>
            </a>
            <div id="trendingRightDiv">
        {books2.map((item, i) => {
          return (
            <div>
              <a key={i} href={item.url} target="_blank">
              <div className="trendingDetailsDiv" style={{"backgroundImage":`url(${item.urlToImage})`}}>
                <div id="detailsText">
                  <p id="cityNameSmall">{item.title}</p>
                </div>
              </div>
            </a>
            </div>
          );
        })}
        </div>
      </div>
      </div>
      <div id="categoryOuter">
      <h2>Technology</h2>
      <div id="categoryInner">
        {technology.map((item, i) => {
          return (
            <a key={i} href={item.url} target="_blank">
              <div id="weatherDeatils" style={{"backgroundImage":`url(${item.urlToImage})`}}>
                <div id="detailsText">
                  <p id="cityName">{item.title}</p>
                  <p id="cityText">{item.content === null ? "Click to find out more" : String(item.content).slice(0,90)}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      </div>
      <div id="categoryOuter">
      <h2>Business</h2>
        <div id="categoryInner">
        {business.map((item, i) => {
          return (
            <a key={i} href={item.url} target="_blank">
              <div id="weatherDeatils" style={{"backgroundImage":`url(${item.urlToImage})`}}>
                <div id="detailsText">
                  <p id="cityName">{item.title}</p>
                  <p id="cityText">{item.content === null ? "Click to find out more" : String(item.content).slice(0,90)}</p>
                </div>
              </div>
            </a>
          );
        })}
        </div>
      </div>
      <div id="categoryOuter">
      <h2>Health</h2>
        <div id="categoryInner">
        {health.map((item, i) => {
          return (
            <a key={i} href={item.url} target="_blank">
              <div id="weatherDeatils" style={{"backgroundImage":`url(${item.urlToImage})`}}>
                <div id="detailsText">
                  <p id="cityName">{item.title}</p>
                  <p id="cityText">{item.content === null ? "Click to find out more" : String(item.content).slice(0,90)}</p>
                </div>
              </div>
            </a>
          );
        })}
        </div>
      </div>
      <div id="categoryOuter">
      <h2>Sports</h2>
        <div id="categoryInner">
        {sports.map((item, i) => {
          return (
            <a key={i} href={item.url} target="_blank">
              <div id="weatherDeatils" style={{"backgroundImage":`url(${item.urlToImage})`}}>
                <div id="detailsText">
                  <p id="cityName">{item.title}</p>
                  <p id="cityText">{item.content === null ? "Click to find out more" : String(item.content).slice(0,90)}</p>
                </div>
              </div>
            </a>
          );
        })}
        </div>
      </div>
      <div id="detailsOuter">
        <h2>All</h2>
        <div id="detailsInner">
        {books.map((item, i) => {
          return (
            <a key={i} href={item.url} target="_blank">
              <div id="weatherDeatils" style={{"backgroundImage":`url(${item.urlToImage})`}}>
                <div id="detailsText">
                  <p id="cityName">{item.title}</p>
                  <p id="cityText">{item.content === null ? "Click to find out more" : String(item.content).slice(0,90)}</p>
                </div>
              </div>
            </a>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Library;
