import React, { useEffect, useState } from "react";
import { API } from "../..";

export const LocationList = () => {
    const [locations, assignLocations] = useState([])

    useEffect(
        () => {
            fetch(`${API}/locations`)
                .then(res => res.json())
                .then(
                    (locations) => {
                        assignLocations(locations)
                    }
                )
        },
        []
    )

    return (
        <>
            {
                locations.map(
                    (locationObj) => {
                        return <p key={`location--${locationObj.id}`}>{locationObj.name}</p>
                    }
                )
            }
        </>
    )

}

