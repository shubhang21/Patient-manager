import React from 'react'

function InsertVisit() {

    const [mobile, setMobile] = useState('')
    const [date, setDate] = useState('')
    const [doctor, setDoctor] = useState('')
    const [symptoms, setDate] = useState('')
    const [mobile, setMobile] = useState('')

    return (
        <div>
            Add a Visit
            <Input type="textarea" placeholder="Mobile"  />
        </div>
    )
}

export default InsertVisit
