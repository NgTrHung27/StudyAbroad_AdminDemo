import React from 'react'

const ChiTietRow = ({ col1, col2, col3, col4, col5, col6 }) => {
    return (
        <>
            <tr>
                <td
                    className='font-bold w-[40%] rounded-t-[40px] '>{col1}</td>
                <td className='w-[14%] '>{col2}</td>
                <td className='w-[14%]'>{col3}</td>
                <td className='w-[14%]'>{col4}</td>
                <td className='w-[14%]'>{col5}</td>
                <td className='w-[14%] rounded-b-[40px]'>{col6}</td>
            </tr>

        </>
    )
}

export default ChiTietRow