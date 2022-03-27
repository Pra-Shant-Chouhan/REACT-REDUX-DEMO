import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from './redux'


const UserContainer = ({ fetchUsers, userData }) => {
    useEffect(() => {
        fetchUsers();
    },[])
    return userData.loading ? <h2>LODING.........</h2> : userData.error ? <h2>{ userData.error}</h2>:(
        <>
            <h2>Users List</h2>
            {userData.users.map(user => <h3 key = {user.id}>{ user.name}</h3>)}
        </>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)