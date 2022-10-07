import us from "../Users/users.module.css";
import React from "react";

let Paginator = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (


            <div className={us.pageCount}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && us.selectedPage} onClick={(e) => {

                        props.onPageChanged((p));

                    }}>{p}</span>
                })}
            </div>

)


}


export default Paginator;