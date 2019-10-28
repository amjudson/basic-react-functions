import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Button } from 'react-bootstrap';
import {
  Accordion,
  AccordionItem
} from 'react-light-accordion';
import stateOptions from '../../data/stateOptions';
import SearchDropdown from '../common/SearchDropdown';
import 'react-light-accordion/demo/css/index.css';
import ErrorBoundary from '../errors/ErrorBoundary';
import FileInput from '../common/FileInput';

class ControlExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {
        value: 'FL',
        label: 'Florida'
      },
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (!e) {
      return null;
    }

    const selectedOption = this.state.selectedOption;
    selectedOption.value = e.value;
    selectedOption.label = e.label;

    return this.setState({ selectedOption: selectedOption });
  }

  render() {
   //const { 	} = this.props;
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
        <SearchDropdown
          name="stateAbbreviation"
          selectedOption={this.state.selectedOption}
          options={stateOptions}
          label="State:"
          size="4"
          error={this.state.errors.stateAbbreviation}
          onChange={this.onChange}
        />
        <Row className="mt-4">
          <ErrorBoundary>
            <FileInput label="Download path " />
          </ErrorBoundary>
        </Row>
      </Container>
    )
  }
}

ControlExample.propTypes = {
  contentList: PropTypes.array
}

export default ControlExample;
