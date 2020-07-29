import React from 'react'
import './Header.css'

const Header: React.FC = () => {
    return (
        <div className="Header">
            <a href="https://github.com/Translucent504/expensetrackerpwa"><img width='40px' height='40px' src="https://icons-for-free.com/iconfiles/png/512/github+icon-1320168274457504277.png" alt="github-octocat"/></a>
            <h1 className='header-text'>Expense Tracker</h1>
        </div>
    )
}

export default Header
