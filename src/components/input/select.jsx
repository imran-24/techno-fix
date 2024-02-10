
import ReactSelect from 'react-select'
import PropTypes from 'prop-types';

const Select= ({
    label,
    value,
    options,
    onChange,
    disabled,
    required
})=>{
    return(
        <div className='w-38 flex items-center gap-x-2'>
            <label
            className='text-xs 
            font-medium
            leading-6
            block
            text-gray-900'
            >
                {label}
            </label>
            <div className="w-full">
                <ReactSelect 
                    placeholder="Sort..."
                    required={required}
                    isDisabled={disabled}
                    value={value}
                    onChange={onChange}
                    options={options}
                    menuPortalTarget={document.body}
                    styles={{
                        menuPortal: (base) =>({
                            ...base,
                            zIndex: 9999,
                                                        
                        }),
                    }}
                    classNames={{
                        input: () => 'text-xs rounded-md text-gray-900 ',
                        control: () =>  'text-xs rounded-md sm:leading-6 '
                    }}
                />
            </div>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func,
    options: PropTypes.array,
    disabled: PropTypes.bool,
    required: PropTypes.bool
}

export default Select