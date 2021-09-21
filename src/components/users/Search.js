import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
import PropTypes from 'prop-types'

const Search = () => {

    const {searchUsers, clearUsers, users} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext)

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter something', 'light')
        } else {
            searchUsers(text)
            setText('')
        }
    }
    const onChange = (e) => setText(e.target.value)

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User" value={text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {users.length > 0  && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            }
        </div>
    )
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default Search
