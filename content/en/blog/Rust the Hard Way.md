---
title: Learning Rust the Hard Way 
description: Dealing with Security Issues in Rust 
summary: Dealing with Security Issues in Rust
---

A routine cargo audit of our tree revealed a vulnerability on _chrono_  (and a few other dependencies with suggested upgrades, which we made). Unfortunately, _chrono_ indicates the following:

```
Crate:         chrono
Version:       0.4.19
Title:         Potential segfault in `localtime_r` invocations
Date:          2020-11-10
ID:            RUSTSEC-2020-0159
URL:           https://rustsec.org/advisories/RUSTSEC-2020-0159
Solution:      No safe upgrade is available!
```

For our own use case, exclusively ISO8601 time in UTC we did not appear vulnerable, but to be good netizens we replaced our dependency on _chrono_ with the time crate. This required changing all instances of: 

`chrono::DateTime<chrono::Utc>`  with `time::OffsetDateTime`  

and calls to

`chrono::DateTime::parse_from_rfc3339(unquoted_time_string)` with `time::OffsetDateTime::parse(unquoted_time_string, &time::format_description::well_known::Rfc3339)`

and finally

`chrono::Utc::now().to_rfc3339_opts(SecondsFormat::Millis, true)` became `time::OffsetDateTime::now_utc().format(&time::format_description::well_known::Rfc3339).unwrap()`

We [forked synapse](https://github.com/pyrsia/synapse) and performed the same changes on the rpc lib from that project.  Now we have no more reported audit issues.
