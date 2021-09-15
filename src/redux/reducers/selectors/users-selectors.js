export const getUsersSelector = (state) => state.UsersPage.users;
export const getUsersPageSizeSelector = (state) => state.UsersPage.pageSize;
export const getTotalUsersCountSelector = (state) => state.UsersPage.totalUsersCount;
export const getUsersPageCurrentPage = (state) => state.UsersPage.currentPage;
export const getUsersPageFetchingState = (state) => state.UsersPage.isFetchingData;
export const getUsersPageFollowingInProgressStatee = (state) =>
    state.UsersPage.followingInProgressState;
