import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return (
            <div class="jumbotron">
    <h1 class="display-4">Organic</h1>
    <p class="lead">Please send an email to inquire more details about our company   or how to get involved in your local market trade!</p>

    {this.getEmailText() }          

    <button onClick={this.onButtonClicked} className="btn btn-primary btn-lg">
        {this.state.emailVisible ? "Hide Email" : "Show Email"}
    </button>
</div>
          );
    }

    getEmailText = () => {
        if (this.state.emailVisible){
            return (
                <div>
                    <a href="mailto:organic@mail.com">organic@mail.com</a>
                </div>
            );
        }

        
    };

    onButtonClicked = () => {
        this.setState({emailVisible: !this.state.emailVisible});
    }    
}
 
export default About;