import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import axios from 'axios';

const Form = () => {
    // State variables to store input values
    let [username, setUsername] = useState('');
    let [language, setLanguage] = useState('');
    let [stdin, setStdin] = useState('');
    let [sourceCode, setSourceCode] = useState('');
    const langId = {
        "Python": 70,
        "Java": 62,
        "Javascript": 63,
        "C++": 54
    };
    const navigate = useNavigate();

    const executeCode = async () => {
        const options = {
            method: 'POST',
            url: 'https://judge0-ce.p.rapidapi.com/submissions',
            params: {
                base64_encoded: 'false',
                fields: '*'
            },
            headers: {
                'content-type': 'application/json',
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '8d40fe1887mshc1fc9f0f651a385p13154bjsn0b62777a859a',
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            },
            data: {
                language_id: langId[language],
                source_code: sourceCode,
                stdin: stdin
            }
        };

        try {
            const response = await axios.request(options);
            return response.data.token;
        } catch (error) {
            alert("Fill the data correctly")
            // console.log(error.message);
        }
    }
    const getOutput = async (token) => {
        const options = {
            method: 'GET',
            url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            params: {
                base64_encoded: 'false',
                fields: '*'
            },
            headers: {
                'X-RapidAPI-Key': '8d40fe1887mshc1fc9f0f651a385p13154bjsn0b62777a859a',
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            return response.data.stdout;
        } catch (error) {
            alert("Fill the data correctly")
        }
    }
    // Function to handle form submission
    const url = "https://tuf-server.onrender.com/api/insert"
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await executeCode();
            // console.log("is this null" + stdin)
            if (token) {
                const stdout = await getOutput(token);
                const data = {
                    username,
                    language,
                    stdin,
                    sourceCode,
                    output: stdout,
                };
                await axios.post(url, data)
                    .then((response) => {
                        // successfully sent
                        // console.log("Data Successfully saved");
                        alert("Code Successfully Executed");
                        navigate('/table')
                    })
                    .catch((error) => {
                        // console.log(error.status + ": " + error.message);
                        alert("Fill the data correctly")
                    })
            }
        }
        catch (error) {
            // console.log(error.status + ": " + error.message);
            alert("Try Again");
        }
    };

    return (
        <div className="form-container">
            <h2 className="heading">Submit Your Code</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        placeholder='Enter your username'
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="language">Code Language :</label>
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}>
                        <option value="">Select Language</option>
                        <option value="C++">C++</option>
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="JavaScript">Javascript</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="stdin">Standard Input:</label>
                    <textarea
                        placeholder='Paste your inputs'
                        type="text"
                        id="stdin"
                        value={stdin}
                        onChange={(e) => setStdin(e.target.value)}
                        rows={5}
                        className='standard-input'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sourceCode">Source Code:</label>
                    <textarea
                        placeholder='Paste your Code'
                        id="sourceCode"
                        value={sourceCode}
                        onChange={(e) => setSourceCode(e.target.value)}
                        rows={10}
                        cols={50}
                        className="source-code"
                    />
                </div>
                <div className="button-container">
                    <button onClick={() => navigate('/table')}>Submissions</button>
                    <div className="button-space"></div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
