import React from 'react';

type ButtonPropsType = {
    nickName:string
    callBack:()=> void
}
const Button = (props:ButtonPropsType) => {
    const onClickHandler = ()=> {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler} > {props.nickName} </button>
        </div>
    );
};

export default Button;