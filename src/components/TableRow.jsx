import classes from "./TableRow.module.css"

export default function TableRow(props) {
    const status = props.status;

    return (
        <tr>
            <td>{props.fullname}</td>
            <td>{props.company}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.country}</td>
            <td className={`${classes.status} ${status === "Active" ? classes.active : classes.inactive}`}><div>{props.status}</div></td>
        </tr>
    )
}