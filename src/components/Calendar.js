import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default function Calendar(props) {

    const eventsArr = props.user.appointments.map(appointment=> {
        console.log(appointment.pet_id)
        let thisPet = props.user.pets.find(pet => pet.id === appointment.pet_id)
        return {title: `${thisPet.name}: ${appointment.service}`, date: appointment.date}
    })


    return (
        <article className="wrapper">
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={eventsArr}
            />
        </article>
    )
}
