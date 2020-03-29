import React, { Component } from 'react';

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
        fetch("/api/batchIngredients") 
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
                        posts.batchIngredients.map(post => (
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
