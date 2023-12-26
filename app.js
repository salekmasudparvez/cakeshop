function changeContent(page) {
    // You can load content dynamically based on the selected page
    var contentDiv = document.getElementById('content');
    
    // Simulating content change for demonstration purposes
    if (page === 'home') {
        contentDiv.innerHTML = `<div><h2 class="text-white d-flex justify-content-center aling-item- center align-items-center">Welcome to the Cake Shop</h2>
        <figure class="m-3">
        <blockquote class="blockquote">
          <p>"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</p>
        </blockquote>
        <figcaption class="blockquote-footer text-light">
        Martin Fowler
        </figcaption>
      </figure>
      </div>
       `
    } else if (page === 'menu') {
        contentDiv.innerHTML = `<div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0 " >
       
          <div class="card">
          <img  src="./images/birthday-cake-birthday-svgrepo-com.svg" class="img" >
            <div class="card-body">
              <h5 class="card-title">Birthday Cake-1</h5>
              <p class="card-text">Cake is a delightful and indulgent dessert that comes in various flavors, textures, and styles.</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
          <img  src="./images/birthday-cake-cake-svgrepo-com.svg" class="img" >
            <div class="card-body">
              <h5 class="card-title">Birthday Cake-2</h5>
              <p class="card-text">Cake is a delightful and indulgent dessert that comes in various flavors, textures, and styles.</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
    <img  src="./images/birthday-cake-svgrepo-com.svg" class="img">
      <div class="card-body">
        <h5 class="card-title">Birthday Cake-3</h5>
        <p class="card-text">Cake is a delightful and indulgent dessert that comes in various flavors, textures, and styles.</p>
        <a href="#" class="btn btn-primary">Buy</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
    <img  src="./images/birthday-cake-birthday-svgrepo-com.svg" class="img" >
      <div class="card-body">
        <h5 class="card-title">Birthday Cake-4</h5>
        <p class="card-text">Cake is a delightful and indulgent dessert that comes in various flavors, textures, and styles.</p>
        <a href="#" class="btn btn-primary">Buy</a>
      </div>
    </div>
  </div>
</div>
    `;
    }
    else if (page === 'pricing') {
        contentDiv.innerHTML = `
        <div class="pricing">
        
        <div class="pricing-card">
        <div class="card-inner">
            <div class="card-front">
                <h2>Basic Plan</h2>
                <p>$19.99/month</p>
            </div>
            <div class="card-back">
                <h2>Basic Plan</h2>
                <p>$19.99/month</p>
                <ul>
                    <li>Free Delivary</li>
                    <li>20% Discount</li>
                    <li>Cash Back </li>
                </ul>
                <a href="#" class="btn btn-secondary">Subscribe</a>
            </div>
        </div>
    </div>

    </div>`;
    }
    else if (page === 'contact') {
        contentDiv.innerHTML = `
      <div class="form">
        <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Comments</label>
          <input type="text" class="form-control p-3" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>`;
    }
}
