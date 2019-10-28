// eslint-disable-line
import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
      this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    const { label } = this.props;
    const iconUsed = <i className="fa fa-cloud-upload"></i>;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="custom-file-upload">
          {iconUsed} Download to
        </label>
        <input id="file-upload" type="file" />
        <br />
        <button type="submit" className="btn btn-primary ">Submit</button>
      </form>
    );
  }
}

export default FileInput;
