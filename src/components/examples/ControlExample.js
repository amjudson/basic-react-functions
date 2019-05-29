import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  Accordion,
  AccordionItem
} from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

class ControlExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
   const { contentList	} = this.props;
    return (
      <Container fluid={true}>
        <Accordion>
          <AccordionItem title='Then First Accordion Title'>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
                    </p>
          </AccordionItem>
          <AccordionItem title='Then Second Accordion Title'>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur
                ea in ut nostrud velit in irure cillum tempor laboris
                sed adipisicing eu esse duis nulla non.
                    </p>
          </AccordionItem>
        </Accordion>
      </Container>
    )
  }
}

ControlExample.propTypes = {
  contentList: PropTypes.array
}

export default ControlExample;
