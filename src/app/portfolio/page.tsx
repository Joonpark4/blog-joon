import { PortfolioCard } from "./card";
import portfolioPic from "@/../public/img/portfolio.jpg";
import stoPic from "@/../public/img/sto.jpg";
import wordsmemoPic from "@/../public/img/wordsmemo.jpg";
import netdataPic from "@/../public/img/netdata.jpg";
import namdalnriyouPic from "@/../public/img/namdalnriyou.png";

export default function Portfolio() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-wrap justify-start gap-3">
        <PortfolioCard
          title="Portfolio Webpage"
          descriptions={[
            "Framework : ",
            "Next.js",
            "Language : ",
            "Typescript",
            "Deploy/Infra : ",
            "Home Server (Ubuntu)",
            "CI / CD : ",
            "Docker, Github Actions",
            "Database : ",
            "MongoDB (Docker)",
          ]}
          pageUrl="https://www.joondev.com/"
          githubUrl="https://github.com/Joonpark4/portfolio"
          image={portfolioPic}
        />
        <PortfolioCard
          title="Namdalnriyou Webpage"
          descriptions={[
            "Framework : ",
            "Next.js",
            "Language : ",
            "Typescript",
            "Deploy/Infra : ",
            "Vercel",
            "Analytics : ",
            "GA4/GTM",
            "External API : ",
            "Naver Map API",
            "Advertisement : ",
            "Google Ads",
          ]}
          pageUrl="https://wordsmemo.joondev.com/"
          githubUrl="https://github.com/Joonpark4/wordsmemo"
          image={namdalnriyouPic}
        />
        <PortfolioCard
          title="WordsMemo Service"
          descriptions={[
            "Framework : ",
            "Next.js",
            "Language : ",
            "Typescript",
            "Deploy/Infra : ",
            "Home Server (Ubuntu)",
            "Global State : ",
            "Zustand",
            "Backend : ",
            "Strapi (Docker)",
            "Database : ",
            "PostgreSQL (Docker)",
          ]}
          pageUrl="https://wordsmemo.joondev.com/"
          githubUrl="https://github.com/Joonpark4/wordsmemo"
          image={wordsmemoPic}
        />
        <PortfolioCard
          title="Mobile STO Webpage"
          descriptions={[
            "Framework : ",
            "Next.js",
            "Language : ",
            "Typescript",
            "Deploy/Infra : ",
            "Home Server (Ubuntu)",
            "CSS/Style : ",
            "TailwindCSS",
            "Library : ",
            "shadcn/ui",
            "Global State : ",
            "Context API",
          ]}
          pageUrl="https://sto.joondev.com/"
          githubUrl=""
          image={stoPic}
          repo={false}
        />
        <PortfolioCard
          title="Server Monitoring"
          descriptions={[
            "Deploy/Infra : ",
            "Home Server (Ubuntu)",
            "Monitoring : ",
            "Netdata",
            "Engine : ",
            "Docker",
          ]}
          pageUrl="https://netdata.joondev.com/"
          githubUrl=""
          image={netdataPic}
          repo={false}
        />
      </div>
    </section>
  );
}
