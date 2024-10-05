'use client'
import { auth, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useAuth, useUser } from "@clerk/nextjs"


const $svg = "M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"
, $anchor = ["#","Content Text"]
, $anchorSvg = [...$anchor, [$svg]]


export function doNeedMoreSample($datas,sampleNth){ //Utilities
    if(sampleNth)while($datas.length<sampleNth)$datas.push($datas[0])
    return $datas
}
export function DefaultSvgPath(){ //Utilities_Features_svg
    return <path d={$svg} />
} 
export function SvgPaths({viewBox,pathsArray}){ //Utilities_Features_svg
    // console.log(pathsArray)
    return <svg viewBox={viewBox}>{
        pathsArray?.map((pathItem,i) => typeof pathItem=="string"
            ? <path key={i} d={pathItem} />
            : Array.isArray(pathItem)
                ? <path key={i} {...pathItem[0]} d={pathItem[1]} />
                : pathItem instanceof Object 
                    ? Object.keys(pathItem).map((item,i) => {
                        switch(item){
                            case"rect":
                                return <rect key={i} {...pathItem[item].props} />
                            case"title":
                                return <title key={i} {...pathItem[item].props}>{pathItem[item].content}</title>
                            case"text":
                                return <text key={i} {...pathItem[item].props}>{pathItem[item].content}</text>
                            default:
                                return <rect key={i} {...pathItem[item].props} />
                        }
                    })
                    : <span>donnée svg incorrecte</span>
        ) 
        || <DefaultSvgPath />
    }</svg>
    return <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
} 
export function ImgXorSvg({item,svgForceDefault}){
    return <>{
        item.img && !svgForceDefault
            ? <img src={item.img.imgSrc} alt={item.img.alt} />
            : item.svg
                ? <SvgPaths pathsArray={item.svg} />
                : <svg><DefaultSvgPath /></svg>
    }</>
}
function UNC(className="",eltName=""){ //Utilities_Navbars_className
    return className.split(' ')[0]+"__"+eltName+" "+className.split(' ')?.[1]
} 

export function NavbarsBtnHambergur({className="B5-HeaderNavbar never"}){
    return <button className={UNC(className,'hamburgerBtn')}
        onClick={e => {
            const target = e.target.nodeName=="SPAN" ? e.target.closest('button') : e.target
            target.classList.toggle('active')
        }}
        // aria-controls="navbarCollapse"
        // aria-expanded="false"
        // aria-label="Toggle navigation"
    >
        <span />
    </button>
}
export function NavbarsNav(className="B5-HeaderNavbar never"){
    return <ul className={UNC(className,"nav")}>
        {
            ["Home", "Link", "Disabled"]
                .map((item, i) => <li key={"navbar__nav__"+i}>
                    <a className={i == 0 ? "active" : ""} aria-current="page" href="#">{item}</a>
                    {/* <a className="disabled">Disabled</a> */}
                </li>
                )
        }
        <li className="dropdown">
            <DropBox />
        </li>
        <li>
            <SearchBox />
        </li>
    </ul>
}



