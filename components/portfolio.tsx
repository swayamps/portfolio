'use client'

import * as React from "react"
import {Home,Library, ArrowRight,ExternalLink, Github, Twitter, Linkedin, Mail, ChevronDown, Briefcase, GraduationCap, Music, Trophy, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
// import Image from "next/image"

export function Portfolio() {
  const [open, setOpen] = React.useState(false)
  const [sidebarVisible, setSidebarVisible] = React.useState(true)

  const socials = [
    { name: "GitHub", icon: Github, url: "https://github.com/swayamps" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/SwayamSah" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/swayamprasadsah" },
    { name: "Email", icon: Mail, url: "mailto:swayamps4567@gmail.com" },
    { name: "Spotify", icon: Music , url: "https://open.spotify.com/user/31chovjfaj7tzyagxbmrygbdapqy?si=00e109f4dbde49c3" },
  ]

  const workExperience = [
    {
      title: "Machine Learning Intern",
      company: "Suvidha Foundation",
      duration: "Jun 2024 - Jul 2024",
      location: "Remote",
      technologies: ["Pegasus model", "Machine Learning", "Natural Language Processing"],
      description: [
        "Collected and curated a dataset of 500 news articles from various sources for model training.",
        "Successfully implemented the Pegasus model to summarize the collected news articles.",
        "Conducted model evaluation using metrics such as accuracy and F1 score, and documented the results.",
      ],
    },
    {
      title: "Research Intern",
      company: "Bennett University",
      duration: "Oct 2023 - Dec 2023",
      location: "Greater Noida, India",
      technologies: ["Python", "K-means clustering", "Machine Learning"],
      description: [
        "Compiled a comprehensive dataset of over 10000 Python code snippets for training purposes.",
        "Implemented K-means clustering to categorize more than 10,000 code snippets using vector representations.",
        "Trained a machine learning model to generate relevant Python code snippets from user prompts.",
      ],
    },
  ]

  const projects = [
    {
      title: "SwasthKheti",
      description: "AI-driven platform for leaf disease detection",
      technologies: ["Tensorflow", "Torch", "React", "Django", "Python", "HTML CSS", "JavaScript", "NLP", "SWIN Transformer", "Gemini"],
      achievements: [
        "Achieved 98% accuracy in leaf disease detection using the SWIN Transformer model.",
        "Developed a web platform offering 1,000+ resources, with multilingual support for 100+ languages.",
      ],
      link: "https://github.com/lokesh0802/Swasth-Kheti",
    },
    {
      title: "Sound Scout",
      description: "A comprehensive music analysis and generation platform",
      technologies: ["Tensorflow", "Torch", "HTML", "CSS", "Python", "Streamlit","GPT 3.5", "Spotify API"],
      achievements: [
        "Integrated AI Music Generator using SunoAI's API to create unique 60-120 second songs based on user prompts.",
        "Analyzed 10,000+ songs and trends using Spotify and Billboard data from 1950 to 2019.",
      ],
      link: "https://sound-scout.streamlit.app",
    },
    {
      title: "INfostering",
      description: "A tagline and keyword generator for businesses",
      technologies: ["Python", "HTML", "CSS", "NextJS", "TypeScript", "GPT 3.5"],
      achievements: [
        "Generates highly relevant taglines and 4-5 keywords tailored to the product description.",
        "Built the system using GPT 3.5 with a Python back-end and NextJS front-end.",
      ],
      link: "https://github.com/swayamps/INfostering-----Python-",
    },

    {
      title: "OurMind",
      description: "An AI-driven mental health chatbot offering empathetic support and wellness resources.",
      technologies: ["Python", "HTML", "CSS", "Streamlit", "Gemini"],
      achievements: [
        "Provides empathetic and helpful responses to support mental health needs.",
        "Developed using GPT 3.5 with a Python backend and a front-end interface built in Streamlit.",
      ],    
      link: "https://ourmind.streamlit.app/",
    },

  ]

  const codingProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/swayamps4567/" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/swayamps4567" },
    { name: "CodeForces", url: "https://codeforces.com/profile/swayamsah" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/swayampax2e/" },
  ]

  return (
    <div className="h-screen bg-[#121212] text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between h-16 px-6 bg-[#070707]">
        <Button variant="ghost" size="icon" className="text-[#b3b3b3]">
          <Home className="w-5 h-5" />
        </Button>
        
        <div className="flex-1 max-w-xl mx-auto">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between bg-[#242424] text-white border-0 hover:bg-[#2a2a2a]">
                Search socials or projects
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] bg-[#242424] text-white border-0">
              <Command>
                <CommandInput placeholder="Search socials or projects..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Socials">
                    {socials.map((social) => (
                      <CommandItem key={social.name}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                          <social.icon className="w-4 h-4" />
                          {social.name}
                        </a>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandGroup heading="Projects">
                    {projects.map((project) => (
                      <CommandItem key={project.title}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                          <ExternalLink className="w-4 h-4" />
                          {project.title}
                        </a>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* <Avatar className="w-8 h-8">
          <AvatarImage src="/myimage.jpg" alt="Swayam Prasad Sah" />
          <AvatarFallback>SPS</AvatarFallback>
        </Avatar> */}
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar - Projects */}
        <aside className={`w-64 bg-[#121212] p-4 transition-all duration-300 ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[#b3b3b3]">
              <Library className="w-5 h-5" />
              <span className="font-semibold">My Projects</span>
            </div>
            <div className="flex items-center gap-1">
              {/* <Button variant="ghost" size="icon" className="text-[#b3b3b3] hover:text-white">
                <Plus className="w-4 h-4" />
              </Button> */}
              <Button variant="ghost" size="icon" className="text-[#b3b3b3]" onClick={() => setSidebarVisible(false)}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="grid gap-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 bg-gradient-to-b from-[#1e1e1e] to-[#121212] overflow-hidden transition-all duration-300 ${sidebarVisible ? '' : 'pl-16'}`}>
          {!sidebarVisible && (
            <Button
              variant="ghost"
              size="icon"
              className="m-2 text-[#b3b3b3]"
              onClick={() => setSidebarVisible(true)}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
          <div className="p-6 h-full flex flex-col">
            <h1 className="text-3xl font-bold mb-6 text-white">Work Experience</h1>
            
            <ScrollArea className="flex-grow">
              <div className={`grid gap-6 pr-4 ${sidebarVisible ? '' : 'md:grid-cols-2'}`}>
                {workExperience.map((job, index) => (
                  <section key={index} className="bg-[#181818] p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-2 text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      {job.title} at {job.company}
                    </h2>
                    <p className="text-[#b3b3b3] mb-2">{job.duration} | {job.location}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {job.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-[#282828] rounded-full text-[#1db954]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-[#b3b3b3]">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </ScrollArea>

            <h1 className="text-3xl font-bold my-6 text-white">Education</h1>
            <div className={`${sidebarVisible ? '' : 'md:grid md:grid-cols-2 md:gap-6'}`}>
              <section className="bg-[#181818] p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2 text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Bachelor of Technology in CSE
                </h2>
                <p className="text-[#b3b3b3]">Bennett University | 2022 - 2026</p>
                <p className="text-[#b3b3b3]">CGPA: 9.51</p>
              </section>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Profile and About */}
        <aside className="w-80 bg-[#121212] p-4 border-l border-[#282828]">
          <ScrollArea className="h-full">
            <div className="flex flex-col items-center mb-6">
              <Avatar className="w-70 h-80 mb-4">
                <AvatarImage src="/myimage.jpg" alt="Swayam Prasad Sah" />
                <AvatarFallback>SPS</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold text-white">Swayam Prasad Sah</h2>
              <p className="text-[#b3b3b3]">Software Developer</p>
              <p className="text-[#b3b3b3]">Assam, India</p>
            </div>
            <Separator className="my-4 bg-[#282828]" />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">About me</h3>
              <p className="text-[#b3b3b3]">
                Hello, I am Swayam, I am currently a third year Computer Science Engineering student at Bennett University. I am passionate about Machine Learning, Deep Learning, and Artificial Intelligence. I have a keen interest in developing innovative solutions to real-world problems. I am always eager to learn new technologies and explore new domains.
              </p>
              <Separator className="my-4 bg-[#282828]" />
              <h3 className="text-lg font-semibold text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["C/C++", "Python", "Java", "JavaScript", "HTML", "CSS", "NodeJS", "Git", "GitHub", "TensorFlow", "Keras", "PyTorch", "ReactJS", "MongoDB", "MySQL", "Jira"].map((skill) => (
                  <span key={skill} className="px-2 py-1 text-sm bg-[#282828] rounded-full text-[#1db954]">
                    {skill}
                  </span>
                ))}
              </div>
              <Separator className="my-4 bg-[#282828]" />
              <h3 className="text-lg font-semibold text-white">Areas of Interest</h3>
              <p className="text-[#b3b3b3]">
                Machine Learning, Generative AI, Natural Language Processing, Deep Learning, Data Structures and Algorithms, Operating Systems, Object-Oriented Programming, Computer Networks, Database Management Systems, Software Engineering, Artificial Intelligence
              </p>
              <Separator className="my-4 bg-[#282828]" />
              <h3 className="text-lg font-semibold text-white">Awards and Achievements</h3>
              <ul className="list-disc list-inside text-[#b3b3b3]">
                <li>Secured 2nd prize in a project showcase featuring 100+ entries for innovative music analysis.</li>
                <li>Awarded Dean’s List Award, Bennett University (Even Semester 2023-24) for outstanding academic performance.</li>
                <li>Advanced to the final round of the prestigious Hacknosis hackathon by hackerearth.</li>
                
              </ul>
              <Separator className="my-4 bg-[#282828]" />
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Coding Profiles
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-[#282828] rounded-md text-[#1db954] hover:bg-[#3e3e3e] transition-colors"
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, technologies, link }: { title: string; description: string; technologies: string[]; link: string }) {
  return (
    <div className="flex flex-col gap-2 p-2 rounded-md hover:bg-[#282828] cursor-pointer">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-[#b3b3b3]">{description}</p>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#1db954] hover:text-[#1ed760]">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <div className="flex flex-wrap gap-1">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 text-xs bg-[#282828] rounded-full text-[#1db954]">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}