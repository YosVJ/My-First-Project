# Approval Rules and Workflow (v1)

## Roles
- Requestor
- Department Approver
- Procurement
- SCM Head (optional)
- Finance (optional)
- Warehouse/Receiving

## Core PR Statuses
- DRAFT
- SUBMITTED
- RETURNED_FOR_INFO
- REJECTED
- APPROVED_BY_DEPT
- UNDER_PROCUREMENT
- RFQ_SENT
- QUOTATIONS_RECEIVED
- FOR_AWARD
- PO_CREATED
- FOR_DELIVERY
- RECEIVED
- CLOSED

---

## Status Transition Table (System Rules)

| Current Status | Who Can Act | Action | Next Status | Notes |
|---|---|---|---|---|
| DRAFT | Requestor | Submit PR | SUBMITTED | Must select Entity + Department + Items |
| SUBMITTED | Dept Approver | Approve | APPROVED_BY_DEPT | Adds remarks optional |
| SUBMITTED | Dept Approver | Return for info | RETURNED_FOR_INFO | Requires remarks |
| SUBMITTED | Dept Approver | Reject | REJECTED | Requires remarks |
| RETURNED_FOR_INFO | Requestor | Resubmit | SUBMITTED | After edits |
| APPROVED_BY_DEPT | System | Route to Procurement | UNDER_PROCUREMENT | Auto transition |
| UNDER_PROCUREMENT | Procurement | Validate + Start RFQ | RFQ_SENT | Attach RFQ reference |
| RFQ_SENT | Procurement | Record quotations | QUOTATIONS_RECEIVED | Upload quotations |
| QUOTATIONS_RECEIVED | Procurement | Prepare award packet | FOR_AWARD | TE/TOB attached if needed |
| FOR_AWARD | Procurement/SCM | Approve award | PO_CREATED | May require SCM/Finance based on matrix |
| PO_CREATED | Procurement | Confirm delivery schedule | FOR_DELIVERY | PO sent to supplier |
| FOR_DELIVERY | Warehouse | Receive goods | RECEIVED | With receiving report |
| RECEIVED | Accounting/Procurement | Close request | CLOSED | After docs complete |

---

## Approval Matrix (Option 1)

| Entity | Amount Range (PHP) | Required Approvers |
|---|---:|---|
| SHIC | 0 – 10,000 | Dept Approver |
| SHIC | 10,001 – 50,000 | Dept Approver + SCM |
| SHIC | 50,001+ | Dept Approver + SCM + Finance |
| SY3 | 0 – 10,000 | Dept Approver |
| SY3 | 10,001 – 50,000 | Dept Approver + SCM |
| SY3 | 50,001+ | Dept Approver + SCM + Finance |
| SGH | 0 – 10,000 | Dept Approver |
| SGH | 10,001 – 50,000 | Dept Approver + SCM |
| SGH | 50,001+ | Dept Approver + SCM + Finance |


---

## Notes
- If supplier is not lowest price, system requires justification + SCM approval.
- Technical items require TE attachment before moving to FOR_AWARD.
