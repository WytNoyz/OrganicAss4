import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    state = {  }
    render() { 
        return (
            <div class="jumbotron">
  <h1 class="display-4">Welcome to Organic</h1>
  <p class="lead">Here you will find the most fresh local produce available within the area.  We get 4 daily direct deliveries in smaller portions to ensure our product is always fresh!</p>
  <hr class="my-4"></hr>
  <p>You can also set up a time that is most convenient for you to pick up your order and we will plan you and your groceries from the most recent delivery.  How's that for FRESH?! </p>
  <Link class="btn btn-primary btn-lg" to="/catalog" role="button">Check out our Catalog!</Link>
</div>
          );
    }
}
 
export default Home;