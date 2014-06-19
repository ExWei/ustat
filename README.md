ustat
=========
ustat is an library for Node.JS which provide powerful function for view usage statistic of system resources.
## Installation
You can install ustat with the npm:
```bash
npm install ustat
```

## Functions
### freemem(unit)
Returns free memory in the selected unit.

__Arguments__

* unit - Unit for result value, one of (byte, kb, mb, gb, tb, pb, eb, zb, yb).

### totalmem(unit)
Returns total memory in the selected unit.

__Arguments__

* unit - Unit for result value, one of (byte, kb, mb, gb, tb, pb, eb, zb, yb).

### usedmem(unit)
Returns used memory in the selected unit.

__Arguments__

* unit - Unit for result value, one of (byte, kb, mb, gb, tb, pb, eb, zb, yb).

### totalspace(unit, path)
Returns total disk space in the selected path and unit.

__Arguments__

* unit - Unit for result value, one of (byte, kb, mb, gb, tb, pb, eb, zb, yb).
* path - Path for space checking (like c: on Windows or /dev on Linux).