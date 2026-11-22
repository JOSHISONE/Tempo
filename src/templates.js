export const templates = [
  {
    "id": 0,
    "type": "SOP",
    "title": "Customer refund SOP",
    "summary": "Approve, issue and log refunds the same way every time.",
    "price": 12,
    "category": "Customer service",
    "owner": "Customer support lead",
    "usedWhen": "A customer asks for money back",
    "time": "10 minutes",
    "steps": [
      "Find the order in your system.",
      "Check the order is inside the 14-day window.",
      "Approve refunds under $100. Escalate anything higher.",
      "Issue the refund and email the customer.",
      "Log the reason in the refund sheet."
    ],
    "doneWhen": "The customer has confirmation and the log is updated."
  },
  {
    "id": 1,
    "type": "SOP",
    "title": "New employee onboarding SOP",
    "summary": "From offer letter to first-week review.",
    "price": 19,
    "category": "People",
    "owner": "HR or office manager",
    "usedWhen": "A new hire accepts an offer",
    "time": "2 weeks",
    "steps": [
      "Send the welcome email with start date and time.",
      "Prepare equipment and accounts before day one.",
      "Run the day-one orientation.",
      "Assign a buddy for the first week.",
      "Hold a review on day five."
    ],
    "doneWhen": "The new hire can do their core tasks without help."
  },
  {
    "id": 2,
    "type": "SOP",
    "title": "Order fulfilment SOP",
    "summary": "Pick, pack and ship without missed items.",
    "price": 15,
    "category": "Operations",
    "owner": "Warehouse lead",
    "usedWhen": "A paid order arrives",
    "time": "15 minutes per order",
    "steps": [
      "Print the pick list.",
      "Collect items and tick each one.",
      "Pack with the right box and filler.",
      "Add the packing slip and label.",
      "Mark the order shipped and send tracking."
    ],
    "doneWhen": "The order is shipped and the customer has a tracking link."
  },
  {
    "id": 3,
    "type": "SOP",
    "title": "Invoice follow-up SOP",
    "summary": "Chase late payments politely and on schedule.",
    "price": 12,
    "category": "Finance",
    "owner": "Accounts person",
    "usedWhen": "An invoice is past its due date",
    "time": "5 minutes per invoice",
    "steps": [
      "Check the payment really is missing.",
      "Send a friendly reminder at 3 days late.",
      "Call at 10 days late.",
      "Send a final notice at 21 days late.",
      "Pause work for the client if still unpaid."
    ],
    "doneWhen": "The invoice is paid or handed to the owner."
  },
  {
    "id": 4,
    "type": "Checklist",
    "title": "Retail shop opening checklist",
    "summary": "A short routine before you unlock the door.",
    "price": 9,
    "category": "Operations",
    "owner": "Opening staff member",
    "usedWhen": "Every trading day",
    "time": "20 minutes",
    "steps": [
      "Disarm the alarm and switch on lights.",
      "Count the till float and record it.",
      "Check shelves and price tags.",
      "Test the card machine and Wi-Fi.",
      "Unlock the door at opening time."
    ],
    "doneWhen": ""
  },
  {
    "id": 5,
    "type": "Checklist",
    "title": "Retail shop closing checklist",
    "summary": "Cash-up, lock-up and security in order.",
    "price": 9,
    "category": "Operations",
    "owner": "Closing staff member",
    "usedWhen": "Every trading day",
    "time": "30 minutes",
    "steps": [
      "Cash up and record the takings.",
      "Put cash in the safe.",
      "Switch off equipment and lights.",
      "Check the back door and windows.",
      "Set the alarm and lock up."
    ],
    "doneWhen": ""
  },
  {
    "id": 6,
    "type": "Checklist",
    "title": "Employee exit checklist",
    "summary": "Return equipment, revoke access, final pay.",
    "price": 9,
    "category": "People",
    "owner": "Manager and HR",
    "usedWhen": "An employee leaves",
    "time": "1 hour",
    "steps": [
      "Collect laptop, keys and cards.",
      "Remove access to all accounts.",
      "Confirm final pay and leave balance.",
      "Hold an exit conversation.",
      "Update the team and clients."
    ],
    "doneWhen": ""
  },
  {
    "id": 7,
    "type": "Checklist",
    "title": "Monthly bookkeeping checklist",
    "summary": "Reconcile, review and file before month end.",
    "price": 11,
    "category": "Finance",
    "owner": "Bookkeeper",
    "usedWhen": "The last week of each month",
    "time": "2 hours",
    "steps": [
      "Reconcile the bank accounts.",
      "Match receipts to expenses.",
      "Review unpaid invoices.",
      "Set aside tax money.",
      "Save reports to the shared folder."
    ],
    "doneWhen": ""
  },
  {
    "id": 8,
    "type": "Checklist",
    "title": "Product launch checklist",
    "summary": "Everything to check before you go live.",
    "price": 14,
    "category": "Marketing",
    "owner": "Project owner",
    "usedWhen": "One week before launch",
    "time": "3 hours",
    "steps": [
      "Test the page on phone and laptop.",
      "Check prices and payment links.",
      "Schedule social posts and emails.",
      "Brief support on likely questions.",
      "Go live and watch the first orders."
    ],
    "doneWhen": ""
  }
];

export const categories = ["All", "SOPs", "Checklists", "Operations", "People", "Finance", "Customer service", "Marketing"];

export const bundles = [
  { id: "bundle-starter", name: "Starter bundle", price: 49 },
  { id: "bundle-full", name: "Full library", price: 149 },
];
