import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { ProfilePic } from './profilePic.js';


export class ProfilePicUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          showModal: false,
          file: ""
      };
      this.handlePath = this.handlePath.bind(this);
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
    }


    handleOpenModal() {
        let openModal =! this.state.showModal;

        this.setState({
            showModal: openModal
        });
    }

    handlePath(e) {
        this.setState({
            file:e.target.files[0]
        });
    }

    onChangeImage() {
        this.props.ProfilePicUpload(this.state.file)
    }

    handlePicUpload(e) {
        e.preventDefault();

        const formData = new FormData;
        formData.append("userfile", this.state.file);

        axios.port('uploadprofile', formData).then( (resp) => {
            let newPath = resp.data.profilePic;

            this.setState({
                file: newPath
            });

            this.onChangeImage();
        }).catch(function(error) {
            console.log("Profile Upload Errer : "+error);
        })
    }

    render() {
        return (
              <div className="iconBox">
                    <ProfilePic />
                    <input onChange={this.handlePath} type="file" name="userfile" />
              </div>
        );
    }

}
