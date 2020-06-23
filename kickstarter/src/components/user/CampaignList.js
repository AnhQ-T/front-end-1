import React, {useState} from 'react';

const CampaignList = (props) => {

    const [data, setData] = useState({
        "campaign": [
            {
                "name": "Fund my computer",
                "goal": 100000,
                "raised": 5000
            },
            {
                "name": "Underwater breathing machine",
                "goal": 40000,
                "raised": 15000
            },
            {
                "name": "New mmorpg project",
                "goal": 900000,
                "raised": 20000
            },
            {
                "name": "Juicero",
                "goal": 600000,
                "raised": 50000,
            }
        ]
    })

    return (
        <div>
            {data.campaign.map((el, i) => (
                <h4 key={i}>{el.name}</h4>
            ))}
        </div>
    )
}

export default CampaignList
