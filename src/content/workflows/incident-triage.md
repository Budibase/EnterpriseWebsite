---
slug: incident-triage
title: Incident Triage
sidebar:
  - id: overview
    label: Overview
role: Security
outcome: Process, classify, and respond to incidents faster without sending data outside your network.
setupTime: "~60 min"
difficulty: Medium
tags:
  - Apps
  - Agents
  - Automations
  - Human-in-the-loop
aiAssists:
  - Plain-English incident summaries
  - Entity extraction (user, IP, host, file)
  - Threat-intel correlation
  - Severity and root-cause assessment
humansDecide:
  - Escalation or closure
  - Containment actions
  - Response prioritization
steps:
  - title: New alert arrives
    description: A security alert appears in your SIEM or ITSM tool.
    humanDecision: false
  - title: Summarize the incident
    description: The agent produces a plain-English summary and extracts key entities.
    humanDecision: false
  - title: Enrich with threat intel
    description: Indicators are checked against VirusTotal and AbuseIPDB.
    humanDecision: false
  - title: Assess severity
    description: The agent suggests severity and likely cause based on signals.
    humanDecision: false
  - title: Analyst review
    description: A security analyst reviews the reasoning and decides next steps.
    humanDecision: true
  - title: Update ticket and notify
    description: The workflow updates ServiceNow/Jira and posts to Slack/Teams.
    humanDecision: false
  - title: Audit trail recorded
    description: The final decision and actions are logged for compliance.
    humanDecision: false
integrations:
  - ServiceNow
  - Jira
  - Splunk
  - VirusTotal
  - AbuseIPDB
  - Slack
  - Okta
faq:
  - question: Does this send incident data outside our network?
    answer: No. Budibase runs in your environment and keeps data local.
  - question: Can we tune severity scoring?
    answer: Yes, you can adjust risk rules and the signals the agent considers.
  - question: Can we add internal threat intel sources?
    answer: Yes, add private feeds or databases alongside public sources.
  - question: Who approves escalation?
    answer: Your analyst or on-call reviewer approves escalation or closure.
lastUpdated: 2026-02-05
---
## Overview {#overview}

Incident triage is time-sensitive and noisy. Analysts need a consistent, explainable view of what happened before they act.

This playbook enriches every incident with clear summaries, entity extraction, and threat-intel checks, then routes the decision to a human.

It keeps data on your infrastructure while speeding up response and improving consistency.
