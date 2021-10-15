// Dummy data placeholder. Replace with array of actual data objects to come from Airtable 
const data = [
  {
    "project": "Sign Language Translation",
    "stack": [["python", "fab fa-python"], ["tensorflow", "fas fa-code-branch"]],
    "description": "Worked with a team to  introduced a novel architecture called Multi Context Transformer which is an extension of Transformers with focus on increasing context specific features to perform the task of SLT.",
    "github": "https://github.com/MBadriNarayanan/MultiContextTransformer",
    "image": "img/projects/asl.jpg",
    "status": "Completed - 2021"
  },
  {
    "project": "Tweet Sentiment Classification",
    "stack":  [["python", "fab fa-python"], ["tensorflow", "fas fa-code-branch"]],
    "description": "Classifying the sentiment of tweets into 5 classes using various transformer architectures. Final Assessment for Natural Language Processing Course by Dr Sowmya Sundaram.",
    "github": "https://github.com/MaheshBharadwaj/TweetSentimentClassification",
    "image": "img/projects/tweet.jpg",
    "status": "Completed - 2021"
  },
  {
    "project": "Paneka - Discord Bot",
    "stack": [["python", "fab fa-python"], ["discord-py", "fab fa-discord"]],
    "description": "Displays real-time standings and fixtures of major teams and leagues in the world of football",
    "github": "https://www.github.com/MaheshBharadwaj/paneka",
    "image": "img/projects/bot.png",
    "status": "Completed - 2020"
  },
 
  {
    "project": "Personal Website",
    "stack": [["HTML", "fab fa-html5"], ["CSS", "fab fa-css3-alt"], ["javascript","fab fa-js-square"]],
    "description": "Source code for this website written using HTML5, CSS3 and hosted using GitHub pages",
    "github": "https://www.github.com/MaheshBharadwaj/mahesbharadwaj.github.io",
    "image": "img/projects/website.png",
    "status": "Live"
  },
  {
    "project": "Linux Admin Basics",
    "stack": [["bash", "fas fa-terminal"], ["latex","far fa-file-pdf"]],
    "description": "Documentation covering the basics and advanced details required to become a Linux System Administrator",
    "github": "https://www.github.com/MaheshBharadwaj/LinuxAdmin",
    "image": "img/projects/shell.jpg",
    "status": "Constantly Updated"
  },

  {
    "project": "Sudoku Solver",
    "stack": [["python", "fab fa-python"], ["tensorflow", "fas fa-code-branch"]],
    "description": "Extract sudoku from images using ConvNets after pre-processsing using OpenCV, allows user to solve the extracted sudoku or view the solution",
    "github": "https://www.github.com/MaheshBharadwaj/Sudoku",
    "image": "img/projects/sudoku.jpg",
    "status": "Completed-2020"
  }
 ];

function Layout(props){
  return(
      <div>
        <div className="row">
         {props.children}
         </div>
        </div>
    )
}
 
class Card extends React.Component {
  render(){
    const style = {
      img: {
        maxWidth: "400px"
      }
    }
    return(
      <div className="col m4">
        <div className="card hoverable">
          <div className="card-image waves-effect waves-block waves-light">
            <img style={style.img} className="activator" src={this.props.data.image}/>
          </div>
          <div className="card-content">
            <div>
              <StackIcons data={this.props.data.stack}/>
            </div>
            <span className="card-title activator grey-text text-darken-4">
              {this.props.data.project}
              <i className="material-icons right">more_vert</i>
            </span>
            <div>
              <span><a className="github" href={this.props.data.github}>Github</a></span>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.data.project}<i className="material-icons right">close</i></span>
            <div><span className="status">{this.props.data.status}</span></div>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.
function StackIcons(props) {
  const array = props.data;
  const icons = array.map((item) => {
    return (
      <div key={item[0]} className="icon">
        <span className={item[0]}><i className={item[1]}></i><span/></span>
      </div>
    );
  });
  return(
    <div> {icons} </div>
  )
}

function Projects(props){
  const projects = [];
  const data = props.data;
  data.forEach((item) => { projects.push( <Card data={item} /> )});
  return(
    <div>{projects}</div>
  )
}

ReactDOM.render(
  <Layout children={<Projects data={data} />} />,
  document.getElementById('root')
);