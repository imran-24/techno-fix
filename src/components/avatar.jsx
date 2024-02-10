import clsx from 'clsx';
import PropTypes from 'prop-types';

const Avatar = ({image, large}) => {
  return (
    <div className={clsx('h-8 w-8 rounded-lg overflow-hidden',
    large && 'h-16 w-16 lg:h-[80px] lg:w-[80px]')}>
        <img src={image} className='object-center' alt="" />
    </div>
  )
}

Avatar.propTypes = {
    image: PropTypes.string,
    large: PropTypes.bool
}

export default Avatar