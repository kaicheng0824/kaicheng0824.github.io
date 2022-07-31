class ButtonCount extends HTMLElement {
    constructor() {
        super();
        let btn = document.createElement('button');
        btn.innerHTML = 'Times Clicked : ';
        btn.setAttribute('count',0);
        
        let count = document.createElement('output');
        count.textContent = 0;
        btn.append(count);

        btn.addEventListener('click', () => {
            let count2 = btn.getAttribute('count');
            count.textContent = parseInt(count2)+1;
            btn.setAttribute('count',parseInt(count2)+1);
        });

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(btn);
    }
}
customElements.define('button-count', ButtonCount);