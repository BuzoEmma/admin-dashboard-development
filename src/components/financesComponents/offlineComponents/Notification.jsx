import React from 'react'

const Notification = ({img, title, text, show, setShowNotification}) => {
  return (
      <div className={`${show ? 'show-offline-notification' : 'hide-offline-notification'} fixed inset-0 flex justify-between  ml-auto mt-20 mr-2 items-start bg-[#F7F7F7] p-3 rounded-lg`} style={{width: '330px', height: '80px'}}>
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h3 className=' font-semibold'>{title}</h3>
          <p className=' text-xs'>{text}</p>
        </div>
        <div>
          <span onClick={() => setShowNotification(false)} className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer font-bold">close</span>
        </div>
      </div>
  )
}

export default Notification
