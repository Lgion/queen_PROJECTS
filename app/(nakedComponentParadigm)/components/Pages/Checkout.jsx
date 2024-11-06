'use client'
import Link from "next/link";
import { useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer, useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId } from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter,HashRouter,Routes,Route,Link,NavLink,Prompt,Redirect,MemoryRouter,useParams,useHistory,useLocation,useRouteMatch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
import { doNeedMoreSample } from "../B5Elements"

// const SectionStyled = styled.section`
// `

export default ({ bem = "B5-Checkout", align = "checkout", wh = "72:57", imgSrc = "/b5/brand/bootstrap-logo.svg", $datas }) => {
    $datas = {
    }

    // const  moreSample= 8
    // $datas.cards = doNeedMoreSample($datas.cards,moreSample)

    return <section className={bem + ' B5-Heroes ' + align}>
        <img src={imgSrc} alt="" width={wh.split(":")[0]} height={wh.split(":")[1]} />
        <h1>Checkout form</h1>
        <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        <article className="row g-5">
            <section>
                <h2>
                    <span>Your cart</span>
                    <span>3</span>
                </h2>
                <ul>
                    <li>
                        <h3>Product name</h3>
                        <small>Brief description</small>
                        <span>$12</span>
                    </li>
                    <li>
                        <h3>Second product</h3>
                        <small>Brief description</small>
                        <span>$8</span>
                    </li>
                    <li>
                        <h3>Third item</h3>
                        <small>Brief description</small>
                        <span>$5</span>
                    </li>
                    <li className="text-success">
                        <h3>Promo code</h3>
                        <small>EXAMPLECODE</small>
                        <span>-$5</span>
                    </li>
                    <li>
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                    </li>
                </ul>

                <form>
                    <input placeholder="Promo code" />
                    <button>Redeem</button>
                </form>
            </section>
            <section>
                <h4>Billing address</h4>
                <form>
                    <fieldset className="col-sm-6">
                        <input id="firstName" required />
                        <label htmlFor="firstName">First name</label>
                        <div>Valid first name is required.</div>
                    </fieldset>

                    <fieldset className="col-sm-6">
                        <input id="lastName" required />
                        <label htmlFor="lastName">Last name</label>
                        <div>Valid last name is required.</div>
                    </fieldset>

                    <fieldset className="col-12 input-group">
                        <span>@</span>
                        <input id="username" placeholder="Username" required />
                        <label htmlFor="username">Username</label>
                        <div>Your username is required.</div>
                    </fieldset>

                    <fieldset className="col-12">
                        <label htmlFor="email">Email <span>(Optional)</span></label>
                        <input type="email" id="email" placeholder="you@example.com" />
                        <div>Please enter a valid email address for shipping updates.</div>
                    </fieldset>

                    <fieldset className="col-12">
                        <label htmlFor="address">Address</label>
                        <input id="address" placeholder="1234 Main St" required />
                        <div>Please enter your shipping address.</div>
                    </fieldset>

                    <fieldset className="col-12">
                        <label htmlFor="address2">Address 2 <span>(Optional)</span></label>
                        <input id="address2" placeholder="Apartment or suite" />
                    </fieldset>

                    <fieldset className="col-md-5">
                        <label htmlFor="country">Country</label>
                        <select id="country" required>
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div>Please select a valid country.</div>
                    </fieldset>

                    <fieldset className="col-md-4">
                        <label htmlFor="state">State</label>
                        <select id="state" required>
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                        <div>Please provide a valid state.</div>
                    </fieldset>

                    <fieldset className="col-md-3">
                        <input id="zip" placeholder="" required />
                        <label htmlFor="zip">Zip</label>
                        <div>Zip code required.</div>
                    </fieldset>

                    <hr />

                    <fieldset className="form-check">
                        <label htmlFor="same-address">Shipping address is the same as my billing address</label>
                        <input type="checkbox" id="same-address" />
                    </fieldset>

                    <fieldset className="form-check">
                        <label htmlFor="save-info">Save this information for next time</label>
                        <input type="checkbox" id="save-info" />
                    </fieldset>

                    <hr />

                    <h4 className="mb-3">Payment</h4>

                    <div className="my-3">
                        <fieldset className="form-check">
                            <label htmlFor="credit">Credit card</label>
                            <input id="credit" name="paymentMethod" type="radio" checked={true} required />
                        </fieldset>
                        <fieldset className="form-check">
                            <label htmlFor="debit">Debit card</label>
                            <input id="debit" name="paymentMethod" type="radio" required />
                        </fieldset>
                        <fieldset className="form-check">
                            <label htmlFor="paypal">PayPal</label>
                            <input id="paypal" name="paymentMethod" type="radio" required />
                        </fieldset>
                    </div>

                    <div className="row gy-3">
                        <div className="col-md-6">
                            <label htmlFor="cc-name">Name on card</label>
                            <input id="cc-name" placeholder="" required />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div>Name on card is required</div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="cc-number">Credit card number</label>
                            <input id="cc-number" placeholder="" required />
                            <div>Credit card number is required</div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-expiration">Expiration</label>
                            <input id="cc-expiration" placeholder="" required />
                            <div>Expiration date required</div>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="cc-cvv">CVV</label>
                            <input id="cc-cvv" placeholder="" required />
                            <div>Security code required</div>
                        </div>
                    </div>

                    <hr />

                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                </form>
            </section>
        </article>
    </section>
}