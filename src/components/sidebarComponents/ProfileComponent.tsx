import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

type Props = {
  name: string
}

const ProfileComponent = ({ name }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <PersonIcon className='text-black border rounded-full h-24 w-24' />
      <p className='text-2xl'>Hi {name}</p>
    </div>
  )
}

export default ProfileComponent