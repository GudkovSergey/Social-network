
export const getUsersSelector = (state)=>{
    return  state.usersPage.users
};
export const getPageSizeSelector = (state)=>{
    return  state.usersPage.pageSize
};
export const getCurrentPageSelector = (state)=>{
    return  state.usersPage.currentPage
};
export const geTotalUsersCountSelector = (state)=>{
    return  state.usersPage.totalUsersCount
};
export const getIsFetchingSelector = (state)=>{
    return  state.usersPage.isFetching
};
export const getFollowingInProgressSelector = (state)=>{
    return  state.usersPage.followingInProgress
};