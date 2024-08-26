import React from 'react';
import './agentPage.scss';

const agents = [
    {
        id: 1,
        name: 'kamal subedi',
        phone: '+123456789',
        email: 'kamal@example.com',
        description: 'Expert in luxury properties with over 10 years of experience.',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Jane Smith',
        phone: '+987654321',
        email: 'jane@example.com',
        description: 'Specializes in commercial properties and investment opportunities.',
        imageUrl: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Emily Johnson',
        phone: '+102938475',
        email: 'emily@example.com',
        description: 'Focuses on residential properties and first-time homebuyers.',
        imageUrl: 'https://via.placeholder.com/150'
    }
];

function AgentPage() {
    return (
        <div className="agent-page">
            <h1>Meet Our Agents</h1>
            <div className="agent-list">
                {agents.map(agent => (
                    <div key={agent.id} className="agent-card">
                        <img src={agent.imageUrl} alt={`${agent.name}`} />
                        <h2>{agent.name}</h2>
                        <p>{agent.description}</p>
                        <p><strong>Phone:</strong> {agent.phone}</p>
                        <p><strong>Email:</strong> <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AgentPage;
