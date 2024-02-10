import PropTypes from 'prop-types';
import Avatar from '../avatar';
import { Link, useParams } from 'react-router-dom';
import clsx from 'clsx';

const UserItem = ({
    data,
}) => {
    const {id} = useParams();

    return (
    <div className={clsx('bg-white  border  rounded hover:shadow transition duration-300 hover:scale-95 cursor-pointer',
    id && 'w-96')}>
        <div className='flex flex-col p-4  text-sm space-y-3'>
            <div className='flex items-center gap-x-3 '>
                <Avatar image={data.image} />
                <div className=' space-y-1'>
                    <Link to={`/${data.id}`} state={{ data: data }}  className='font-semibold hover:underline'>
                        {data.firstName} {data.lastName}
                    </Link>
                    <p className='text-gray-600 text-xs'>
                        {data.email}
                    </p>
                </div>
            </div>
            <div className='space-y-1 text-xs font-medium'>
                <h4 className='text-gray-900 '>Address</h4>
                <p className='text-gray-600'>
                    {data.address.address}
                </p>
                <p className='text-gray-600'>
                    {data.address.city}
                </p>
            </div>       
        </div>
        <hr />
        <div className='p-4'>
            <div className='text-xs font-medium'>
                <span className='text-gray-900'>Company</span>
                <p className='text-gray-600'>{data.company.name}</p>
            </div>
        </div>
    </div>
  )
}

UserItem.propTypes = {
    data: PropTypes.object,
    single: PropTypes.bool
}

export default UserItem