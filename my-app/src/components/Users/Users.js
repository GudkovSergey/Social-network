import React from "react";
import us from './users.module.css';
import userPhoto from '../../assets/png1.png';
import {NavLink} from "react-router-dom";
import Paginator from "../FormsControls/Paginator";


let Users = (props) => {



    return (
        <div>

            <Paginator currentPage = {props.currentPage} onPageChanged ={props.onPageChanged} totalUsersCount  = {props.totalUsersCount} pageSize = {props.pageSize}  />


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
                            <div className={us.status}> {u.status}</div>
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