import React, { Component } from 'react';
import './App.css';


// get posts from online api
// it's return a json file
class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        fetch("/api/products") 
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                  <h1>Products</h1>
                    <ol className="item">
                    {
                        posts.products.map(post => (
                            <li key={post.name} align="start">
                                <div>
                                    <p className="title">{post.name}</p>
                                    {/* <p className="body">product_id: {post.product_id}</p> */}
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }

class GetBatchIngredients extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }

    componentDidMount(){
        fetch("/api/batch_ingredients") 
        .then( response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                  <h1>Batch Ingredients</h1>
                    <ol className="item">
                    {
                        posts.batch_ingredients.map(post => (
                            <li key={post.name} >
                                <div>
                                    <h2><p className="title">{post.name}</p></h2>
                                    <p className="body">Quantity used (kg): {post.quantity_kg}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }
      
    }
  }
  

  export default GetBatchIngredients;
