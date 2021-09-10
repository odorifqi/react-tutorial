//import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => { /*p3*/
    const rows = props.charsData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeChars(index)}>Delete</button></td>
            </tr>
        )//s5 create onclick
    })

    return <tbody>{rows}</tbody>
}

const Table = (props) => { //s4 from class to const(simple component)
    const { charsData, removeChars } = props

    return (
        <table>
            <TableHeader />
            <TableBody charsData={charsData} /*p2*/ removeChars={removeChars} />
        </table>
    )
}

export default Table

