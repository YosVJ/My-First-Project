# Procurement Process – Swimlane (Clean Reference)

## Entities / Lanes
- Requestor (Department User)
- Approver (Department Head / Manager)
- Procurement Team
- Supplier
- Warehouse / Receiving
- Accounting / Finance

---

## Process Flow

### 1. Purchase Request (PR) Creation
**Actor:** Requestor  
- Creates PR in the system
- Selects company entity (SHIC / SY3)
- Adds items, quantity, justification
- Submits PR

**System Action:**
- PR status = `SUBMITTED`
- Routes to Department Approver

---

### 2. PR Review & Approval
**Actor:** Department Approver  
- Reviews PR details
- Decision:
  - Approve → PR status = `APPROVED_BY_DEPT`
  - Reject → PR status = `REJECTED_BY_DEPT` (with remarks)
  - Return → PR status = `RETURNED_FOR_INFO`

---

### 3. Procurement Validation & RFQ
**Actor:** Procurement  
- Validates PR completeness/specs
- Issues RFQ to suppliers
- Collects quotations
- Prepares TOB (commercial)

---

### 4. Technical Evaluation (if applicable)
**Actor:** Requestor / End User  
- Provides TE for technical items
- Confirms recommended offer

---

### 5. Award Decision
**Actor:** Procurement / SCM Head  
- Select supplier based on TE + TOB
- If not lowest price → escalate for approval

---

### 6. Purchase Order (PO) Creation & Approval
**Actor:** Procurement / DOA  
- Procurement drafts PO
- DOA approves PO per authority matrix
- PO is sent to supplier and delivery is confirmed

---

### 7. Delivery & Receiving
**Actor:** Supplier / Warehouse  
- Supplier delivers
- Warehouse checks against PO and shipping docs
- Discrepancies are reported and resolved

---

### 8. Accounting & Closure
**Actor:** Accounting  
- Verifies documents
- Processes payment
- PR/PO set to `CLOSED`
