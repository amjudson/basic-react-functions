import React, { Component } from 'react';
import 'localcss/imageZoom.css';
import * as zoom from './makeImageZoom';
import eye from 'assets/1e8101ea-04d3-4cf5-b398-d7867faae675.jpg';

class ImageZoom extends Component {
  constructor(props) {
    super(props);

		this.showResult = this.showResult.bind(this);
		this.hideResult = this.hideResult.bind(this);
    this.state = {
      showResult: { display: 'none' },
      hidden: true
    };
  }

  showResult() {
    const hidden = !this.state.hidden;
    console.log('SHOW:', hidden);
    this.setState({ hidden: hidden });
    if (!hidden) {
      zoom.imageZoom('image', 'result', this.showResult);
    }
 }

	hideResult() {
		console.log('HIDE:', this.state.hidden);
    this.setState({ hidden: true });
	}

  render() {
    const hidden = this.state.hidden;
    console.log('Hidden Render:', hidden);
    return (
      <div className='container'>
        <div className='img-zoom-container row'>
          <img
            className='mr-3'
            id='image'
            src={eye}
            width='400'
            height='340'
            alt='Eye'
            onClick={() => this.showResult()}
          />
          <div
            id='result'
            hidden={hidden}
            className='ml-3 img-zoom-result'
            onClick={() => this.hideResult()}
          />
        </div>
      </div>
    );
  }
}

export default ImageZoom;
