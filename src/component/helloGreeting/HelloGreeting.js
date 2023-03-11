import DynamicGreeting from "../dynamicGreeting/DynamicGreeting";

const HelloGreeting = () => {
    return (
      <div style={{'width': '600px', 'margin': '0 auto'}}>
        <DynamicGreeting color={'primary'}>
          <h2>Hello World!</h2>
        </DynamicGreeting>
      </div>
    )
  }

  export default HelloGreeting;