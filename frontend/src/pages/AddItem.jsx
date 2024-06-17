import axios from 'axios';
import React, { useState } from 'react';
import Localhost from '../variable';
import { Navigate } from 'react-router-dom';
import Header from './Header';

const AddNewItem = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState(null);
    const [cast, setCast] = useState('');
    const [director, setDirector] = useState('');
    const [duration, setDuration] = useState('');
    const [price, setPrice] = useState('');
    const [trailer, setTrailer] = useState('');
    // const [video, setVideo] = useState(null);
    const [success, setSuccess] = useState(false);

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

    const handlePhotoRemove = () => {
        setPhoto(null);
    };

    

    const handlePublish = async () => {
        // Handle the publish action here
        const data = await axios.post(`${Localhost}/movie`,
            {
                "name": title,
                "cast": cast,
                "img_url": photo,
                "sinopsis": description,
                "director": director,
                "age" : age,
                "duration" : duration,
                "trailer_url": trailer,
                "price": price
            }
        );


        
        if(data.status == 201){
            
            setSuccess(true)
        }
    };

    if(success) {
        
        return <Navigate to="/" />;  
    } 

    return (
        <>
        <Header />
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
                        <textarea
                            className="description-input"
                            value={cast}
                            placeholder="Cast"
                            onChange={(e) => setCast(e.target.value)}
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
                    <div className="form-group">
                        <input
                            type="text"
                            className="age-input"
                            value={director}
                            placeholder="Director"
                            onChange={(e) => setDirector(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="age-input"
                            value={duration}
                            placeholder="Duration in minutes"
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="age-input"
                            value={price}
                            placeholder="Price"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="age-input"
                            value={trailer}
                            placeholder="Trailer Url"
                            onChange={(e) => setTrailer(e.target.value)}
                        />
                    </div>
                    <button className="publish-button" onClick={handlePublish}>
                        Publish
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddNewItem;
