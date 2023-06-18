const ProgressBar = ({progress}) => {
  const color = [
    'rgb(255, 214, 161)',
    'rgb(255, 175, 163)',
    'rgb(108, 115, 161)',
    'rgb(141, 214, 161)',
  ]
  const randomColor = color[Math.floor(Math.random()* color.length)]
    return (
      <div className="outer-bar">
        <div
        className="inner-bar"
        style={{width:`${progress}%`, backgroundColor: randomColor }}></div>
      </div>
    )
  }

  export default ProgressBar
