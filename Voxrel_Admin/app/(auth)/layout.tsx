import Image from "next/image"

import { ParticlesBackground } from "@/components/effects/particles-background"

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden bg-background p-6 md:p-10">
            <ParticlesBackground color="167,139,250" density={0.9} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.12),transparent_60%)]" />
            <div className="relative z-10 flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium text-foreground">
                    <Image src="/voxrel-logo.png" alt="Voxrel" width={36} height={36} className="object-contain drop-shadow-[0_0_10px_rgba(167,139,250,0.6)]" />
                    <span className="text-lg tracking-wide">VOXREL</span>
                </a>
                {children}
            </div>
        </div>
    )
}
