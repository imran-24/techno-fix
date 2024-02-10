

// import clsx from 'clsx'
// import PropTypes from 'prop-types';



// const Input = ({
//     ref,
//     onClick,
//     onBlur,
//     onChange,
//     onKeyDown,
//     value,
//     required,
//     disabled,
//     type,
//     label,
// }) => {
//     console.log(ref)
//     return (
//     <div className='relative flex items-center'>
//         <input 
//             onClick={onClick}
//             onBlur={onBlur}
//             onChange={e => onChange(e.target.value)}
//             onKeyDown={onKeyDown}
//             value={value}
//             ref={ref}
//             required={required}
//             type={type} 
//             disabled={disabled} 
//             placeholder={label}
//             className={
//                 clsx(`
//                 text-sm
//                 text-gray-900
//                 w-full
//                 rounded-md
//                 sm:leading-6
//                 py-1.5
//                 px-2
//                 ring-2
//                 ring-neutral-300
//                 border-0
//                 outline-0
//                 placeholder:text-neutral-400
//                 focus:ring-black
//                 placeholder:text-sm
//                 `, 
//                 disabled && "opacity-50 cursor-default")
//             }
//         />
//     </div>
//   )
// }

// Input.propTypes = {
//     ref: PropTypes.any,
//     onClick: PropTypes.func,
//     onBlur: PropTypes.func,
//     onChange: PropTypes.func,
//     onKeyDown: PropTypes.func,
//     value: PropTypes.string,
//     label: PropTypes.string,
//     disabled: PropTypes.bool,
//     required: PropTypes.bool,
//     type: PropTypes.string,
// }

// export default Input


import PropTypes from 'prop-types';
import clsx from "clsx"
import React from 'react';


const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={clsx(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

Input.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
}

export { Input }
