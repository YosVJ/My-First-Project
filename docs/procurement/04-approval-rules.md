# Approval Rules (v1)

## Scope
This defines who approves what, per company entity and amount, and how the PR moves between statuses.

---

## Company Entities
- Synercore Global Holdings (SGH)
- Synercore Heavy Industries Corp (SHIC)
- SY3 Energy Maintenance Services Corp (SY3)

---

## Roles
- Requestor
- Department Approver
- Procurement Reviewer
- SCM Head
- Finance Approver
- President/Top Approver (if needed)
- Warehouse Receiver (for receiving step)

---

## PR Statuses
- DRAFT
- SUBMITTED
- RETURNED_FOR_INFO
- REJECTED_BY_DEPT
- APPROVED_BY_DEPT
- UNDER_PROCUREMENT_REVIEW
- RFQ_SENT
- QUOTATIONS_RECEIVED
- FOR_AWARD_DECISION
- PO_DRAFTED
- PO_APPROVED
- FOR_DELIVERY
- DELIVERED
- RECEIVED
- CLOSED

---

## Approval Matrix (Fill-in)
| Entity | Amount Range | Required Approvers |
|-------|--------------|-------------------|
| SHIC  | 0 - ____     | Dept Head |
| SHIC  | ____ - ____  | Dept Head + SCM Head |
| SHIC  | ____+        | Dept Head + SCM Head + Finance + President |
| SY3   | 0 - ____     | Dept Head |
| ...   | ...          | ... |

---

## Exceptions
- If supplier is not lowest price → require justification + SCM Head approval
- If urgent request → tag URGENT, still requires same approvals
- If technical item → requires Technical Evaluation (TE) attachment
