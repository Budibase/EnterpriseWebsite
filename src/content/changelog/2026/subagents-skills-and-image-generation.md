---
title: "Subagents, Skills, and Image Generation"
description: "Agent harness improvements for parallel subagents, reusable skills, and native image generation workflows."
date: "2026-01-22"
version: "2.4"
tags:
  - Added
  - Changed
  - Fixed
draft: false
---

Agents are now better at handling long-running and multi-part tasks, with clearer context boundaries between subtasks.

## Added

- Subagents can now run in parallel for independent subtasks.
- Skills can be attached to recurring workflows with tighter prompt scoping.
- Native image generation support was added for product mockups and marketing assets.

## Changed

- Main-thread context handling was adjusted to reduce accidental prompt bleed between unrelated tasks.
- Task updates are now emitted in shorter, more predictable progress intervals.

## Fixed

- Fixed intermittent editor freezes when a task spawned several parallel workers.
- Fixed a bug where stale tool output could occasionally appear in a new run.

These updates improve execution speed while keeping reasoning and output more focused.