export function LinkSvg({anchor=$anchorSvg,viewBox="0 0 24 24",}){
    return <a href={anchor[0]} >
        <SvgPaths viewBox={viewBox} pathsArray={anchor[2]}/>
        <span>{anchor[1]}</span>
    </a>
}
export function Logo01({wh="40:32",slogan="Simple header",href="/",imgSrc="next.svg"}){
    return <a href={href}>
        
        {imgSrc?<img width={wh.split(":")[0]} height={wh.split(":")[1]} src={"/"+imgSrc} alt={slogan} />:<svg width={wh.split(":")[0]} height={wh.split(":")[1]}><use href={"#bootstrap"} /></svg>}
        <span>{slogan}</span>
    </a>
}
export function NavLinks01({links=[["Home","#"],["Features","#"],["Pricing","#"],["FAQs","#"],["About","#"],]}){
    return <ul>
        {links.map((item,i) => <li key={"navpill__item__"+i}>
            <a className={i == 0 ? "active" : ""} {...(i==0?{"aria-current":"page"}:{})} href={item[1]}>{item[0]}</a>
            {/* <a className="disabled">Disabled</a> */}
        </li>)}
    </ul>
}
export function NavLinks02Icons({links=[["Home","#"],["Features","#"],["Pricing","#"],["FAQs","#"],["About","#"],]}){
    return <ul>
        {links.map((item,i) => <li key={"navpill__item__"+i}>
            <a className={i == 0 ? "active" : ""} {...(i==0?{"aria-current":"page"}:{})} href={item[1]}>
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use href="#home" /></svg>
                {item[0]}
            </a>
            {/* <a className="disabled">Disabled</a> */}
        </li>)}
    </ul>
}
export function DropBox({
    $datas = {
        anchor: ["#","Sample Text"]
        , img: {imgSrc:"b5.png",alt:"img alt text"}
        , list: [["Action","#"], ["Another action","#"], [""],["Somthing else here","#"]]
        , events: {onClick: e => {alert('ok')}}
    },
}) {
    // const id = "dropdown"+(Math.ceil(Math.random()*100))
    const id = false
    , ariaExpanded = false
    // console.log(events)
    return <>
        <a  href={$datas.anchor[0]}
            onClick={e => {
                let bool = false
                if(e.target.classList.contains('active')){
                    bool =! bool
                }
                e.target.closest('header').querySelectorAll("a.active").forEach((item) => {item.classList.remove('active')})
                if(bool)e.target.classList.remove('active')
                else e.target.classList.add('active')
            }}
            // onBlur={e => {e.target.classList.remove('active')}}
            id={id}
            aria-expanded={ariaExpanded}
        >
            {$datas.img?.[2]?.imgSrc?<img src={$datas.img[2].imgSrc} alt={$datas.img[2].alt} />:<strong>{$datas.anchor?.[1]}</strong>}
        </a>
        <ul aria-labelledby={id}>
            {
                ($datas.list||[["Action","#"], ["Another action","#"], [""],["Somthing else here","#"]])
                    .map((item, i) => <li key={id +"_"+ i} {...$datas.events}>
                        {(item==""||item[0]==""||item[0]==undefined) ?<hr className="dropdown-divider" />:<a href={item[1]}>{item[0]}</a>}
                    </li>)
            }
        </ul>
    </>
}
export function SearchBox(){

    return< form>
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">🔎</button>
    </form>
}
export function LogSignInOut(){

    return <form>
        <button type="button">Login</button>
        <button type="button">Sign-up</button>
    </form>
}
export function LogSignInOutClerk(){
    const { isLoaded, userId, sessionId, getToken } = useAuth()
    const { isSignedIn, user } = useUser()
    // const { userId } = auth()

    // if (!userId)
    if (!isLoaded)
        return <>
            <SignInButton />
            <SignUpButton />
        </>
    return <UserButton />
}
export function FeaturesList01({
    $datas = [
        {
            svg: ["M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"]
            , title: "Featured title"
            , text: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
            , anchor: ["#","Call to action"]
        }
        , {
            svg: ["M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z", [{fillRule:"evenodd"}, "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"]]
            , title: "Featured title"
            , text: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
            , anchor: ["#","Call to action"]
        }
        , {
            svg: ["M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z", "M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z","M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"]
            , title: "Featured title"
            , text: "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words."
            , anchor: ["#","Call to action"]
        }
    ]
    , moreSample= null
}){
    console.log(moreSample)
    $datas = doNeedMoreSample($datas,moreSample)
    return <ul>
        {$datas.map((item,i) => <li key={i}>
            <i>
                <svg viewBox="0 0 16 16">{
                    item?.svg?.map((item_,i) => Array.isArray(item_)
                        ? <path  key={i} {...item_[0]} d={item_[1]} />
                        : <path  key={i} d={item_} />
                    ) || <DefaultSvgPath key={i} />
                }</svg>
            </i>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <a href={item.anchor[0]}>
                {item.anchor[1]}
                <svg><path fillrule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
            </a>
        </li>)}
    </ul>
}
export function FeaturesList02Cards({
    $datas = [
        {
            title: "Short title, long jacket"
            , bg: "unsplash-photo-1.jpg"
            , list: [
                {imgSrc: "b5.png",alt:"b5",wh:"33:33"}
                , {small:"Earth", svg:[[{"fill-rule":"evenodd"}, "M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"]]}
                , {small:"3d", svg:["M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z", "M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"]}
            ]
        }
        , {
            title: "Much longer title that wraps to multiple lines"
            , bg: "unsplash-photo-2.jpg"
            , list: [
                {imgSrc: "b5.png",alt:"b5",wh:"33:33"}
                , {small:"Earth", svg:[[{"fill-rule":"evenodd"}, "M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"]]}
                , {small:"3d", svg:["M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z", "M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"]}
            ]
        }
        , {
            title: "Another longer title belongs here"
            , bg: "unsplash-photo-3.jpg"
            , list: [
                {imgSrc: "b5.png",alt:"b5",wh:"33:33"}
                , {small:"Earth", svg:[[{"fill-rule":"evenodd"}, "M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"]]}
                , {small:"3d", svg:["M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z", "M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"]}
            ]
        }
    ]
    , moreSample= null
}){
    $datas = doNeedMoreSample($datas,moreSample)
    return <ul>
        {$datas?.map((item,i) => <li key={i} style={{"backgroundImage":"url("+(item?.bg||"next.svg")+")"}}>
            <h2>{item.title}</h2>
            <ul>
                {item?.list?.map((listItem,j) => <li key={j}>
                    {listItem.imgSrc 
                    ? <img src={listItem.imgSrc||"https://github.com/twbs.png"} alt={listItem.alt||"Bootstrap"} width={listItem?.wh.split(':')[0]||"32"} height={listItem?.wh.split(':')[1]||"32"} />
                    : <>
                        {<SvgPaths viewBox="0 0 16 16" pathsArray={listItem?.svg} />}
                        <small>{listItem.small||"Earth"}</small>
                    </>
                }
                </li>)}
            </ul>
        </li>)}
    </ul>
}
export function PricingList01({
    options = {
        currency: "$"
        , every: "mo"
    }
    , $datas = [
        {
            plan: "Free"
            , price: 0
            , list: [
                "10 users included"
                , "2 GB of storage"
                , "Email support"
                , "Help center access"
            ]
            , cta: "Sign up for free"
        }
        , {
            plan: "Pro"
            , price: 0
            , list: [
                "20 users included"
                , "10 GB of storage"
                , "Priority email support"
                , "Help center access"
            ]
            , cta: "Get Started"
        }
        , {
            plan: "Entreprise"
            , price: 29
            , list: [
                  "30 users included"
                , "15 GB of storage"
                , "Phone and email support"
                , "Help center access"
            ]
            , cta: "Contact us"
        }
    ]
    , moreSample= null
}){
    $datas = doNeedMoreSample($datas,moreSample)
    return <ul>
        {$datas.map((item,i) => <li key={i}>
            <h4>{item.plan}</h4>
            <h2>{options.currency||"$"}{item.price}<small>/{options.every||"mo"}</small></h2>
            <ul>{item.list.map((item_,j) => <li key={j}>{item_}</li>)}</ul>
            <button>{item.cta}</button>
        </li>)}
    </ul>
}
export function PricingsList02TableCompare({
    options = ["Free","Pro","Entreprise"]
    , $datas = [
        "",
        {"Public":[true,true,true]}
        ,{"Private":[false,true,true]}
        ,""
        ,{"Permissions":[true,true,true]}
        ,{"Sharing":[false,true,true]}
        ,{"Unlimited members":[false,true,true]}
        ,{"Extra security":[false,false,true]}
    ]
    , moreSample= null
}){
    $datas = doNeedMoreSample($datas,moreSample)
    return <table>
        <thead>
            <tr>
                <th></th>
                {options.map((item,i) => <th key={i}>{item}</th>)}
            </tr>
        </thead>
        <tbody>
            {$datas.map((item,i) => item==""
                ? <tr key={i} className='sep'></tr>
                : <tr key={i}><th>{Object.keys(item)[0]}</th>{item[Object.keys(item)[0]].map((item_,j) => <td key={j}>{item_&&<svg><SvgPaths viewBox="0 0 16 16" pathsArray={["M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"]} /></svg>}</td>)}</tr>
            )}
        </tbody>
    </table>
}
export function SidebarsList01({
    $datas = [
        ["/","Home",["M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"]]
        , ["#","Dashboard",["M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z",[{fillRule:"evenodd"},"M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"]]]
        , ["#","Orders",["M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"]]
        , ["#","Products",["M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"]]
        , ["#","Customers",["M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",[{fillRule:"evenodd"},"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"]]]
    ]
    , moreSample= null
}){
    $datas = doNeedMoreSample($datas,moreSample)
    return <ul> 
        {$datas.map((item,i) => <li key={i}>
            <a href={item[0]} className={i==0?"active":""} aria-current={i==0?"page":false}>
                <SvgPaths viewBox="0 0 16 16" pathsArray={item[2]}/>
                <span>{item[1]}</span>
            </a>
        </li>)}
    </ul>
}
export function SidebarsList02Dropdown({
    $datas = [
        ["#","Home",["M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"]
            , [["#","Overview"]
            , ["#","Updates"]
            , ["#","Reports"]]
        ]
        , ["#","Dashboard",["M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z",[{fillRule:"evenodd"},"M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"]]
            , [["#","Overview"]
            , ["#","Updates"]
            , ["#","Reports"]]
        ]
        , ["#","Orders",["M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"]
            , [["#","Overview"]
            , ["#","Updates"]
            , ["#","Reports"]]
        ]
        , ["#","Products",["M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"]
            , [["#","Overview"]
            , ["#","Updates"]
            , ["#","Reports"]]
        ]
        , ["#","Customers",["M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",[{fillRule:"evenodd"},"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"]]
            , [["#","Overview"]
            , ["#","Updates"]
            , ["#","Reports"]]
        ]
    ]
    , moreSample= null
}){
    $datas = doNeedMoreSample($datas,moreSample)
    return <ul>
        {$datas.map((item,i) => <li key={i}>
            <a href={item[0]} className={i==0?"active":""} aria-current={i==0?"page":false}>
                <SvgPaths viewBox="0 0 16 16" pathsArray={item[2]}/>
                <label>
                    {item[1]}
                    <input type="checkbox" />
                </label>
            </a>
            <ul>
                {item[3].map((item_,j) => <li key={j}>
                    <a href={item_[0]}>{item_[1]}</a>
                </li>)}
            </ul>
        </li>)}
    </ul>
}

