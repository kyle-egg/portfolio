function App() {
  return (
    <section className="body">
      <div>
        <section className="uk-section uk-background-fixed uk-background-center-center uk-height-full uk-width-full" id="backgroundimage">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="100.000000pt" height="100.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#d4af37" stroke="#000000">
              <path className="path" fill="#d4af37" stroke="#000000" strokeWidth="5"  d="M2375 5105 c-339 -75 -685 -358 -982 -805 -445 -667 -773 -1670 -773
-2359 0 -529 201 -1011 577 -1383 298 -296 664 -478 1089 -543 134 -20 414
-20 548 0 583 89 1076 414 1384 913 183 296 282 648 282 1007 0 775 -398 1896
-908 2555 -92 118 -270 300 -375 381 -157 122 -317 200 -480 235 -84 17 -280
17 -362 -1z m254 -315 c357 -47 732 -432 1056 -1085 196 -396 358 -867 434
-1265 87 -456 67 -785 -68 -1115 -166 -404 -518 -746 -921 -895 -199 -74 -366
-103 -580 -102 -430 1 -822 166 -1130 474 -244 243 -399 549 -455 898 -19 114
-21 343 -4 480 l12 99 51 22 c28 12 126 57 217 101 l166 80 100 -104 c55 -56
155 -162 224 -235 115 -123 125 -131 139 -114 8 9 152 214 319 455 l305 437
50 -49 c294 -280 427 -404 431 -400 7 7 -473 593 -488 595 -7 1 -151 -153
-322 -342 -170 -189 -313 -341 -316 -337 -4 4 -82 111 -174 237 -93 127 -169
232 -171 234 -2 2 -102 -30 -223 -72 l-219 -76 20 72 c237 843 651 1567 1063
1861 82 59 212 120 285 135 30 6 64 13 75 15 33 6 47 6 124 -4z"/>
            </g>
          </svg>
          <div className="uk-padding uk-section uk-height-large uk-background-cover uk-light">
          </div>
        </section>
        <section id="backgroundskills">
        </section>
        <section className="uk-section" id="about">
          <h2>About</h2>
          <p>I am a newly graduated Software Engineer having worked in previous roles in marketing in the hospitality industry.</p>
          <p>I made the switch in my career due to my interest in technology, my determination to learn and problem solve in the ever changing sector.</p>
          <p>With my previous experience in Marketing, I understand the importance of producing aesthetically pleasing, high quality work. In addition, the design skills I have developed during that time aids my ability to build and produce programmes with creative flair and a high quality user experience. </p>
        </section>
        <section>
          <h2>Skills</h2>
          <div className="uk-child-width-1-4 uk-child-width-1-6@s uk-grid-match uk-flex uk-flex-center@m uk-flex-wrap uk-flex-wrap-around uk-padding-large" uk-grid>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/html.png"/>
                <p className="uk-text-center">HTML</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/css.png"/>
                <p className="uk-text-center">CSS</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="data:image/png;base64,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"/>
                <p className="uk-text-center">SASS</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png"/>
                <p className="uk-text-center">JavaScript</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/html.png"/>
                <p className="uk-text-center">React</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/css.png"/>
                <p className="uk-text-center">Axios</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/sass.png"/>
                <p className="uk-text-center">JSON</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png"/>
                <p className="uk-text-center">Bootstrap</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png"/>
                <p className="uk-text-center">Bulma</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/html.png"/>
                <p className="uk-text-center">Python</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/css.png"/>
                <p className="uk-text-center">Django</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/sass.png"/>
                <p className="uk-text-center">Node</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png"/>
                <p className="uk-text-center">MongoDB</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/html.png"/>
                <p className="uk-text-center">Express</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/css.png"/>
                <p className="uk-text-center">PostgreSQL</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/sass.png"/>
                <p className="uk-text-center">Pipenv</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png"/>
                <p className="uk-text-center">Github</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/html.png"/>
                <p className="uk-text-center">Herokuapp</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/css.png"/>
                <p className="uk-text-center">Google Analytics</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/sass.png"/>
                <p className="uk-text-center">Photoshop</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png"/>
                <p className="uk-text-center">Illustrator</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/javascript--v1.png"/>
                <p className="uk-text-center">InDesign</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/html.png"/>
                <p className="uk-text-center">After Effects</p>
              </div>
            </div>
            <div className="uk-animation-toggle" tabIndex="0">
              <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
                <img src="https://img.icons8.com/ios/50/000000/css.png"/>
                <p className="uk-text-center">Premier Pro</p>
              </div>
            </div>
          </div>
        </section>
        <section className="uk-section">
          <div className="uk-padding">
            <h2>Experience</h2>
            <h3>Software Engineering Immersive Student</h3>
            <h3>General Assembly</h3>
            <h5>June - September 2021</h5>
            <p>Enrolled into a 3 month Software Engineering bootcamp, learning front-end, back-end and full-stack development and frameworks, creating a broad range of individual and team projects.</p>
          </div>
        </section>
        <section className="uk-section">
          <div className="uk-padding">
            <h2>Projects</h2>
            <div className="uk-padding">
              <h3>Craft Gin Shop</h3>
              <p>or the final project, I opted to work alone and created an e-commerce Craft Gin website, when tasked with the brief to create a full-stack Django and React application with CRUD functionality within one week.</p>
            </div>
            <div className="uk-padding">
              <h3>Binge</h3>
              <p>In a team of three, we collaborated to create a MERN application with CRUD functionality, using an Express API from a Mongo Database. We split the workload amongst ourselves, where I handled the majority of the front-end of the application. We created a Netflix-styled application to aid your choice of movie based on time, with ‘marathon’ and ‘sprint’ options. 
              </p>
            </div>
            <div className="uk-padding">
              <h3>Pub Quiz Generator</h3>
              <p>In a team of two and with only two days to create the project, my partner and I worked together via VS Code Live Share, where we were tasked to create a React application that consumed a public API and chose to create a Pub Quiz Generator.
              </p>
            </div>
            <div className="uk-padding">
              <h3>Hoover Invaders</h3>
              <p>My first project was to build a Space Invaders game using HTML, CSS and JavaScript in one week.</p>
            </div>
          </div>
        </section>
        <section className="uk-section">
          <h2>Interests</h2>
          <div className="uk-padding">
            <h3>Snowboarding</h3>
            <p>Try to go once a year, previous destinations include: Val d`Isère, St. Anton, Whistler and Verbier.
            </p>
          </div>
          <div className="uk-padding">
            <h3>Football</h3>
            <p>Played in every previous employer`s football team, taking part in yearly tournaments when organised. </p>
          </div>
        </section>
        <section className="uk-section">
          <h2>Contact</h2>
          <h4>Github</h4>
          <h4>Linkedin</h4>
          <h4>E-mail</h4>
        </section>
      </div>
    </section>
  )
}

export default App
