import React from 'react'

const TableItem: React.FC<{name: string, title: string, role: string, email: string}> = (props) => {
    const {name, title, role, email} = props
    return (
        <div className='flex gap-1'>
            <span>{name}</span>
            <span>{title}</span>
            <span>{role}</span>
            <span>{email}</span>
        </div>
    )
}

export default TableItem
