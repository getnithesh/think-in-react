import React from "react"

const Table = React.memo((props)=>{
    for(let i = 0; i<3000000000; i++ ){}
    return <table border = "1">
            <tbody>
                <HeaderRow color = "red" heading="House Stark" key = {"th-stark-row"}/>
                {
                    props.stark.map((item, index) => {
                        return <TableRow item = {item} key = {"st-row-" + index} />
                    })
                }
                <HeaderRow color = "yellow" heading="House Targaryen" key = {"th-targ-row"}/>
                {
                    props.targaryen.map((item, index) => {
                        return <TableRow item = {item} key = {"ta-row-" + index}/>
                    })
                }
            </tbody>
        </table>
});

const HeaderRow = React.memo((props)=>{
    return <Row bgColor = "blue">
            <th colSpan = "2" style= {{color: props.color}}>{props.heading}</th>
        </Row>;
});

const TableRow = React.memo((props)=>{
    return <Row bgColor = "red">
            <TableCell text = {props.item.name}/>
            <TableCell text = {props.item.castle}/>
        </Row>;
});

const Row = React.memo((props)=>{
    return <tr style={{border: `solid 2px ${props.bgColor}`}}>
            {props.children}
        </tr>;
});

const TableCell = React.memo((props) => {
    return <td><span style={{border: "solid 1px white"}}>{props.text}</span></td>;
});

export default  Table;