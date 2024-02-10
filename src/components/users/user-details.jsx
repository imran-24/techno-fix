import PropTypes from 'prop-types';
import Avatar from '../avatar';
import clsx from 'clsx';
import Button from '../button';

const UserDetails = ({
    data,
}) => {

    return (
    <div className={clsx('bg-white w-full h-full pt-20 relative')}>
        <div className='flex flex-col items-center  space-y-10  p-4'>
            <Avatar image={data.image} large />
            <div className='flex items-center gap-x-6 text-center'>
                <div className='space-y-1 text-2xl sm:text-3xl lg:text-4xl '>
                    <p className='font-bold '>
                        {data.firstName} {data.lastName}
                    </p>
                    <p role='email' className='text-gray-600 font-medium  text-sm'>
                        {data.email}
                    </p>
                </div>
            </div>
            <div className='space-y-1 w-48 md:w-60 lg:w-72   text-sm font-medium'>
                <h4 className='text-gray-900'>Address</h4>
                <p className='text-gray-600 '>
                    {data.address.address}
                </p>
                <p className='text-gray-600'>
                    {data.address.city}
                </p>
            </div>       
        </div>
        <div className='p-4 border-t w-full absolute bottom-0'>
            <div className='flex items-center justify-between  md:justify-end gap-x-3 text-sm font-medium'>
                <span className='text-gray-900'>Company</span>
                <Button onClick={(event)=> event.stopPropagation()} className='text-gray-600 '>{data.company.name}</Button>
            </div>
        </div>
    </div>
  )
}

UserDetails.propTypes = {
    data: PropTypes.object,
    single: PropTypes.bool
}

export default UserDetails