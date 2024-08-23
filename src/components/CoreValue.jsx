import React from 'react'
import { core_values, ethics, honesty, integrity, trust, service_24 } from '../assets';

const CoreValue = () => {
  const columns = [
    { id: 1, number: '01', title: 'Values', imageUrl: core_values, bgColor: '#D81159' },
    { id: 2, number: '02', title: 'Ethics', imageUrl: ethics, bgColor: '#8F2D56' },
    { id: 3, number: '03', title: 'Honesty', imageUrl: honesty, bgColor: '#218380' },
    { id: 4, number: '04', title: 'Trust', imageUrl: trust, bgColor: '#FBB13C' },
    { id: 5, number: '05', title: 'Integrity', imageUrl: integrity, bgColor: '#73D2DE' },
    { id: 6, number: '06', title: '24/7', imageUrl: service_24, bgColor: '#FFE500' },
  ];

  return (
    <React.Fragment>
      <div className='flex items-center justify-center w-[100%] sm:flex-row flex-col'>
        <div className="grid grid_value sm:grid-cols-6 grid-cols-3">
          {columns.map((col, index) => (
            <div key={col.id} className={`column ${index >= 3 && index < 6 ? 'justify-self-center' : ''}`}>
              <img src={col.imageUrl} alt={`Title ${col.number}`} className='core_img' />
              <div className="arrow-and-number">
                <div className='arrow'></div>
                <div className='number' style={{ backgroundColor: col.bgColor }}>{col.number}</div>
              </div>
              <h2 className='core_text'>{col.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CoreValue
