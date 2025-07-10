# Window Message Example

A demonstration of cross-window communication between a parent page and an iframe using the Window.postMessage() API.

## Project Structure

```
.
├── parent/
│   ├── component_parent.html
│   └── component_parent.js
└── child/
    ├── component_iframe.html
    └── component_iframe.js
```

## Features

- Parent-child window communication
- Payment form simulation in iframe
- Secure message passing between windows
- Real-time message display in parent window

## How It Works

1. The parent page ([component_parent.html](parent/component_parent.html)) contains an iframe that loads the child component
2. The child component ([component_iframe.html](child/component_iframe.html)) displays a payment form
3. When the form is submitted, the child sends the data to the parent using `postMessage`
4. The parent receives and displays the message in a formatted output area

## Running the Project

1. Clone the repository
2. Open [component_parent.html](parent/component_parent.html) in a web browser
3. You should see the payment form iframe and message output area

## Message Format

Messages are sent in the following format:

```javascript
{
  type: "PAYMENT_SUBMITTED",
  payload: {
    cardNumber: string,
    expiryDate: string,
    ccv: string
  }
}
```

## Security Note

The current implementation uses `"*"` as the targetOrigin in postMessage. In a production environment, you should specify the exact origin of the parent window for better security.