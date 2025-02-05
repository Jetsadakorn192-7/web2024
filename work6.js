const RB=ReactBootstrap;
const {Alert, Card, Button, Table} = ReactBootstrap;


class App extends React.Component {
    title = (
      <Alert variant="info">
        <b>Work6 :</b> Firebase
      </Alert>
    );
    footer = (
      <div>
        By 653380192-7 Jetsadakorn Dutphayap <br />
        College of Computing, Khon Kaen University
      </div>
    );
    state = {
        scene: 0,
    }      
    render() {
      return (
        <Card>
          <Card.Header>{this.title}</Card.Header>  
          <Card.Body></Card.Body>
          <Card.Footer>{this.footer}</Card.Footer>
        </Card>          
      );
    }      
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCWLOo0zwQcFtEMo3cL3VMy6wmzTSEGiPM",
    authDomain: "mobileweb-work6.firebaseapp.com",
    projectId: "mobileweb-work6",
    storageBucket: "mobileweb-work6.firebasestorage.app",
    messagingSenderId: "805112319458",
    appId: "1:805112319458:web:a197de24e358dcd4a03dbb",
    measurementId: "G-M6P8W01GFY"
  };
  firebase.initializeApp(firebaseConfig);      
    const db = firebase.firestore();
    db.collection("students").get().then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
          console.log(`${doc.id} =>`,doc.data());
        });
    });



  const container = document.getElementById("myapp");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);