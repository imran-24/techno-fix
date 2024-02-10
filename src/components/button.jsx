import clsx from 'clsx'
import PropTypes from 'prop-types';


const Button = ({
  type,
  fullWidth,
  children,
  disabled,
  danger,
  onClick,
  active,
  secondary
}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={clsx(`
        flex 
        justify-center 
        rounded-[3px]
        px-3 
        py-2 
        text-sm 
        font-semibold 
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
        disabled && 'opacity-50 cursor-default',
        fullWidth && 'w-full',
        secondary ? 'text-gray-900' : 'text-white',
        active && 'bg-black',
        danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600',
        secondary && !active  && 'ring-[.8px] ring-neutral-400/50 hover:bg-neutral-100'
      )}
      >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func ,
  secondary: PropTypes.bool,
  danger: PropTypes.bool ,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
}

export default Button