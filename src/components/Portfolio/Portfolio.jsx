import React from 'react';
import {
  Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption,
  CarouselControl, CarouselIndicators, CarouselItem,
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
/**
 * portfolio images
 */
import canvas from '../../assets/portfolio/canvas.png';
import faceRecognition from '../../assets/portfolio/face.png';
import collection from '../../assets/portfolio/gophoter/collectionOfGophoter.png';
import loginPage from '../../assets/portfolio/gophoter/login.png';
import recommendationInside from '../../assets/portfolio/gophoter/recommendation-inside.png';
import recommendation from '../../assets/portfolio/gophoter/recommendation.png';
import spots from '../../assets/portfolio/gophoter/spots.png';
import upload from '../../assets/portfolio/gophoter/upload.png';
import musicMixer from '../../assets/portfolio/music.png';

const items = [
  {
    src: loginPage,
    altText: ' ',
    caption: 'Login page'
  },
  {
    src: recommendation,
    altText: ' ',
    caption: 'recommendation '
  },
  {
    src: recommendationInside,
    altText: ' ',
    caption: 'recommenation inside'
  },
  {
    src: spots,
    altText: '',
    caption: 'spots'
  },
  {
    src: upload,
    altText: '',
    caption: 'upload'
  },

];

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeIndex: 0
    };

    /**
     * Modal variable
     */
    this.toggle = this.toggle.bind(this);

    /**  
     * Carousel variables
    */
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  /**
   * Carousel methods
   */
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  /**
   * Modal
   */

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={faceRecognition} alt="face recognition" />
          <CardBody>
            <CardTitle>Face recognition</CardTitle>
            <CardSubtitle>Technologies used</CardSubtitle>
            <CardText>Reactjs, Javascript, Typescript, Nodejs, Express, Postgresql,
            Postman, REST API, Knex, Bcrypt, Clarifai API, Heroku</CardText>
            <a href="https://wonderful-face-recognition.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
              <Button>Live demo</Button>
            </a>{' '}
            <a href="https://github.com/CharlesChanLok/face-recognition" rel="noopener noreferrer" target="_blank" >
              <Button>Source code->Frontend</Button>
            </a>{' '}
            <a href="https://github.com/CharlesChanLok/face-recognition-backend" rel="noopener noreferrer" target="_blank" >
              <Button>Source code->Backend</Button>
            </a>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={collection} alt="gophoter" />
          <CardBody>
            <CardTitle>GoPhoter (Content creator) Group Project</CardTitle>
            <CardText>Team members: Telford Ho,  Charles Chan, Seamus Yeo, Hugo Cheng</CardText>
            <CardSubtitle>Technologies used</CardSubtitle>
            <CardText>React Native, Javascript, Nodejs, Express, Postgresql, Knex, REST API,
            Postman, Jasmine, Entity relationship diagram, Wireframe</CardText>
            <CardText>
              <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Details</Button>{' '}
              <a href="https://github.com/CharlesChanLok/gophoter" rel="noopener noreferrer" target="_blank" ><Button>Source code</Button></a>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Gophoter</ModalHeader>
                <ModalBody className='Portfolio-carousel-size'>
                  <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Continue</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Back</Button>
                </ModalFooter>
              </Modal>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={musicMixer} alt="music mixer" />
          <CardBody>
            <CardTitle>Music Mixer Group Project</CardTitle>
            <CardTitle>Team members: Telford Ho, Charles Chan, Kevin Ching</CardTitle>
            <CardSubtitle>Technologies</CardSubtitle>
            <CardText>HTML, CSS, Javascript, Bootstrap, Nodejs, Express, Handlebars,
            Postgresql, Knex, Bcrypt, Passport, Google OAUTH2, P5</CardText>
            <a href="https://wonderful-music-project.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
              <Button>Live demo</Button>
            </a>{' '}
            <a href="https://github.com/CharlesChanLok/Music-Project" rel="noopener noreferrer" target="_blank" >
              <Button>Source code</Button>
            </a>
          </CardBody>
        </Card>


        <Card>
          <CardImg top width="100%" src={canvas} alt="canvas" />
          <CardBody>
            <CardTitle>Online Canvas Group Project</CardTitle>
            <CardTitle>Team members: Luke Yeung, Charles Chan, Brian </CardTitle>
            <CardSubtitle>Technologies</CardSubtitle>
            <CardText>HTML, CSS, Javascript, Jquery, Bootstrap, HTML 5 Canvas API</CardText>
            <a href="https://charleschanlok.github.io/Canvas-group-project" rel="noopener noreferrer" target="_blank" >
              <Button>Live demo</Button>
            </a>{' '}
            <a href="https://github.com/CharlesChanLok/Canvas-group-project" rel="noopener noreferrer" target="_blank" >
              <Button>Source code</Button>
            </a>

          </CardBody>
        </Card>

      </div>
    );
  }
};




export default Portfolio;