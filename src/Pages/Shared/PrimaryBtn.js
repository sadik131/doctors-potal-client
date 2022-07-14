import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
            <button className="btn text-white border-none bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] ">{children}</button>
        </div>
    );
};

export default PrimaryBtn;