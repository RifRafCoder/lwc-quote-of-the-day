import { LightningElement, track } from 'lwc';

export default class QuoteRequestComponent extends LightningElement {
    @track name = '';

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleGetQuote() {
        const event = new CustomEvent('quoterequest', {
            detail: { name: this.name }
        });
        this.dispatchEvent(event);
    }
}

