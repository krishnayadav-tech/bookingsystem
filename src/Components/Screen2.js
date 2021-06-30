import { useEffect, useState } from "react";

function Screen2(props){

    let [selected,changeSelected] = useState(null); // no item is selected initially
    let [rowcols,changeRowCols] = useState(""); // r0c0 // r0c1 
    let [item,changeItem] = useState(-1); // index 
    useEffect(()=>{
        document.querySelector(`.btn${props.region}`).classList.add("activebtn");
    })
    let changeRegion = (data)=>{
        document.querySelector(`.btn${props.region}`).classList.remove("activebtn");
        props.changeRegion(data);
    }

    let color = (random)=>{
        if(random === 0){
            return "red"
        }
        if(random === 1){
            return "green"
        }
        if(random === 2){
            return "brown"
        }
        return "transparent"
    }



    let cellClick = (e,rowcol,i,col)=>{

        if(col !== "transparent"){
            return;
        }
        e.target.backgroundColor = "blue";
        console.log(e.target);

        let change = (rowcol+ " C"+i);
        changeItem(i);
        changeRowCols(rowcol);
        changeSelected(change);
    }

    let cells = (rowcol)=>{
        // Ro_c0
        let buttons  = [];
        let value = [2,3,2,3,0,1,2,1,1,0,1,1,1,3,2,2,3,2,3,0,1,2,1,1,0];
        for(let i=0;i<25;i++){
            let random = value[i];
            if(rowcol === rowcols && i === item-1){
                buttons.push(<button style={{backgroundColor:"blue"}} onClick={(e)=>cellClick(e,rowcol,i+1,color(random))}  key={i} className="btn__cell" data2={rowcol} data={i+1} data3={random}>C{i+1}</button>)
            }else{
                buttons.push(<button onClick={(e)=>cellClick(e,rowcol,i+1,color(random))} style={{backgroundColor:color(random)}} key={i} className="btn__cell" data2={rowcol} data={i+1} data3={random}>C{i+1}</button>)
            }   
        }
        return buttons;
    }

    let submit = ()=>{
        if(selected === ""){
            return;
        }
        alert(selected + "booked");
        changeRegion(0);
    }

    return (
        <div className="screen2">
            <header className="screen2__header">
                <p className="screen2__info">Region</p>
                <button onClick={()=>changeRegion(1)} className="screen2_hbtn btn1">G1</button>
                <button onClick={()=>changeRegion(2)} className="screen2_hbtn btn2">G2</button>
                <button onClick={()=>changeRegion(3)} className="screen2_hbtn btn3">G3</button>
                <button onClick={()=>changeRegion(4)} className="screen2_hbtn btn4">G4</button>
            </header>

            <section className="screen2__main">
                <header className="screen2__mheader">
                    <p className="minfo">SELECT CELLS</p>
                    <p className="mselected">SELECTED CELLS {selected}</p>
                    <button onClick={()=>props.changeRegion(0)} className="btn btn--cancel">cancel</button>
                    <button onClick={submit} className="btn btn--submit">submit</button>
                </header>

                <div className="section__main">
                    <p className="section__main--head">Region {props.region}</p>
                    <div className="section__row">
                        <div className="cellwrap R0C0">
                            {cells("R0C0")}
                        </div>
                        <div className="cellwrap R0C1">
                            {cells("R0C1")}
                        </div>
                        <div className="cellwrap R1C0">
                            {cells("R1C0")}
                        </div>
                        <div className="cellwrap R1C1">
                            {cells("R1C1")}
                        </div>
                    </div>
                </div>

                
            </section>

            <div className="footer">
                <div className="wrap">
                    <span className="occu"></span>
                    <p>Occupied</p>
                </div>

                <div className="wrap">
                    <span className="avail"></span>
                    <p>Available</p>
                </div>

                <div className="wrap">
                    <span className="rese"></span>
                    <p>Reserved</p>
                </div>

                <div className="wrap">
                    <span className="spill"></span>
                    <p>SpillOver</p>
                </div>

                <div className="wrap">
                    <span className="sele"></span>
                    <p>Selected</p>
                </div>
            </div>
        </div>
    )
}

export default Screen2;