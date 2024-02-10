
import clsx from "clsx";
import { useScrollTop } from "../../hooks/use-scroll-top";
import { useRef, useState } from "react";

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "./button";
import {Input} from "./input/input";
import CreateUserModal from "./modals/create-user-modal";

const Navbar = () => {

    const scrolled = useScrollTop()
    const inputRef = useRef(null);
    const [search, setSearch] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [open, setOpen] = useState(false)

    const {id} = useParams();
    const buttonRef = useRef(null);
    const navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams();

    const enableInput = () => {
        setIsEditing(true);
        setTimeout(() => {
          inputRef.current?.focus();
        },0);
      };
    
    const disableInput = () => {
        setIsEditing(false);
      };
    
      
    const onChange = (event) => {
        setSearch(event.target.value);
      };
    
    const handleBack = () => {
        if (!buttonRef) return;
      
        buttonRef.current.classList.add('button-translate');

        buttonRef.current.style.transform = 'translateX(-100%)'; 
        setTimeout(()=> navigate('/'), 300)

    };

    const onSearch = ()=> {
        setSearchParams({search: search});
        disableInput();
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            setSearchParams({search: search});
            disableInput();
        }
    };
    

    const onOpen = ()=> setOpen(true);
    const onClose = () => setOpen(false);

    return ( 
        <>
        <CreateUserModal
        isOpen={open}
        onClose={onClose}
        />
        <div className={clsx(`
        w-full 
        flex 
        items-center 
        fixed 
        top-0 
        z-50 
        bg-white
        p-4
        `,
        scrolled && 'border-b shadow-sm'
        )}>
            <div className="
            flex 
            items-center 
            justify-between 
            md:justify-end 
            w-full 
            md:ml-auto 
            space-x-2
            
            ">  
                {!id && 
                (isEditing
                ?   <div className="flex items-center space-x-2">
                        <Input
                        ref={inputRef}
                        onClick={enableInput}
                        onBlur={disableInput}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={search}
                        placeholder={"Search by name..."}
                        className="h-7 max-w-60 px-2 focus-visible:ring-black focus-visible:ring-2"
                        />
                        {/* <Button 
                        secondary
                        onClick={onSearch}
                        type={'button'}>
                            <img src='/search.png' className='h-4 w-4 object-contain shrink-0' />
                        </Button> */}
                    </div> 
                :   <Button
                    onClick={enableInput}
                    secondary
                    type={'button'}>
                        Search
                    </Button>
                )}
                {!id && 
                <Button
                onClick={onOpen}
                type={'button'}>
                    Add User
                </Button>}
                {/* {!id && <Select
                label={"Sort:"}
                options={sort}
                onChange={(value)=> setSortState(value)}
                value={sortState}
                />} */}
            </div>
            {
                id && 
                <div className="rounded-full h-8 w-8">
                    <button 
                    onClick={handleBack}
                    ref={buttonRef}  className="hover:bg-neutral-100 border hover:border transition ease-out p-2 rounded-lg  hover:rounded-full ">
                        <img src="/back.png" alt="" />
                    </button>
                </div>
            }
        </div>
        </>
     );
}
 
export default Navbar;