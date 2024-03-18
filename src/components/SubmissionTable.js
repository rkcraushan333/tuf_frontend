import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubmissionTable = () => {
    const [submissions, setSubmissions] = useState([]);

    const url = "https://tuf-server.onrender.com/api/access";

    const fetchData = async () => {
        await axios.get(url)
            .then((response) => {
                setSubmissions(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <h1>Submission History</h1>
            <table>
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
                            <td>{submission.username}</td>
                            <td>{submission.language}</td>
                            <td>{submission.stdin}</td>
                            <td>{submission.timestamp}</td>
                            <td>{submission.sourceCode.substring(0, 100)}</td>
                            <td>{submission.output}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default SubmissionTable;
