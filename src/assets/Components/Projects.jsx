import React from 'react'
import './Projects.css';

export const Projects = () => {
  return (
    <div id='projects' className="container" style={{marginTop:"100px"}}>
      <a className="latest-w" style={{margin:"50px",color: 'white',display:"flex",justifyContent: 'center',alignItems: 'center',fontWeight:"bold",borderBottom:"2px solid rgb(15, 105, 169)",textDecoration:"none"}}>Latest Works</a>
      <div className="project1">
        <div className="left-one">
        <a href="https://delightful-bublanina-fc1972.netlify.app/" style={{textDecoration:"none", color:"black"}}><img src="./movieapp.jpeg" height="300px" minWidth="200px" border="10px solid "></img></a>
        </div>
        <div className="right-one" style={{marginLeft:"40px"}}>
          <h1>Movie-App</h1>
          <p>Movie-App displays the movies released till date by fetching API.This app streams trailers from youtube aslo users can create their favourite list of movies by searching them.</p>
          <div className="techs" style={{display:"flex"}}>
            <a>#React.js</a>
            <a>#JavaScript</a>
            <a>#CSS</a>
            <a>#Bootstrap</a>
          </div>
          <div className="code" style={{display:"flex",gap:"20px"}}>
            <a href="https://delightful-bublanina-fc1972.netlify.app/"><button>Live</button></a>
            <a href="https://github.com/paulkrishanu4/Movie-App?tab=readme-ov-file"><button>Code</button></a>
          </div>
        </div>
      </div>
      <div className="project1">
        <div className="right-one">
          <h1>Booking.com</h1>
          <h5>(Property booking site)</h5>
          <p>Booking.com is a booking site used for booking properties like hotels,resorts,etc across multiple locations.Built the complete site from scratch.</p>
          <div className="techs" style={{display:"flex"}}>
            <a>#React.js</a>
            <a>#JavaScript</a>
            <a>#CSS</a>
            <a>#Bootstrap</a>
            <a>#Auth0</a>
          </div>
          <div className="code" style={{display:"flex",gap:"20px"}}>
            <a href="https://stalwart-peony-6a5287.netlify.app"><button>Live</button></a>
            <a href="https://github.com/paulkrishanu4/Hotel_booking_site"><button>Code</button></a>
          </div>
        </div>
        <div className="left-one">
          <a href="https://stalwart-peony-6a5287.netlify.app" style={{textDecoration:"none", color:"black"}}><img src="./booking.com.jpeg" height="300px" minWidth="200px" border="10px solid "></img></a>
        </div>
      </div>
      <div className="project1">
        <div className="left-one">
        <a href="https://paulkrishanu4.github.io/NewsSite/" style={{textDecoration:"none", color:"black"}}><img src="./newsapp.jpeg" height="300px" minWidth="200px" border="10px solid "></img></a>
        </div>
        <div className="right-one" style={{marginLeft:"40px"}}>
          <h1>News-App</h1>
          <p>News app displays the live news by fetching the data from api. Users can find news by categories and also search news by keywords additionally they can also listen the news headlines bt clicking listen button.</p>
          <div className="techs" style={{display:"flex"}}>
            <a>#React.js</a>
            <a>#JavaScript</a>
            <a>#CSS</a>
            <a>#Bootstrap</a>
          </div>
          <div className="code" style={{display:"flex",gap:"20px"}}>
            <a href="https://paulkrishanu4.github.io/NewsSite/"><button>Live</button></a>
            <a href="https://github.com/paulkrishanu4/NewsSite"><button>Code</button></a>
          </div>
        </div>
      </div>
      <div className="project1">
        <div className="right-one">
          <h1>Weather App</h1>
          <p>Its a simple weather app that displays the data of the weather of input location.Inbuilt voice support is aslo there to describe the weather.</p>
          <div className="techs" style={{display:"flex"}}>
            <a>#JavaScript</a>
            <a>#CSS</a>
            <a>#HTML5</a>
          </div>
          <div className="code" style={{display:"flex",gap:"20px"}}>
            <a href="https://krishanupaul4.github.io/Weather-App-2.0/"><button>Live</button></a>
            <a href="https://github.com/paulkrishanu4/Weather-App-2.0"><button>Code</button></a>
          </div>
        </div>
        <div className="left-one">
        <a href="https://krishanupaul4.github.io/Weather-App-2.0/" style={{textDecoration:"none", color:"black"}}><img src="./weatherapp.jpeg" height="300px" minWidth="200px" border="10px solid "></img></a>
        </div>
      </div>
      <div className="project1">
        <div className="left-one">
        <a href=" https://subtle-travesseiro-1bd2fa.netlify.app/" style={{textDecoration:"none", color:"black"}}><img src="./cafepage.jpeg" height="300px" minWidth="200px" border="10px solid "></img></a>
        </div>
        <div className="right-one" style={{marginLeft:"40px"}}>
          <h1>Cafe Landing Page</h1>
          <p>A responsive and visually appealing landing page of a local cafe developed to enhance the cafe's online presence and improve customer engagement.</p>
          <div className="techs" style={{display:"flex"}}>
          <a>#React.js</a>
            <a>#JavaScript</a>
            <a>#CSS</a>
            <a>#HTML5</a>
            <a>#Bootstrap</a>
          </div>
          <div className="code" style={{display:"flex",gap:"20px"}}>
            <a href="https://subtle-travesseiro-1bd2fa.netlify.app/"><button>Live</button></a>
            <a href="https://github.com/paulkrishanu4/Cafe-Landing-Site"><button>Code</button></a>
          </div>
        </div>
      </div>
      

    </div>
  )
}
