---
title: "Deprecations and Removals Cleanup"
description: "A focused cleanup release that deprecates legacy behaviors and removes unsupported paths."
date: "2026-02-05"
version: "2.5"
tags:
  - Deprecated
  - Removed
  - Changed
draft: false
---

This release streamlines the platform by deprecating old patterns and removing legacy behavior that no longer matches the current architecture.

## Deprecated

- Deprecated legacy workflow aliases that relied on implicit path matching.
- Deprecated the old table row fallback formatter in favor of strict schema-aware formatting.

## Removed

- Removed support for legacy changelog link aliases that bypassed canonical slug routes.
- Removed unused compatibility helpers for pre-2.x metadata blocks.

## Changed

- Updated migration warnings to include direct replacement guidance for deprecated features.
- Updated route diagnostics to suggest canonical paths when legacy aliases are encountered.

If your project still depends on deprecated features, follow the migration hints shown in build output before the next minor release.
