// this is the modified file of tabs.js
// and gets called on itself than index.js
class Tabs{
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e){
        // remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        // add new active class to click tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        // remove current active classes from content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        // add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}

// the only original different is that the index.js
// does not exist and this part of the initialization
// was put at the end
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();
