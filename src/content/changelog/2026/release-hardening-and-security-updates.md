---
title: "Release Hardening and Security Updates"
description: "Reliability and security improvements across deployments, routing, and content rendering."
date: "2026-01-08"
version: "2.3.1"
tags:
  - Changed
  - Fixed
  - Security
image:
  src: "/og.png"
  alt: "Release hardening and security updates"
draft: false
---

This release focuses on stability and defense-in-depth across deployment and runtime surfaces.

## Changed

- Build-time validation now fails faster when content collections have schema violations.
- Route generation now emits clearer diagnostics for invalid dynamic params.

## Fixed

- Fixed an issue where some markdown pages could render an empty outline when headings were reordered.
- Fixed edge-case hydration mismatch warnings on pages with dynamic table rows.

## Security

- Tightened content sanitization rules for rendered markdown blocks.
- Updated internal dependency constraints to address reported vulnerabilities.

No migration is required for existing projects.
