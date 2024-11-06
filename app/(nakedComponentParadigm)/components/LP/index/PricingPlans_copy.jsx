// import "./PricingPlans.scss"

export default () => <>
    { /* Start Pricing Table Section */}
    <section className="PricingPlans">
        <h2>Pricing Plans</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos debitis.</p>

        <ul className="PricingPlans__PricingList01">
            <li>
                <h2>Starter Plan</h2>
                <div>49$ <span>/mo</span></div>
                <ul>
                    <li>Consectetur adipiscing</li>
                    <li>Nunc luctus nulla et tellus</li>
                    <li>Suspendisse quis metus</li>
                    <li>Vestibul varius fermentum erat</li>
                    <li> - </li>
                </ul>
                <a href="#">Get Plan</a>
            </li>

            <li className="big">
                <h2>Popular Plan</h2>
                <div>99$ <span>/mo</span></div>
                <ul>
                    <li>Consectetur adipiscing</li>
                    <li>Nunc luctus nulla et tellus</li>
                    <li>Suspendisse quis metus</li>
                    <li>Vestibul varius fermentum erat</li>
                    <li> - </li>
                </ul>
                <a href="#">Buy Now</a>
            </li>

            <li>
                <h2>Premium Plan</h2>
                <div>199$ <span>/mo</span></div>
                <ul>
                    <li>Consectetur adipiscing</li>
                    <li>Nunc luctus nulla et tellus</li>
                    <li>Suspendisse quis metus</li>
                    <li>Vestibul varius fermentum erat</li>
                    <li>Suspendisse quis metus</li>
                </ul>
                <a href="#">Buy Now</a>
            </li>
        </ul>
    </section>
    { /* End Pricing Table Section */}
</>