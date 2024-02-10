
import  { useRef, useState } from 'react'
import Modal from './modal'

import PropTypes from 'prop-types'
import { Input } from '../input/input'
import Button from '../button'


const CreateUserModal = ({
    isOpen,
    onClose
}) => {
    // const {user: authUser} = useCurrentUser()
    const [isLoading, setIsLoading] = useState(false)
    // const {register, handleSubmit, watch, setValue, formState:{errors}} = useForm({
    //     defaultValues:{
    //         username: currentUser?.username ,
    //         image: currentUser?.image,
    //         type: types.filter(type => type.value === currentUser.userType)[0]
    //     }
    //   })
    //   const image = watch('image')
    // const userType = watch('type')
      const fileRef = useRef(null)

    //   const onSubmit = async () => {
       
        // try{       
        //     setIsLoading(true);
        //     if(!data.image || data.image.startsWith('https://') ){
        //         await updateDoc(doc(db, 'users', currentUser?.uid),{
        //             username: data.username,
        //             userType: data.type.value
        //         })
        //     }else{
        //         const imageRef = ref(storage, `users/${currentUser?.uid}/profile`);
        //         await uploadString(imageRef, image, 'data_url').then( async () => {
        //             const downloadURL = await getDownloadURL(imageRef)
        //             await updateDoc(doc(db, 'users', currentUser?.uid),{
        //                 image: downloadURL,
        //                 username: data.username,
        //                 userType: data.type.value
        //             })
        //         });
        //     }
            
        //     onClose()
        //     toast.success("Upadated")
        // }catch(error){
        //     console.log(error)
        //     toast.error("Something went wrong")
        // }finally{
        //     setIsLoading(false)
        // }

    // } 

    // const addProfile = (e) => {
    //     const reader = new FileReader();
    //     if(e.target.files[0]){
    //         reader.readAsDataURL(e.target.files[0])
    //     }

    //     reader.onload = (readerEvent) => {
    //         setValue('image', readerEvent.target.result)
    //     }
    // }

  return (
    <Modal 
    isOpen={isOpen} 
    onClose={onClose}>
        <form onSubmit={()=>{}}>
            <div className='space-y-8'>
                <div className='
                border-b pb-4 border-gray-900/10
                '>  
                    <h2 className='
                    font-semibold
                    text-gray-900
                    leading-7
                    '>
                        Create user
                    </h2>
                    <p className='
                    text-sm text-gray-500 mt-1 leading-6
                    '>
                        Add new user
                    </p>
                </div>
                <div className='
                mt-10
                space-y-4'>
                    <Input
                    className="focus-visible:ring-black placeholder:text-[13px] focus-visible:ring-2"
                    placeholder="First name"
                    onChange={()=>{}}
                    type={"text"}
                    required
                    disabled={isLoading}
                    />
                    <Input
                    className="focus-visible:ring-black placeholder:text-[13px] focus-visible:ring-2"
                    placeholder="Last name"
                    onChange={()=>{}}
                    type={"text"}
                    required
                    disabled={isLoading}
                    />
                    <Input
                    className="focus-visible:ring-black placeholder:text-[13px] focus-visible:ring-2"
                    placeholder="Email address"
                    onChange={()=>{}}
                    type={"email"}
                    required
                    disabled={isLoading}
                    />
                    <Input
                    className="focus-visible:ring-black placeholder:text-[13px] focus-visible:ring-2"
                    placeholder="Street"
                    onChange={()=>{}}
                    type={"text"}
                    required
                    disabled={isLoading}
                    />
                    <Input
                    className="focus-visible:ring-black placeholder:text-[13px] focus-visible:ring-2"
                    placeholder="Suite"
                    onChange={()=>{}}
                    type={"text"}
                    required
                    disabled={isLoading}
                    />
                    <Input
                    className="focus-visible:ring-black placeholder:text-[13px] focus-visible:ring-2"
                    placeholder="City"
                    onChange={()=>{}}
                    type={"text"}
                    required
                    disabled={isLoading}
                    />
                    <Input
                    className="focus-visible:ring-black placeholder:text-[13px] focus-visible:ring-2"
                    placeholder="Company name"
                    onChange={()=>{}}
                    type={"text"}
                    required
                    disabled={isLoading}
                    />
                    
                    <div className="space-y-2 flex items-center gap-x-3">
                        <label className="text-sm font-medium leading-6 block">
                            Avatar
                        </label>
                        <div className="flex items-center gap-x-4">
                             
                            <input type="file" hidden ref={fileRef} onChange={()=>{}} />
                            <Button 
                            onClick={()=> fileRef.current.click()} 
                            disable={isLoading}
                            type="button"
                            secondary
                            >
                                Upload
                            </Button>
                            
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="
                        flex items-center justify-end
                        ">
                            <div className="flex items-center gap-x-2">
                                <Button 
                                disable={isLoading}
                                type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    </Modal>
  )
}

CreateUserModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
}
export default CreateUserModal