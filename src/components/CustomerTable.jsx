import DUMMY_DATA from "../data/DummyData"
import TableRow from "./TableRow"
import classes from "./CustomerTable.module.css"

export default function CustomerTable() {
    return (
        <div className={classes.container}>
            <div className={classes.headerWrapper}>
                <h2>Hello Evano 👋🏼,</h2>
            </div>
            <div className={classes.table}>
                <div className={classes.tableTitle}>
                    <div>
                        <h2>All Customers</h2>
                        <p>Active members</p>
                    </div>
                    <div className={classes.wrapper}>
                        <input type="text" placeholder="Search"></input>
                    </div>
                </div>
                <div className={classes.tableWrapper}>
                <table className={classes.customers}>
                    <tr>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Status</th>
                    </tr>
                        {DUMMY_DATA.map((tablerow) => (
                            <TableRow 
                                fullname={tablerow.fullname} 
                                company={tablerow.company} 
                                phone={tablerow.phone} 
                                email={tablerow.email} 
                                country={tablerow.country} 
                                status={tablerow.status}  
                            />
                        ))}
                </table>
                </div>
                <div className={classes.utils}>
                    <p className={classes.entries}>Showing data 1 to 8 of  256K entries</p>
                    <div className={classes.pages}>
                        <button>&lt;</button>
                        <button className={classes.activeButton}>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <p>...</p>
                        <button>40</button>
                        <button>&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}