import icon from './../res/temp.svg'
function Screen(props){
    return (
        <div className="screen1">
            <h1 className="screen1__heading">Warehouse Location</h1>
            <div className="region">
                <p className="region__text">Select a region to view blocks</p>
                <div className="region__row region__row--first">
                    <button onClick={()=>props.changeRegion(1)} className="region__btn region__btn--g1">G1</button>
                    <img className="region__icon" src={icon} alt=""/>
                    <button onClick={()=>props.changeRegion(2)} className="region__btn region__btn--g2">G2</button>
                </div>
                <div className="region__row region__row--second">
                    <button onClick={()=>props.changeRegion(3)} className="region__btn region__btn--g3">G3</button>
                    <img className="region__icon" src={icon} alt=""/>
                    <button onClick={()=>props.changeRegion(4)} className="region__btn region__btn--g4">G4</button>
                </div>
            </div>
        </div>
    )
}
export default Screen;