import { Link } from "react-router-dom";
import image from "../../../images/879d0b50-health-news.avif";
function NewsItem({ item }) {
  // const navigate = useNavigate();
  const imageurl = item.urlToImage;
  //   const website = websiteUrl.split("https://").pop().split("/")[0];

  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", " ");

  return (
    <a href="" className="article">
      <div class="tooltip">
        <span class="tooltiptext">For More Info Click </span>
      </div>
      <div className="article-image">
        <img src={imageurl ? imageurl : image} alt={item.title} />
      </div>

      <div className="article-content">
        <a href={item.url} target="_blank" className="article-source-link">
          <div className="article-source">
            {/* <img src="" alt={item.source.id} /> */}
            <span className="article">{item.source.name}</span>
          </div>
        </a>

        <div className="article-title">
          <h2>{item.title}</h2>
        </div>
        <p className="article-description">{item.description}</p>
        <div className="article-details">
          <small>
            <b>Published At : </b>
            {formatTime}
          </small>
        </div>
      </div>
   
    </a>
  );
}

export default NewsItem;
