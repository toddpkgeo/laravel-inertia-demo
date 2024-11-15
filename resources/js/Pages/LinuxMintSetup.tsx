import GuestLayout from "../Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import Anchor from "@/Components/Anchor";
import Code from "@/Components/Code";
import H2 from "@/Components/Header2";
import Title from "@/Components/Title";

export default function LinuxMintSetup() {
    return (
        <GuestLayout>
            <Head title="Linux Mint Setup" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl py-4 px-6 lg:max-w-7xl">
                        <main>
                            <Title>Linux Mint Setup</Title>
                            <p>
                                These are my notes from when I installed Linux
                                Mint 22 on my laptop.
                            </p>
                            <H2>Why Mint?</H2>
                            <p>
                                This is for a laptop that I could take with me
                                to new environments. I'd rather not troubleshoot
                                WiFi, printing, remote file systems, etc., which
                                could possibly waste another person's time.
                            </p>
                            <p className="mt-3">
                                Mint handles the kinds of setup that are
                                especially boring to me. Printing is unusually
                                painless with this distro. It also ships without
                                Ubuntu Snaps, which I'd rather not try to remove
                                from any other Ubuntu distro.
                            </p>
                            <p className="mt-3">
                                That only applies to laptops, though. For
                                Workstations and VMs, I'd rather build up my OS
                                from a minimal base.
                            </p>
                            <H2>During Install</H2>
                            <p>
                                The install is simple enough that I don't have
                                any tips, but I do have some thoughts on the
                                file system setup.
                            </p>
                            <ul className="list-disc mt-3">
                                <li>
                                    Full disk encryption only helps if the
                                    laptop is off.
                                </li>
                                <li>
                                    I can still use gpg or ccrypt on sensitive
                                    files.
                                </li>
                                <li>It would be nice if BTRFS was an option</li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        I would love to see that and checkboxes
                                        for subvols
                                    </li>
                                    <ul className="list-disc ml-4">
                                        <li>
                                            <Code>/home</Code>,
                                            <Code>/.snapshots</Code>,
                                            <Code>/mnt</Code>,<Code>/run</Code>,
                                            <Code>/tmp</Code>,<Code>/var</Code>
                                        </li>
                                        <li>
                                            <Code>/swap</Code>, but this could
                                            be a separate option (file or
                                            partition, how big)
                                        </li>
                                    </ul>
                                    <li>BTRFS would be nice for 2 reasons:</li>
                                    <ul className="list-disc ml-4">
                                        <li>
                                            Timeshift snapshots will be instant
                                        </li>
                                        <li>
                                            More subvols creates more
                                            granularity when choosing what to
                                            snapshot
                                        </li>
                                    </ul>
                                </ul>
                            </ul>
                            <H2>After Install</H2>
                            <ul className="list-disc">
                                <li>Set up Timeshift snapshots</li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        I include home dotfiles, exclude{" "}
                                        <Code>/root/**</Code>
                                    </li>
                                    <li>
                                        A good list of other exclusions apply by
                                        default. Click Filter - Summary to view.
                                    </li>
                                </ul>
                                <li>
                                    Verify that <Code>fstrim.timer</Code> is
                                    running, which is good for SSD longevity
                                </li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        <Code>
                                            systemctl status fstrim.timer
                                        </Code>
                                    </li>
                                </ul>
                                <li>Remove asterisks from password prompts</li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        normally I expect CLI password prompts
                                        to not echo anything
                                    </li>
                                    <li>
                                        do this by removing the file
                                        <Code>/etc/sudoers.d/0pwfeedback</Code>
                                    </li>
                                </ul>
                                <li>Cinnamon Settings</li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        Scrolling on Title bar can be set to
                                        adjust window opacity
                                    </li>
                                    <li>
                                        Software Sources - Mirrors and wait for
                                        some speed measurements to finish
                                    </li>
                                    <li>
                                        Set Caps to Escape in Keyboard - Layout
                                    </li>
                                    <li>
                                        I Changed move/resize key from Alt to
                                        Super
                                    </li>
                                </ul>
                                <li>
                                    Confirm that printing just works by joining
                                    a new network with a printer
                                </li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        Print a test page from the printer
                                        settings
                                    </li>
                                </ul>
                                <li>Run the Uncomplicated Firewall (UFW)</li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        I set it to deny all incoming
                                        connections
                                    </li>
                                    <li>
                                        This is easy enough to configure later
                                    </li>
                                </ul>
                                <li>SSH</li>
                                <ul className="list-disc ml-3">
                                    <li>
                                        I make an <Code>ssh-list</Code> alias to
                                        remind me of connections that I might
                                        want to use
                                    </li>
                                    <li>
                                        I make other <Code>ssh-*</Code> aliases
                                        for these connections
                                    </li>
                                    <li>Consider creating keys like this:</li>
                                    <ul className="list-disc ml-4">
                                        <li>
                                            <Code>
                                                ssh-keygen -t rsa -C "for XYZ
                                                server" -f ~/.ssh/xyz_rsa
                                            </Code>
                                        </li>
                                        <li>
                                            A strong RSA variant will be used by
                                            default
                                        </li>
                                    </ul>
                                    <li>
                                        Copy public keys with{" "}
                                        <Code>ssh-copy-id</Code>
                                    </li>
                                    <li>
                                        <em>ASIDE</em>: Avoid SSH Agent if using
                                        more than a few keys
                                    </li>
                                    <ul className="list-disc ml-4">
                                        <li>
                                            Too many keys can lead to a "too
                                            many attempts" error.
                                        </li>
                                        <li>
                                            Think of this as a keyring with many
                                            keys, and some "locks" only offer a
                                            couple of tries.
                                        </li>
                                        <li>
                                            Try using <Code>ssh -i $key</Code>{" "}
                                            or <Code>scp -i $key</Code>, which
                                            doesn't require the agent.
                                        </li>
                                        <li>
                                            I do still want SSH Agent for Git
                                            Repo (Bitbucket, Azure Repo) keys
                                        </li>
                                        <li>
                                            unless there's a way to configure
                                            git to use a specific key and not
                                            the agent
                                        </li>
                                        <li>
                                            So to keep the "keyring" small, I
                                            only add keys for remote repos
                                        </li>
                                        <li>
                                            On Ubuntu, any `.ssh/$x` with a
                                            corresponding `.ssh/$x.pub` file
                                            will be auto-added to the keyring
                                        </li>
                                        <li>
                                            On other systems, I'd use{" "}
                                            <Anchor href="https://github.com/git-for-windows/git/wiki/Auto-launching-ssh-agent-when-git-starts">
                                                this script
                                            </Anchor>{" "}
                                            and replace "id_rsa" with whatever
                                            space-separated keys you need.
                                        </li>
                                    </ul>
                                    <li>
                                        Verify that SSH login works and password
                                        login doesn't
                                    </li>
                                </ul>
                            </ul>
                        </main>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
