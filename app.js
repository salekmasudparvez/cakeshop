function changeContent(page) {
    // You can load content dynamically based on the selected page
    var contentDiv = document.getElementById('content');
    
    // Simulating content change for demonstration purposes
    if (page === 'home') {
        contentDiv.innerHTML = `<h2>Welcome to the Cake Shop</h2>`;
    } else if (page === 'menu') {
        contentDiv.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="./images/birthday-cake-birthday-svgrepo-com.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Cake</h5>
          <p class="card-text">Testy and delicious cake.</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="./images/birthday-cake-birthday-svgrepo-com.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Cake</h5>
          <p class="card-text">Testy and delicious cake.</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img src="./images/birthday-cake-birthday-svgrepo-com.svg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Cake</h5>
          <p class="card-text">Testy and delicious cake.</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>
`
    } else if (page === 'pricing') {
        contentDiv.innerHTML = `<div class="pricing-card">
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
    </div>`;
    }
    else if (page === 'contact') {
        contentDiv.innerHTML = `<form>
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
      </form>`;
    }
}
