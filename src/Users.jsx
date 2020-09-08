import React, { Suspense } from 'react'
//import Table from './Table';
import ButtonComponent from './ButtonComponent';
const Table = React.lazy(() => import('./Table')); // Lazy-loaded

class Users extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            usersList: [{id:1, name: "John Snow", house: "Targaryen", castle: "Castle Black"}, 
                        {id:2, name: "Rob Stark", house: "Stark", castle: "Winterfell"},
                        {id:3, name: "Arya Stark", house: "Stark", castle:"Winterfell"}, 
                        {id:4, name: "Sansa Stark", house: "Stark", castle: "Winterfell"},
                        {id:5, name: "Daenerys Targaryen", house: "Targaryen", castle: "Dragonstone"}]
        }
    }

    render() {
        const {stark, targaryen} = this.getFilteredTableData();
        return <div style={{border: "solid 2px green"}}>
            <SearchBox searchTextChange = {this.searchTextChange} searchText = {this.state.searchText}/>
            <Suspense fallback={<React.Fragment><br/><span>Loading....</span></React.Fragment>}>
                <Table stark = {stark} targaryen = {targaryen}/>
            </Suspense> 
            {/* <ButtonComponent /> */}
        </div>
    }

    /* <Suspense fallback={<React.Fragment><br/><span>Loading....</span></React.Fragment>}>
            <Table stark = {stark} targaryen = {targaryen}/>
        </Suspense>     */
    /* <ButtonComponent /> */
    /* {this.nonComponent()} */

    searchTextChange = (text) =>{
        this.setState({
            searchText: text
        })
    }

    getFilteredTableData = () =>{
        let stark =[];
        let targaryen = [];
        this.state.usersList.forEach(item => {
            if(this.state.searchText === "" || item.name.indexOf(this.state.searchText) > -1){
                if(item.house === "Stark") {
                    stark.push(item)
                } else if(item.house === "Targaryen") {
                    targaryen.push(item)
                }
            }
        });

        return {stark: stark, targaryen: targaryen};
    }   

    nonComponent = () =>{
        return <span>Non component part</span>
    }
}

const SearchBox = React.memo((props) =>{
    return <input type = "text" value={props.searchText} 
                style ={{minHeight: "25px", minWidth: "340px"}}
                placeholder= "Search"
                onChange = {(e)=>{             
                    props.searchTextChange(e.target.value)
                }} 
            />;
});

export default Users;