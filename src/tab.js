
import Tabs from "./Tabs.scss"

function tab () {

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tab.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

return (

    <>
    <ul className="tabss">
        <li data-tab-target="#home" className="active_tab">Home</li>
        <li data-tab-target="#account" className="tab">account</li>
        <li data-tab-target="#about" className="tab">about</li>
        <li data-tab-target="#test" className="tab"> test</li>
    </ul>

    <div className="tab-content">
        <div id="home" data-tab-content className="active">
            <h1> Home </h1>
            <p> This Home </p>
        </div>
        <div id="account" data-tab-content>
            <h1> account </h1>
            <p> This account </p>
        </div>
        <div id="about" data-tab-content>
            <h1> About </h1>
            <p> This is about </p>
        </div>
        <div id="test" data-tab-content>
            <h1> Test </h1>
            <p> This is test </p>
        </div>
    </div>
    
    </>
    )

}

export default tab