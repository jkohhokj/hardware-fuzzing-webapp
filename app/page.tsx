import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { CustomCard } from "@/components/cards";
import { Divider } from "@heroui/divider";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-full text-center justify-center">
        <div className="max-w-5xl">
          <h2 className={title()}>Research Resources</h2>
          <Divider className="my-4" />
          <Divider className="my-4" />
          <br />
          <br />

          <h3 className={subtitle()}>SETH Hardware Fuzzing Papers</h3>
          <div className="gap-4 grid grid-cols-3">
            <CustomCard
              title="TheHuzz"
              subtitle="Kande 2022"
              bodyText="The original hardware fuzzing framework supporting CVA6, BOOM, and RocketCore."
              linkHref="https://www.usenix.org/system/files/sec22-kande.pdf"
              linkText="Publication Source"
              link2={true}
              linkHref2="/projects/thehuzz_tutorial"
              linkText2="Tutorial?"
            />
            <CustomCard
              title="HyPFuzz: Formal-Assisted Processor Fuzzing"
              subtitle="Chen 2023"
              bodyText="Hardware fuzzing integrated with formal verification"
              linkHref="https://www.usenix.org/system/files/usenixsecurity23-chen-chen.pdf"
              linkText="Publication Source"
            />
            <CustomCard
              title="PSOFuzz: Particle Swarm Optimization"
              subtitle="Chen, Gohil 2023"
              bodyText="Mutation Scheduling using Particle Swarm Optimization"
              linkHref="https://arxiv.org/pdf/2307.14480"
              linkText="Publication Source"
            />
            <CustomCard
              title="MABFuzz: Multi-Armed Bandit Algorithms"
              subtitle="Gohil, Kande 2024"
              bodyText="Dynamic search space coverage with Multi-Armed Bandits"
              linkHref="https://arxiv.org/pdf/2311.14594"
              linkText="Publication Source"
            />
            <CustomCard
              title="WhisperFuzz: White-Box Fuzzing for Timing Vulnerabilities"
              subtitle="Borkar, Chen 2024"
              bodyText="Static Analysis of Microarchitectural State Transitions"
              linkHref="https://www.usenix.org/system/files/usenixsecurity24-borkar.pdf"
              linkText="Publication Source"
            />
          </div>
          <Divider className="my-4" />
          <br />
          <br />
          <h3 className={subtitle()}>Other Hardware Fuzzing Papers</h3>
          <div className="gap-4 grid grid-cols-3">
            <CustomCard
              title="Cascade: Intricate Program Generation"
              subtitle="Solt 2024"
              bodyText="Better test instructions to improve fuzzing efficiency."
              linkHref="https://www.usenix.org/system/files/usenixsecurity24-solt.pdf"
              linkText="Publication Source"
            />
          </div>
          <Divider className="my-4" />
          <br />
          <br />
          <h3 className={subtitle()}> Tools Needed for Fuzzing </h3>
          <div className="gap-4 grid grid-cols-3">
            <CustomCard
              title="Chipyard Hardware Development Platform"
              subtitle="Agile System-on-Chip Platform"
              bodyText="Chipyard is a development platform that is used by TheHuzz to simulate hardware on software."
              linkHref=""
              linkText="Tutorial"
            />
            <CustomCard
              title="RISC-V Toolchain"
              subtitle="Cross-compiler for RISC-V"
              bodyText="Used for compiling RISC-V binaries, also includes Spike Golden Reference Model."
              linkHref=""
              linkText="Tutorial"
            />
            <CustomCard title="Hardware Simulator/Compiler" subtitle="Run hardware designs on software" bodyText="Tools like VCS and Verilator allow hardware designs to be simulated on software."
            linkHref=""
            linkText="Tutorial"/>
            <CustomCard
              title="TAMU Olympus HPC"
              subtitle="TAMU ECEN department's High Performance Computing Server"
              bodyText="Used for running large workloads and commercially licensed products like VCS."
              linkHref="https://tamuengr.atlassian.net/wiki/spaces/helpdesk/pages/2165145607/Olympus+CPU+Research+User+Information"
              linkText="Tutorial"
            />
          </div>
          <Divider className="my-4" />
          <br />
          <br />
          <h3 className={subtitle()}>Related Platforms</h3>
          <div className="gap-4 grid grid-cols-3">
            <CustomCard
              title="SiFive Platform"
              subtitle="Commercial RISC-V Development"
              bodyText="SiFive uses similar processor integration techinques as Chipyard."
              linkHref="https://www.sifive.com/documentation"
              linkText="Resources"
            />
            <CustomCard
              title="HiTek Platform"
              subtitle="Hardware Design Services"
              bodyText="No idea"
              linkHref="https://hiteksys.com/engineering-design-services"
              linkText="Resources"
            />
          </div>
          <Divider className="my-4" />
          <br />
          <br />
          <h3 className={subtitle()}>Relevant Processors</h3>
          <div className="gap-4 grid grid-cols-3">
            <CustomCard
              title="RSD"
              subtitle="RISC-V Out-of-Order Superscalar Processor"
              linkText="Source Code"
              linkHref="https://github.com/rsd-devel/rsd"
            />
            <CustomCard
              title="XiangShan"
              subtitle="Agile development methodology on high performance RISC-V processors"
              linkText="Source Code"
              linkHref="https://github.com/OpenXiangShan/XiangShan"
            />
            <CustomCard
              title="Shakti C-Class"
              subtitle="Commercial-grade 5-stage in-order core"
              linkText="Source Code"
              linkHref="https://gitlab.com/shaktiproject/cores/c-class"
            />
            <CustomCard
              title="Shakti E-Class"
              subtitle="Embedded-class 3-stage in-order core"
              linkText="Source Code"
              linkHref="https://gitlab.com/shaktiproject/cores/e-class"
            />
            <CustomCard
              title="Superscalar CVA6"
              subtitle="cv32a65x but superscalar"
              linkText="Source Code"
              linkHref="https://github.com/openhwgroup/cva6/tree/v5.3.0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
