class GroceryList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          done: false
      };
    }

    onListItemClick(){
        this.setState({
            done: !this.state.done
        });
    }
    render(){
        var style = {
            'font-weight': this.state.done ? 'bold' : 'normal'
        };

        return (
          <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
        );
    }
}

const Grocery = (prop) => (
  <ul>
      {prop.items.map(item=><GroceryList item={item} />)}
  </ul>
);

const App = () =>(
  <div id="app">
      <h2>My grocery list</h2>
      <Grocery items={buy}/>
  </div>
);

var buy = [];

const addList = function(){
   for(let i=0;i<2;i++){
     let item = prompt("Add a couple of items to the list");
     buy.push(item);
   }
}

addList();
ReactDOM.render(<App/>, document.getElementById('app'));