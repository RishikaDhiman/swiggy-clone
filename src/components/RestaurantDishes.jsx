import React from 'react'
import ItemsList from './ItemsList';

class RestaurantDishes extends React.Component{
    constructor(props){
        // you need to call super() inside the constructor to call the constructor of the parent class (the superclass).
        // super(props), you ensure that the parent class's constructor is properly initialized with the props passed to your component.
        super(props);
        // console.log("category");
        // console.log(this.props.category);

        // this.state = {
        //     showItems : false,
        // }

    }
    render(){
        // you have to use this keyword when using props example this.props.name #282c3f

        const {cat,showItems,setShowIndex} = this.props;
        const itemCards = cat.card.card.itemCards;
        console.log(cat)

        const handleClick=()=>{
            console.log("clicked!!")
            // this.setState({showItems: !this.state.showItems})
            setShowIndex();
        }

        
        
        return(
            <div className='restaurantDishes'>
                {
                    itemCards && <div style={{padding: "15px", margin:"20px 0px", backgroundColor:"#e4e6ed"}}>
                        <div style={{justifyContent:"space-between", display:"flex", alignItems:"center", cursor:"pointer"}}
                        onClick={()=>handleClick()}>
                        <h3>{`${cat.card.card.title} (${itemCards.length})`}</h3>
                        <i className="fa-solid fa-arrow-down"></i>
                        </div>
                            { 
                                showItems && <ItemsList itemCards={itemCards}/>
                            }
                    </div> 
                }
            </div>
        )
    }
}

export default RestaurantDishes;