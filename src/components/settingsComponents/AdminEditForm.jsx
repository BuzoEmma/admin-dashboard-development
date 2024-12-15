import React, { useState } from 'react'
import axios from 'axios'
import DropzoneArea from './DropzoneArea'

const AdminEditForm = ({ adminImg }) => {

    const ApiUrl = import.meta.env.VITE_API_KEY;

  const [imgfiles, setImgFiles] = useState([]);
  const [adminPhoto, setAdminPhoto] = useState(adminImg)

  const displayAdminPhoto =(url)=> {
    setAdminPhoto(url)
  }

  const uploadImg = (e) => {
    const formData = new FormData(e.currentTarget);

    formData.append(`photo${imgfiles.length}`, imgfiles[imgfiles.length - 1])

    formData.append('data', '{"description": "profilePicture", "addWatermark": false}')

    axios.post(ApiUrl + '/utility/save-image', formData)
    .then(res => {
        localStorage.setItem('adminImg', JSON.stringify(res?.data?.data[0]?.link));

        displayAdminPhoto(res?.data?.data[0]?.link)

    }).catch(err => {
        console.log(err)
    })


    e.currentTarget.reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(imgfiles) {
        uploadImg(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <label className='flex justify-between items-center mb-10'>
            <p className='font-normal text-xs text-[#4E527B]'>Name</p>
            <div className=''>
                <input required className='border mr-1 px-2 py-1 rounded w-48 outline-none' type="text" id='firstname' name="firstname" placeholder='First Name' />
                <input required className='border px-2 py-1 rounded w-48 outline-none' type="text" id='lastname' name='lastname' placeholder='Last Name' />
            </div>
        </label>

        <hr className='mb-2' />

        <label className='flex justify-between items-center mb-10'>
            <p className='font-normal text-xs text-[#4E527B]'>Email</p>
            <input required type="text" className='border px-2 py-1 rounded w-96 outline-none' id='email' name="email" placeholder='firstname@gmail.com' />
        </label>

        <hr className='mb-2' />

        <div className='flex justify-between'>
            <div>
                <p className='font-normal text-xs text-[#4E527B]'>Your Photo</p>
                <small className='font-thin text-xs text-[#71759D]' style={{fontSize: '11px'}}>This photo will be displayed on your profile</small>
            </div>
        
            <div>
                <div className="flex items-start">
                    <div>
                        <img className=' w-24 h-24 rounded-full' src={adminPhoto} alt="" />
                    </div>

                    <div>
                        <DropzoneArea setImgFiles={setImgFiles} className='p-16 mt-10 border border-neutral-200 mb-2 text-neutral-400' />

                        <div className="submit-buttons">
                            <button className='mr-3 text-xs border text-[#1B49FF] px-6 py-2 rounded '>Cancle</button>
                            {<button className='text-xs bg-[#1B49FF] text-white px-6 py-2 rounded-tl rounded-tr' type='submit'>Save Changes</button>}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </form>
  )
}

export default AdminEditForm
