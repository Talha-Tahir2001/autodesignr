'use client';
import { Workflow, MessageSquare, Zap, Palette, Code, Rocket, Users, ArrowRight, Sparkles, DollarSign } from "lucide-react";
import { Badge } from "../ui/badge";

import { useState } from "react";
import { Suggestion, Suggestions } from "../ai-elements/suggestion";
import AIPromptInput from "./ai-prompt-input";

export function Hero() {
    const [promptText, setPromptText] = useState<string>("");
    const suggestions = [
        {
            label: "Finance Tracker",
            icon: DollarSign,
            value: `Finance App Statistics Screen. Current Balance at the top with Dollar Amount. 
            Bar Chart showing spending over months (Jan to Dec).
            Pie Chart showing expenses by category (Food, Rent, Utilities, etc.). 
            Recent transactions list with icons and timestamps. Monthly budget progress bars for different categories.`
        },
        {
            label: "Social Dashboard",
            icon: Users,
            value: `Social Media Analytics Dashboard. User engagement metrics at the top. 
            Line chart showing follower growth over the last 30 days. 
            Table listing top performing posts with likes, comments, and shares. 
            Sidebar with platform selection and notification center.
            Real-time activity feed with user avatars and timestamps.`
        },
        {
            label: "AI Assistant",
            icon: MessageSquare,
            value: `Modern AI Chat Interface. Sidebar with conversation history and categories. 
            Main chat window with message bubbles for user and AI. 
            Code block syntax highlighting for technical responses. 
            Input field with file attachment and voice command options.
            Model selection dropdown and token usage indicator.`
        },
        {
            label: "Project Planner",
            icon: Workflow,
            value: `Kanban Board for Project Management. Columns for To Do, In Progress, and Done. 
            Task cards with priority badges, due dates, and assignee avatars. 
            Drag and drop functionality between columns. 
            Progress bar at the top for overall project completion.
            Calendar view toggle for deadline tracking.`
        },
        {
            label: "Dev Portfolio",
            icon: Code,
            value: `Developer Portfolio Website. Hero section with a terminal-style typing effect. 
            Grid of project cards with tech stack icons and GitHub links. 
            Experience timeline showing career progression. 
            Contact form with custom validation and success state.
            Dark mode toggle and responsive navigation menu.`
        },
        {
            label: "Fitness Activity",
            icon: Zap,
            value: `Fitness and Wellness App. Dashboard showing daily step count and calories burned. 
            Workout library with video previews and difficulty levels. 
            Progress charts for weight and muscle mass over time. 
            Social feed for sharing achievements with friends.
            Integration with wearable devices and health data.`
        },
    ]
    const handleSuggestionClick = (suggestion: string) => {
        setPromptText(suggestion);
    }
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-20 pb-12 px-4 md:px-6 overflow-hidden">
            <div className="max-w-5xl w-full flex flex-col items-center gap-8 z-10">
                {/* Hero Statement */}
                {/* Hero Statement - Fluid Typography */}
                <div className="text-center space-y-6 max-w-4xl">
                    <Badge variant="default" className="px-4 py-1.5 text-sm md:text-md animate-in fade-in slide-in-from-bottom-3 duration-1000">
                        <Sparkles className="size-3.5 md:size-4 mr-2" />
                        <span>AI Powered UI/UX Design</span>
                    </Badge>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] balance">
                        Design Mobile Apps <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                            in Seconds
                        </span>
                    </h1>


                    <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed balance">
                        From idea &rarr; structured mobile experiences and high-fidelity mockups in minutes, not days.
                    </p>
                </div>
                {/* Big AI Input Box - Better Width Control */}
                <div className="flex w-full max-w-3xl flex-col items-center gap-6 md:gap-8 relative z-50">
                    <div className="w-full shadow-2xl shadow-primary/10 rounded-3xl">
                        <AIPromptInput
                            promptText={promptText}
                            setPromptText={setPromptText}
                            isLoading={false}
                            onSubmit={() => { }}
                        />
                    </div>

                    {/* Suggestions - Improved wrapping and scrolling */}

                    <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar">
                        <div className="flex flex-nowrap lg:flex-wrap lg:justify-center gap-2 md:gap-3 px-4 min-w-max lg:min-w-0 lg:px-0">
                            {suggestions.map((suggestion) => (
                                <Suggestion
                                    variant="secondary"
                                    key={suggestion.label}
                                    suggestion={suggestion.label}
                                    onClick={() => handleSuggestionClick(suggestion.value)}
                                    className="text-xs md:text-sm py-1.5 px-3 md:px-4 h-auto whitespace-nowrap"
                                >
                                    <suggestion.icon className="size-3 md:size-4" />
                                    <span>{suggestion.label}</span>
                                </Suggestion>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Live Visual Output - Responsive Aspect Ratio */}
                {/* <div className="w-full max-w-5xl mt-4 md:mt-8">
                    <div className="relative aspect-square sm:aspect-video w-full rounded-2xl md:rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 group">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:48px_48px]"></div>

                        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 text-center">
                            <div className="size-16 md:size-20 rounded-2xl bg-primary/10 flex items-center justify-center animate-pulse">
                                <Sparkles className="size-8 md:size-10 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold">Live Visual Output</h3>
                                <p className="text-sm md:text-base text-muted-foreground max-w-xs md:max-w-md">
                                    Your generated interface will appear here in real-time as the agent iterates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Your Projects */}
                <div className="w-full max-w-4xl mt-4 md:mt-8">
                    <h1 className="text-2xl font-bold tracking-tight">Your Projects</h1>
                    <p className="text-sm md:text-base text-muted-foreground max-w-xs md:max-w-md">See all your generated designs in one place.</p>
                </div>


                {/* Proof-of-Intelligence Blocks */}
                <div className="w-full mt-24 space-y-12">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold tracking-tight">Not Just Generation. Iteration.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Workflow,
                                title: "Plans User Flows",
                                desc: "Maps out the entire user journey before a single pixel is placed."
                            },
                            {
                                icon: MessageSquare,
                                title: "Critiques Its Designs",
                                desc: "Self-corrects generic patterns to match your specific brand voice."
                            },
                            {
                                icon: Zap,
                                title: "Improves Usability",
                                desc: "Automatically refines tap targets and contrast for maximum accessibility."
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="flex flex-col items-start p-6 rounded-2xl border border-border bg-card/50 hover:bg-card/80 transition-colors backdrop-blur-sm">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                <p className="text-sm text-muted-foreground">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Proof */}
                <div className="w-full mt-24 border-t border-border pt-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-8">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Built for Real Product Teams</span>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {[
                                { Icon: Palette, label: "UX Designers" },
                                { Icon: Code, label: "Dev Teams" },
                                { Icon: Rocket, label: "Founders" },
                                { Icon: Users, label: "Product Managers" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 group">
                                    <item.Icon className="w-6 h-6 text-foreground/80 group-hover:text-primary transition-colors" />
                                    <span className="font-semibold text-lg">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}