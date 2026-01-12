# Procurement / Purchasing Procedure – Swimlane (Clean Table)

Lanes: Requestor/End User, Department Approver(s), Procurement, Supplier, Warehouse, Accounting.

## A. PR Creation + Validation
| # | Lane | Action | Inputs | Outputs | Decision |
|---:|---|---|---|---|---|
| 1 | Requestor | Create PR form + attach required documents (SDS for chemicals, TE for technical items) | PR details, SDS/TE | PR package | — |
| 2 | Procurement | Check PR completeness/specs | PR package | Validated PR | Specs complete? If NO → return to Requestor |

## B. RFQ + Quotation
| # | Lane | Action | Inputs | Outputs | Decision |
|---:|---|---|---|---|---|
| 3 | Procurement | Issue RFQ based on PR | Validated PR | RFQ | — |
| 4 | Supplier | Submit quotation | RFQ | Quotation | — |
| 5 | Procurement | Collect quotations | Quotations | Quotation set | Quotation details complete? If NO → request clarification |

## C. Evaluation + Award
| # | Lane | Action | Inputs | Outputs | Decision |
|---:|---|---|---|---|---|
| 6 | Procurement | Prepare TOB (commercial comparison) | Quotation set | TOB | — |
| 7 | Requestor | Review/prepare TE (technical) and recommend offer | TOB + specs | TE + recommendation | If disagreement → elevate to SCM Head |

## D. Approval + PO Creation
| # | Lane | Action | Inputs | Outputs | Decision |
|---:|---|---|---|---|---|
| 8 | Approver(s) | Approve PR / selected offer | PR + TE/TOB | Approved PR | If not lowest price → SCM Head approval |
| 9 | Procurement | Create PO and submit to DOA per approval rules | Approved PR | Draft PO | Cost negotiation needed? If YES → negotiate |
| 10 | DOA | Approve PO | Draft PO | Approved PO | — |
| 11 | Procurement | Send PO to supplier + confirm delivery schedule | Approved PO | Supplier confirmation | — |

## E. Delivery + Receiving + Discrepancy
| # | Lane | Action | Inputs | Outputs | Decision |
|---:|---|---|---|---|---|
| 12 | Supplier | Deliver goods/services | PO | Delivery | — |
| 13 | Warehouse | Receive + check vs PO and shipping docs | Delivery + docs | Receiving record | Discrepancy? If YES → report to Procurement |
| 14 | Procurement | Coordinate supplier disposition/replacement | Discrepancy report | Corrected delivery | — |

## F. Recording + Payment
| # | Lane | Action | Inputs | Outputs | Decision |
|---:|---|---|---|---|---|
| 15 | Warehouse | Record receiving in monitoring system | Accepted delivery | Receiving entry | — |
| 16 | Procurement | Verify docs and submit to Accounting | Shipping docs | Verified docs | — |
| 17 | Accounting | Process payment | Verified docs | Payment processed | — |
