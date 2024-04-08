import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track quote;

    handleQuoteRequest(event) {
        this.quote = 'Consistency compounds. Small steps effectively executed will guarantee your success. This is inevitably the best way to win.';
    }
}
