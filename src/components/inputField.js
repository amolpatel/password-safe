import React from 'react';

const InputField = props => {

    return (
        <div>
          <form className="form-signin">
            <input
                type={props.type}
                onChange={props.inputAction}
                id={props.id}
                className="form-control"
                style={props.style}
                placeholder={props.label}
                />
          </form>

        </div>
    );

};

export default InputField;