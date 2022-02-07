import React from "react";
import us from './users.module.css';
import userPhoto from '../../assets/png1.png';
import {NavLink} from "react-router-dom";


let Users = (props) => {

    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>

            <div className={us.pageCount}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && us.selectedPage} onClick={(e) => {

                        props.onPageChanged((p));

                    }}>{p}</span>
                })}

            </div>
            {

                props.users.map(u => <div className={us.usersProfile} key={u.id}>
                    <div className={us.userImage}>
                        <div className={us.image}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={us.photo}/>
                            </NavLink>
                        </div>
                        <div className={us.followButton}>


                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.unfollow(u.id);


                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.follow(u.id);


                                }}>Follow</button>}

                        </div>

                    </div>
                    <div className={us.usersItem}>
                        <div className={us.wrapperNameStatus}>
                            <div> {u.name}</div>
                            <div> {u.status}</div>
                        </div>
                        <div className={us.location}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>


                </div>)
            }
        </div>)
}


export default Users;