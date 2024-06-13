import React, { useState } from 'react';

const AddNewItem = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState(null);
    const [video, setVideo] = useState(null);

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setVideo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePhotoRemove = () => {
        setPhoto(null);
    };

    const handleVideoRemove = () => {
        setVideo(null);
    };

    const handlePublish = () => {
        // Handle the publish action here
        console.log({ title, description, age, photo, video });
    };

    return (
        <div className="add-new-item">
            <div className="left-section">
                <div className="photo-section">
                    {photo ? (
                        <div className="photo-container">
                            <img src={photo} alt="Uploaded" className="uploaded-photo" />
                            <button className="remove-photo-button" onClick={handlePhotoRemove}>
                                &times;
                            </button>
                        </div>
                    ) : (
                        <div className="photo-placeholder">Photo</div>
                    )}
                    <label className="upload-photo-label">
                        Upload Photo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
            </div>
            <div className="right-section">
                <div className="video-section">
                    {video ? (
                        <div className="video-container">
                            <video src={video} controls className="uploaded-video"></video>
                            <button className="remove-video-button" onClick={handleVideoRemove}>
                                &times;
                            </button>
                        </div>
                    ) : (
                        <div className="video-placeholder">Video</div>
                    )}
                    <label className="upload-video-label">
                        Upload Video
                        <input
                            type="file"
                            accept="video/*"
                            onChange={handleVideoUpload}
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
                <div className="form-section">
                    <div className="form-group">
                        <input
                            type="text"
                            className="title-input"
                            value={title}
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="description-input"
                            value={description}
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="age-input"
                            value={age}
                            placeholder="Age"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button className="publish-button" onClick={handlePublish}>
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewItem;
