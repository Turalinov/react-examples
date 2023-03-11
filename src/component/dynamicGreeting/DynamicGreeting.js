import React from "react";

const DynamicGreeting = (props) => {
    return (
      <div className={'mb-3 p-3 border border-' + props.color}>
        
        {
          React.Children.map(props.children, child => {
            if (child.props.className) {
              return React.cloneElement(child, {className : 'shadow p-3 m-3 border rounded ' + child.props.className})
            } else {
              return React.cloneElement(child, {className : 'shadow p-3 m-3 border rounded '})
            }
          })
        }
      </div>
    )
  }

  export default DynamicGreeting;