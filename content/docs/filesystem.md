# Filesystem Hierarchy

MochiLinux uses a custom filesystem hierarchy designed for clarity and ease of management.

## Root Directory Structure

- `/Applications`: Self-contained application bundles.
- `/System`: Core system files and binaries.
- `/Users`: User home directories.
- `/Volumes`: Mount points for external drives and other filesystems.

## The /System Directory

The `/System` directory contains everything needed for the OS to run:

- `/System/bin`: Core utilities.
- `/System/Library`: Shared libraries and core services.
- `/System/Kernel`: Kernel and modules.

## The /Applications Directory

Each application is a folder ending in `.app`:

```
/Applications/Browser.app/
  /exec/
  /library/
  /resources/
```

This structure ensures that deleting an app is as simple as removing its directory.
