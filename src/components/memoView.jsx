import React, { useState, useMemo } from 'react';

const UserList = ({ users }) => {
    const [filter, setFilter] = useState('');

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [users, filter]);

    return (
        <div>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Фильтр по имени"
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

const MemoList = () => {
    const [users, setUsers] = useState([
            { id: 1, name: 'Алексей' },
            { id: 2, name: 'Мария' },
            { id: 3, name: 'Иван' },
            { id: 4, name: 'Светлана' },
            { id: 5, name: 'Дмитрий' },
            { id: 6, name: 'Елена' },
            { id: 7, name: 'Николай' },
            { id: 8, name: 'Виктория' },
            { id: 9, name: 'Павел' },
            { id: 10, name: 'Ольга' }
        ]
    );

    return (
        <div>
            <h1>Список пользователей</h1>
            <UserList users={users} />
        </div>
    );
};

export default MemoList;

