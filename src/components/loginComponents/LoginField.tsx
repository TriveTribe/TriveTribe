import React from 'react'

type Props = {
    field: string
    details: string
}

const LoginField = (props: Props) => {
    return (
        <div>
            <div className="flex justify-center p-4">
                <p className="max-w-md mx-auto text-xl text-lightGreen">{props.field}</p>
            </div>
            <div className="max-w-md mx-auto p-4 rounded-lg bg-grey shadow-md border-2 border-lightGreen">
                <p className="text-center text-xl font-semibold">{props.details}</p>
            </div>
        </div>
    )
}

export default LoginField
