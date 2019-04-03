import React, { Component } from 'react';
import { Player } from 'video-react';
import Dropzone from 'react-dropzone'
//import '~video-react/dist/video-react.css'

class Upload extends Component {

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  render() {
    return (
      <div className="text-center mt-5">
        <Dropzone
  onDrop={this.onDrop}
  accept="video/*"
>
{({getRootProps, getInputProps, isDragActive, isDragReject}) => (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {!isDragActive && 'Click here or drop a file to upload!'}
      {isDragActive && !isDragReject && "Drop it like it's hot!"}
      {isDragReject && "File type not accepted, sorry!"}
    </div>
  )}
</Dropzone>
    <Player>
      <source src={this.acceptedFiles} />
    </Player>
      </div>
    );
  }
}

// // export default Upload;

// import React from 'react';
// import Dropzone from 'react-dropzone';
// import request from 'superagent';

// const CLOUDINARY_UPLOAD_PRESET = 'vawzbrp6';
// const CLOUDINARY_UPLOAD_URL = 'https://res.cloudinary.com/tsikyfitiavana/image/upload';

// class Upload extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       uploadedFile: null,
//       uploadedFileCloudinaryUrl: ''
//     };
//   }

//   onImageDrop(files) {
//     this.setState({
//       uploadedFile: files[0]
//     });

//     this.handleImageUpload(files[0]);
//   }

//   handleImageUpload(file) {
//     let upload = request.post(CLOUDINARY_UPLOAD_URL)
//                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
//                      .field('file', file);

//     upload.end((err, response) => {
//       if (err) {
//         console.error(err);
//       }

//       if (response.body.secure_url !== '') {
//         this.setState({
//           uploadedFileCloudinaryUrl: response.body.secure_url
//         });
//       }
//     });
//   }

//   render() {
//     return (
//       <form>
//         <div className="FileUpload">
//           <Dropzone
//             onDrop={this.onImageDrop.bind(this)}
//             multiple={false}
//             accept="image/*">
//             <div>Drop an image or click to select a file to upload.</div>
//           </Dropzone>
//         </div>

//         <div>
//           {this.state.uploadedFileCloudinaryUrl === '' ? null :
//           <div>
//             <p>{this.state.uploadedFile.name}</p>
//             <img src={this.state.uploadedFileCloudinaryUrl} alt='yes'/>
//           </div>}
//         </div>
//       </form>
//     )
//   }
// }
export default Upload