import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";
import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Messenger from "./Messenger";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from 'reactstrap';
const img = require('./assets/interstellar.jpg');

const love = <FontAwesomeIcon icon={faHeart} />

class App extends React.Component {

  componentDidMount() {

    // How to talk with electron main process
    Messenger.on((event, message) => {
      console.log(message);
    });
    Messenger.send({ foo: true });
  }

  render() {
    return (
      <CardDeck style={{ maxWidth: '320px', margin: '0 auto'}}>
        <Card>
          <CardImg top width="100%" src={img} alt="Card image cap" />
          <CardBody>
            <CardTitle>Electron-React</CardTitle>
            <CardSubtitle><small><em>with Webpack</em></small></CardSubtitle>
            <CardText>
              Because some things must be simple and easy to use...
              with { love }
            </CardText>
            <Button size="sm">
              <FontAwesomeIcon icon={faHome} />{' '}Button
            </Button>
          </CardBody>
        </Card>
      </CardDeck>
    );
  }
}

export default App;