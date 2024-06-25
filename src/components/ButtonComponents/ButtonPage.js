import React from 'react';

const ButtonPage = ({ status = 'Pending' }) => {
  const statusColor = {
    new: 'bg-[#1DAAAF]',
    Pending: 'bg-yellow-500',
    Processing: 'bg-[#0073B7]',
    Fulfilled: 'bg-[#DD4B39]',
    Completed: 'bg-[#43916F]',
    cancel: 'bg-[#FF851B]',
    OnHold: 'bg-[#F012BE]',
    Backordered: 'bg-[#001F3F]',
    Invoiced: 'bg-[#605CA8]',
  };

  const backgroundColor = statusColor[status] || 'bg-yellow-500';

  return (
    <div className={`text-xs ${backgroundColor} text-center w-full text-white px-2 py-[2px] capitalize`}>
      {status}
    </div>
  );
};

export default ButtonPage;