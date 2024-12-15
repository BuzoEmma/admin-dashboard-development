import React from 'react'
import Loader from '../../generalComponents/Loader'


const ReceiptModal = ({ visible, onClose, img }) => {

  const handleClose = (e) => {
    if(e.target.id === 'container') onClose()
  }

  const [receiptLoaded, setReceiptLoaded] = React.useState(false);

  if(!visible) {
    return null
  }

  return (
    <>
      <div id='container' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50
      flex justify-center items-center'>
        <div className='bg-white p-8 rounded lg:w-[600px] lg:h-[700px] md:w-[500px] md:h-[600px] w-full h-full'>
          <div className='flex justify-between items-center mb-5'>
            <h2 className='font-bold'>Proof of Payment</h2>
            <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer font-bold" onClick={onClose}>close</span>
          </div>
          <div className='w-full h-4/5 text-center'>

              {/* image loader */}
              {
                receiptLoaded === false ? <Loader /> : null
              }

            <img onLoad={() => setReceiptLoaded(true)} className='w-full h-full object-contain rounded' src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReceiptModal
