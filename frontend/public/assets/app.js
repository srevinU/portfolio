// assets/app.js

// returns the final, public path to this file
// path is relative to this file - e.g. assets/images/logo.png
import logoPath from "./logos/aws.svg";
import logoBash from "./logos/bash.svg";
import logoCss from "./logos/css.svg";
import logoDocker from "./logos/docker.svg";
import logoGit from "./logos/github.svg";
import logoHtml from "./logos/html.svg";
import logoJs from "./logos/javascript.svg";
import logoJenkins from "./logos/jenkins.svg";
import logoLinkedin from "./logos/linkedin.svg";
import logoMysal from "./logos/mysql.svg";
import logoNode from "./logos/nodejs.svg";
import logoPython from "./logos/python.svg";
import logoReact from "./logos/react.svg";
import logoRedis from "./logos/redis.svg";
import logoTypescript from "./logos/typescript.svg";
import logoVue from "./logos/vuejs.svg";
import netflixProject from "./projects/netflix.png";
import amazonProject from "./projects/amazon.png";
import logoProjectTemporary1 from "./projects/temporary1.png";
import logoProjectTemporary2 from "./projects/temporary2.png";
import platform from "./projects/platform.png";
import bg from "./background/bg.jpg";
import componentsProject from "./projects/components.png";

let html = `<img src="${logoPath}" alt="ACME logo">`;
html += `<img src="${netflixProject}" alt="Netflix">`;
html += `<img src="${amazonProject}" alt="Amazon">`;
html += `<img src="${componentsProject}" alt="component">`;
html += `<img src="${logoProjectTemporary1}" alt="Temporary logo">`;
html += `<img src="${logoProjectTemporary2}" alt="Temporary logo">`;
html += `<img src="${platform}" alt="Temporary logo">`;
html += `<img src="${logoBash}" alt="Bash logo">`;
html += `<img src="${logoCss}" alt="CSS logo">`;
html += `<img src="${logoDocker}" alt="Docker logo">`;
html += `<img src="${logoGit}" alt="Git logo">`;
html += `<img src="${logoHtml}" alt="HTML logo">`;
html += `<img src="${logoJs}" alt="JavaScript logo">`;
html += `<img src="${logoJenkins}" alt="Jenkins logo">`;
html += `<img src="${logoLinkedin}" alt="LinkedIn logo">`;
html += `<img src="${logoMysal}" alt="MySQL logo">`;
html += `<img src="${logoNode}" alt="Node.js logo">`;
html += `<img src="${logoPython}" alt="Python logo">`;
html += `<img src="${logoReact}" alt="React logo">`;
html += `<img src="${logoRedis}" alt="Redis logo">`;
html += `<img src="${logoTypescript}" alt="TypeScript logo">`;
html += `<img src="${logoVue}" alt="Vue.js logo">`;
html += `<img src="${bg}" alt="Background">`;
