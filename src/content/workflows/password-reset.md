---
slug: password-reset
title: Password Reset
sidebar:
  - id: overview
    label: Overview
role: IT Support
outcome: Reset passwords securely while enforcing policy and audit controls.
setupTime: "~30 min"
difficulty: Easy
tags:
  - Apps
  - Agents
  - Automations
  - Chat
  - Human-in-the-loop
aiAssists:
  - Identity verification guidance
  - Policy checks
  - Reset path recommendations
humansDecide:
  - Privileged account resets
  - Exceptions
  - Manual overrides
steps:
  - title: Request submitted
    description: A user submits a reset request via form, chat, or ticket.
    humanDecision: false
  - title: Verify identity
    description: The agent validates identity with Okta, Azure AD, or MFA.
    humanDecision: false
  - title: Check policy
    description: Policies determine eligibility and required approvals.
    humanDecision: false
  - title: Choose reset method
    description: The safest reset path is selected automatically.
    humanDecision: false
  - title: Optional approval
    description: Privileged accounts require a human approval.
    humanDecision: true
  - title: Execute reset
    description: The password is reset and the user is notified securely.
    humanDecision: false
  - title: Audit log recorded
    description: The full action history is captured in the audit trail.
    humanDecision: false
integrations:
  - Okta
  - Azure AD
  - LDAP
  - Email/Exchange
  - Slack/Teams
  - ServiceNow
faq:
  - question: Does this support MFA verification?
    answer: Yes, identity checks can include MFA and risk-based rules.
  - question: Can admin accounts require approval?
    answer: Yes, approvals can be enforced for sensitive accounts.
  - question: Can users reset via chat?
    answer: Yes, chat or form requests can trigger the workflow.
  - question: Is everything audited?
    answer: Every reset and decision is logged for compliance.
lastUpdated: 2026-02-05
---
## Overview {#overview}

Password resets are a high-volume IT request that needs strong security and fast resolution.

This playbook verifies identity, applies policy, and routes approvals only when needed.

It reduces support load while keeping a complete audit trail inside Budibase.
