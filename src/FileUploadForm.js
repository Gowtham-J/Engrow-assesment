import React from "react";

class FileUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", files: [] };
  }

  handleInputChange = (e) => {
    const files = e.target.files;

    if (files.length) {
      this.setState({
        message: `File Name: ${files.item(0).name}`,
        files: files,
      });
    }
  };

  handleSendFiles = () => {
    console.log(this.state.files[0]);
  };

  render() {
    return (
      <div className="FileUploadForm">
        <InputFile onChange={this.handleInputChange} />
        <MessageBox message={this.state.message} />
        <ActionBar
          enabled={this.state.files.length > 0}
          onSendClick={this.handleSendFiles}
        />
      </div>
    );
  }
}

function ActionBar(props) {
  return (
    props.enabled && (
      <div className="ActionBar">
        <button onClick={props.onSendClick}>Отправить</button>
      </div>
    )
  );
}

function MessageBox(props) {
  return (
    props.message.length > 0 && (
      <div className="MessageBox">{props.message}</div>
    )
  );
}

function InputFile(props) {
  return (
    <label className="InputFile">
      File to upload:{" "}
      <input type="file" name="image" onChange={props.onChange} />
    </label>
  );
}

export default FileUploadForm;
