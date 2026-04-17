# Getting Started with MochiOS

> **⚠️ Warning: Experimental Status**
> MochiOS is currently in early development. We are actively restructuring the system files and hierarchy. This version is **Experimental** and may be unstable. It is intended for developers and researchers; it is not yet suitable for general use.

---

## Running and Testing MochiOS

*Current limitations: This version only supports testing via **QEMU** (Virtual Machine) and **chroot** environments.*

### 1. Running via Virtual Machine (QEMU)
This method allows you to boot MochiOS from an image file (`.img`), simulating an execution on real hardware.

#### 1.1 Prerequisites & Dependencies
Ensure your host system has QEMU and OVMF (for UEFI support) installed:

* **Arch Linux / Manjaro / CachyOS:**
    ```bash
    sudo pacman -Syu
    sudo pacman -S qemu-full ovmf
    ```
* **Ubuntu / Debian:**
    ```bash
    sudo apt update
    sudo apt install -y qemu-system-x86 ovmf
    ```

#### 1.2 Execution Command
Use the following command to boot the system. Adjust the paths to your image and OVMF binary as necessary:

```bash
qemu-system-x86_64 \
  -m 2G \
  -drive file="mochios-amd64.img",format=raw,if=virtio \
  -bios "/usr/share/ovmf/x64/OVMF_CODE.fd" \
  -vga virtio \
  -display sdl
```
*(Note: The OVMF path varies by distribution. You may change `-display sdl` to `gtk` or `cocoa` depending on your host environment.)*

---

### 2. Accessing via `chroot`
If you need to modify the root filesystem, install packages, or debug the RootFS directly without booting the full kernel, use the `chroot` method.

#### 2.1 Mounting Essential Virtual Filesystems
Assuming your RootFS is located at `~/mochios-rootfs`, bind-mount the necessary host directories first:

```bash
# Mount proc, sys, and dev
sudo mount -t proc /proc ~/mochios-rootfs/proc
sudo mount --rbind /sys ~/mochios-rootfs/sys
sudo mount --make-rslave ~/mochios-rootfs/sys
sudo mount --rbind /dev ~/mochios-rootfs/dev
sudo mount --make-rslave ~/mochios-rootfs/dev
```

#### 2.2 Entering the Environment
```bash
sudo chroot ~/mochios-rootfs /bin/bash
```
*Note: Always remember to `umount` these directories after exiting the chroot environment to prevent host system instability.*

---

## Technical Overview & Roadmap

### Filesystem Hierarchy
MochiOS utilizes a unique directory structure, aiming for a cleaner separation between system files, libraries, and user data compared to traditional FHS.
* `/System`: Core OS binaries and kernel modules.
* `/Library`: Shared frameworks and system resources.
* `/Users`: User home directories and preferences.

### Build System
The project is currently optimized for building on an **Arch Linux** host.
* **Core Core:** High-performance async-first core written in **Rust**.
* **Styling:** UI components follow **Material Design 3 (MD3)** specifications.

### Upcoming Roadmap
- [ ] Implement VirtIO networking drivers.
- [ ] Stable implementation of the custom RootFS hierarchy.
- [ ] Integration of the MikoCSS/Cogeden generator for system UI.
- [ ] Support for high-end workstation hardware (AMD EPYC/Threadripper).
