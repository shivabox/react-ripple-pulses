import styled, { keyframes } from 'styled-components'

const LightenColor = function (color, sec) {
    if (sec === "pri") return color + "8f";
    else return color + "00"
};

const renderPulse = (color, size) => {
    console.log(color, size)
    return (keyframes`
0% {
    box-shadow: 0px 0px 5px 0px  ${color ? LightenColor(color, "pri") : "#ff5c7c8f"};
  }

  65% {
    box-shadow: 0px 0px 5px ${size ? size + "px" : "12px"} ${color ? LightenColor(color, "pri") : "#ff5c7c8f"};
  }

  90% {
    box-shadow: 0px 0px 5px ${size ? size + "px" : "12px"} ${color ? LightenColor(color, "sec") : "#ff5c7c00"};
  }
`
    )
}

const Ripple = styled.button`
    width: ${props => props.size ? props => props.size + "px" : "12px"};
    height: ${props => props.size ? props => props.size + "px" : "12px"};
    font-size: 0;
    background-color: ${props => props.color ? props => props.color : "#ff5c7c"};
    border: 0;
    border-radius: 50%;
    outline: none;
    animation-name: ${props => renderPulse(props.color, props.size)};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    cursor: not-allowed;
`

const Ripples = (props) => {

    return (
        <Ripple color={props.color ? props.color : undefined} size={props.size ? props.size : undefined} />
    )
}

export default Ripples;