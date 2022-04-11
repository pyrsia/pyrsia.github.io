---
title: "Pyrsia Installation"
linkTitle: "Pyrsia Installation"
weight: 3
description: >
  Installing Pyrsia on Ubuntu
---

## Installation Prerequisites

Operating Systems
* Ubuntu Focal (x86_64)

## Installation Commands

```
curl -sS https://pyrsia.io/install.sh -o install.sh
chmod 755 install.sh
./install.sh
```

or the one-liner

```
curl -sS https://pyrsia.io/install.sh | sh
```

### Test your Docker Install

```
pyrsia_node -V
pyrsia -V
```

Both command should return the version number if there are no installation issues.  Please open an issue on the [pyrsia/pyrsia](https://github.com/pyrsia/pyrsia) repo if you run into any problems.