export function CarouselFrames01({
    blockRef
    , framesBtns = true
    , navBtns = true
    , svgForceDefault = false
    , $datas = [
        {
            img: {imgSrc:"b5.png",alt:""}
            , svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline."
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
        ,{
            img: {imgSrc:"b5.png",alt:""}
            , svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline.2"
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
        ,{
            img: {imgSrc:"b5.png",alt:""}
            ,svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline.3"
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
        ,{
            img: {imgSrc:"b5.png",alt:""}
            ,svg: [{rect:{props: {fill:"#777"}}}]
            , title: "Example headline.4"
            , p: [
                "Some representative placeholder content for the first slide of the carousel."
            ]
            , cta: ["#", "Sign up today"]
        }
    ]
    , moreSample= null
}){
    $datas = doNeedMoreSample($datas,moreSample)

    const FramesButtons = ({$datas}) => <div>
        {$datas.map((item,i) =><button key="{i}"/>)}
    </div>
    , NavigationButtons = () => <aside>
        <BtnFlow flow="prev" />
        <BtnFlow flow="next" />
    </aside>
    , move = (e,flow,blockRef) => {
        let figures = blockRef.current.querySelectorAll('figure')
        , index = 0
        figures.forEach((item,i) => {
            console.log(index)
            if(item.classList.contains('active')){
                index = flow=="prev"?(i+1):(i-1)
                if(i==0&&flow=="next"){
                    index = figures.length-1
                }
                if(i==(figures.length-1)&&flow=="prev"){
                    index = 0
                }
            }
            item.classList.remove('active')
            item.classList.remove('prev')
            item.classList.remove('next')
        })
        figures[index].classList.add('active')
        // if(figures.length>3){
            if(index==figures.length-1)figures[0].classList.add("prev")
            if(index==0)figures[figures.length-1].classList.add("next")
        // }
    }
    , BtnFlow = ({flow}) => <button onClick={blockRef?(e => {move(e,flow,blockRef)}):(() => {alert("Vous n'avez pas fourni un props 'blockRef'")})}>
        <span />
        <span>{flow=="prev"?"Prev":"Next"}</span>
    </button>

    return <>
        {$datas.map((item,i) => <figure key={i} className={i==0?'active':i==($datas.length-1)?"next":""}>
            <ImgXorSvg item={item} />
            {/* {
            item.img && !svgForceDefault
                ? <img src={item.img.imgSrc} alt={item.img.alt} />
                : item.svg
                    ? <SvgPaths pathsArray={item.svg} />
                    : ""
            } */}
            <figcaption>
                <h2>{item.title}</h2>
                {item.p.map((p,i) => <p key={i}>{p}</p>)}
                <p><a href={item.cta[0]}>{item.cta[1]}</a></p>
            </figcaption>
        </figure>)}
        {framesBtns && <FramesButtons $datas={$datas} />}
        {navBtns && <NavigationButtons />}
    </>
}