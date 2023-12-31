import React from 'react'

const Card = (props) => {

  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <div className="container w-100">
                <select className="m-2 h-100 bg-success">
                    {Array.from(Array(6),(e,i)=>{
                        return (
                            <option key={i+1} value={i+1}> {i+1} </option>
                        )
                    })}
                </select>
                <select className="m-2 h-100 bg-success rounded">
                    {priceOptions.map((data)=>{
                      return <option key={data} value={data}>{data}</option>
                    })}
                </select>
                <div className="d-inline h-100 fs-5">
                    Total Price
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
