import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SubTable.css'

const SubmissionTable = () => {
    const [submissions, setSubmissions] = useState([]);

    const url = "https://tuf-server.onrender.com/api/access";

    const fetchData = async () => {
        await axios.get(url)
            .then((response) => {
                let sub = response.data;
                sub.reverse();
                setSubmissions(sub);
            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    useEffect(() => {
        fetchData();
    }, []);
    const navigate = useNavigate();

    return (
        <>
            <button className="go-back-button" onClick={() => navigate('/')}>Submit Code</button>
            <h1>Submission History</h1>
            <table className="submission-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Code Language</th>
                        <th>Stdin</th>
                        <th>Timestamp</th>
                        <th>Source Code</th>
                        <th>stdout</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td><input type="text" value={submission.username.split('\n').join(' ')} readOnly /></td>
                            <td><input type="text" value={submission.language.split('\n').join(' ')} readOnly /></td>
                            <td><input type="text" value={submission.stdin.split('\n').join(' ')} readOnly /></td>
                            <td><input type="text" value={submission.timestamp.split('\n').join(' ')} readOnly /></td>
                            <td><textarea rows="4" cols="50" readOnly value={submission.sourceCode.substring(0, 100).split('\n').join(' ')} /></td>
                            <td><input type="text" value={submission.output.split('\n').join(' ')} readOnly /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
export default SubmissionTable;
