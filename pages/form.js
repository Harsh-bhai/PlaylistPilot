import React, { useState } from 'react';

const FormPreview = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        url: '',
        pfp_url: '',
        artist: '',
        tags: '',
        metadata: {
            length: '',
            album: '',
            album_url: ''
        }
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table style={{ width: '50%', border: 'none' }}>
                <tbody>
                    <tr>
                        <td><label>Name: </label></td>
                        <td><input type="text" name="name" value={formValues.name} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>URL: </label></td>
                        <td><input type="text" name="url" value={formValues.url} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Profile Pic: </label></td>
                        <td><input type="text" name="pfp_url" value={formValues.pfp_url} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Artists: </label></td>
                        <td><input type="text" name="artist" value={formValues.artist} onChange={handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Tags: </label></td>
                        <td><textarea name="tags" value={formValues.tags} onChange={handleInputChange} /></td>
                    </tr>
                </tbody>
            </table>
            <div style={{ width: '50%', paddingLeft: '10px' }}>
                <div>
                    <h3>Preview</h3>
                    <p>Name: {formValues.name}</p>
                    <p>URL: {formValues.url}</p>
                    <p>ProfilePic: {formValues.pfp_url}</p>
                    <p>Artists: {formValues.artist}</p>
                    <p>Tags: {formValues.tags}</p>
                </div>
            </div>
        </div>
    );
};

export default FormPreview;
