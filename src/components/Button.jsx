import React from "react";
import classNames from "classnames";

const Button = ({ children,bgcolor='white', text='black',className, ...args }) => {
  return (
    <button
      className={classNames(
        'w-[300px] h-[40px] border border-black/25 rounded-3xl flex items-center p-2 '
        ,{ 'bg-white': bgcolor == 'white',
            'bg-blue':bgcolor=='blue',
            'text-black':text=='black',
            'text-white':text=='white',
          


            
          
          } )}
        
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
