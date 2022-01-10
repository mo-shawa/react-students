import React from 'react'

export default function Student(props) {
    return (
        <div>
            <br />
            <h3>{props.student.name}</h3>
            <p>{props.student.bio}</p>
            <h4>Results:</h4>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Score</th>
                </tr>
                {props.student.scores.map(score => {
                    return(
                    <tr>
                        <td>{score.date}</td>
                        <td>{score.score}</td>
                    </tr>
                    )
                })}
            </table>
                <br />
                <hr />
        </div>
    )
}
