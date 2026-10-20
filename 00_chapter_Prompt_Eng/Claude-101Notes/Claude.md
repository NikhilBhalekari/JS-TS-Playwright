Claude 101 Study Guide

What is Claude?

Writing Effective Prompts

Common Challenges & Fixes

AI Fluency: The 4D Framework

Navigating the Claude Desktop App

Projects

Artifacts

Skills

Connectors & MCP

Enterprise Search

Research Mode

Use Cases by Role

Claude’s Extended Tools

Quick Reference Cheatsheet

﻿

Target Audience

Software Engineer

QA -

MT

AT who are using Claude

GHCP

Claude

﻿

Why do we even want this certificate?

Credential, yes, you know the concept

Proof

﻿

I will get a job after getting the certificate

Addon

MT

AT

﻿

﻿

Do I need to pay for $20 of Claude for this?

Yes / No

Not Mandatory

﻿

﻿﻿anthropic.skilljar.com/claude-101 - FREE

Claude -> Invest small $20

﻿

What is Claude?

﻿﻿claude.ai/new

Claude is an AI assistant built on Constitutional AI, a training approach that aligns Claude with human values and makes it operate transparently.

At its core, Claude is guided to be helpful, harmless, and honest.

Claude is not just a chatbot: think of it as a thought partner who can tackle complex problems, not just answer simple questions.

﻿

LLM -> Brain

AI Agent -> Brain + Memory + Tools (workflow)

﻿

Key Characteristics

Steerable & collaborative, takes direction on personality, tone, and behavior

Less likely to produce harmful outputs than other models

Easier to converse with, gets to your desired output with less effort

Available everywhere: Web, desktop, mobile; syncs across all devices when signed in.

﻿

What Claude Excels At

Capability

Description

Writing & Content Creation

Social posts, emails, reports; adapts tone and voice on request

Research & Analysis

Explores research angles, compiles findings, analyzes data

Coding Assistance

Write, debug, and explain code across many languages

Problem-Solving & Reasoning

Complex cognitive tasks, math, strategic analysis

Learning New Things

Adapts to your learning style and pace

Context Window

Claude can ingest 200K+ tokens (~500+ pages of text) in a single conversation, no need to re-upload files repeatedly.

500 Pages that claude can remember, After that i forgets the extra things.

Plan Availability

Claude is available across Free($0), Pro($20), Max(5x -$100, 20x - $200, Team, and Enterprise plans (some advanced features are plan-specific).

﻿

/ claude.ai

﻿

﻿﻿wisprflow.ai/pricing

Writing Effective Prompts

The Golden Rule

Speak to Claude like a coworker, naturally, concisely, and conversationally.

﻿

The 3-Part Prompt Framework

1. Set the Stage

Who are you? What's your role?

What's the objective or context?

What background does Claude need?

2. Define the Task

What specific action do you want Claude to take?

Write? Analyze? Build? Research? Test? Create?

3. Specify Rules

What tone or style?

What format or structure?

Any examples to follow?

﻿

Prompts

I want you to act as someone with 15 years of experience who has very good functional knowledge of QA. I want you to create a test plan, but I want to make sure that it is not a generic test plan. I want you to make sure that the test plan should be properly production-ready, which we need to create for the website, which is app.thetestingacademy.com. In this case, I want you to go through the website research from your end and just figure out what exactly a test plan will look like and what exactly the proper structure for it is. Create a test plan in the Jira format which can be uploaded into Zyphr.

RICEPOT - AI3X, 2X, 1X - RICEPOT

﻿

﻿﻿github.com/PramodDutta/AITesterBlueprint2x/blob/main/Chapter_02_PROMPT_ENGINEERING/Project_02_RICE_POT_Selenium_FW/RICE_POT.md

﻿

Example Prompt (all 3 elements)

"I'm a backend developer at a fintech startup building a transaction monitoring service. We're evaluating whether to go serverless (AWS Lambda) or containerized (ECS/Fargate) for our new fraud detection microservice, which processes around 500 events per second at peak. Can you compare both approaches across cost, scalability, cold start latency, and operational overhead? Structure it as a comparison table followed by a recommendation with reasoning."

﻿

Stage: Backend dev, fintech startup, fraud detection microservice, ~500 events/sec peak load

Task: Compare AWS Lambda vs ECS/Fargate across four specific dimensions

Rules: Comparison table + written recommendation, technical but concise tone

﻿

Adding Context to Claude

Uploads are a shortcut: instead of explaining everything, just attach the file. Claude can analyze:

Text content in PDF, DOCX, CSV, TXT

Visual elements (charts, graphics) in PNG, JPEG

Ways to give Claude context:

Upload a document → ask Claude to summarize key points

Share an image → ask Claude to describe or analyze it

Attach a spreadsheet → ask Claude to find trends

Upload code → ask Claude to explain it or find bugs

﻿

Tip: Add your personal preferences in Settings so Claude applies them to every response automatically.

﻿

Iterating on Responses

First drafts are starting points, not final answers. You have options when Claude's response isn't right:

Ask follow-up questions, "Can you expand on the second point?"

Give feedback, "This is good, but the tone is too formal. Make it more conversational."

Redirect, "Actually, I was asking about X, not Y. Let me clarify..."

Restart: Open a new chat with a clearer prompt if the conversation went off the rails.

﻿

﻿

image.png

﻿

image.png

﻿

Common Challenges & Fixes

﻿

﻿

image.png

﻿﻿github.com/PramodDutta/AITesterBlueprint2x/blob/main/Chapter_01_LLM_BASICS/Project_01_LocalLLMTestGenerator/Anti-HalluconationRule.md

﻿

﻿

The Iteration Mindset

Effective Claude users:

Treat first drafts as starting points, review, identify issues, refine

Give specific feedback, "Cut the first two paragraphs and make the conclusion more action-oriented" beats "Make it shorter"

Know when to start fresh, sometimes a new chat with a clearer prompt is faster than course-correcting

﻿

Evaluating Claude for Your Workflows (Evals)

A simple 4-step approach to know if Claude is good at a specific task:

Gather examples, collect 5–10 examples of a task you do regularly

Create test prompts, write prompts that would generate similar outputs

Compare outputs, run your prompts and compare Claude's responses to your examples:

Does Claude capture the key information?

Is the tone and style appropriate?

What's missing?

Refine your approach, adjust prompts, add examples, identify where human review is essential

﻿

Hotfix -> Daily Series of steps 1 -> Manual In Nature ->> hotifx-validator-aiagent

Get branch from Dev -> Trigger the Hotfix - Env -> Run P0 -> Sign In Slack (3-4 extra ) - 2 hours - 1 hour, 1 hour

﻿

Claude Skill -> skill -> save almost 1-2 hours per day -> Some other

﻿

AI Fluency: The 4D Framework

Developed by Prof. Rick Dakan (Ringling College of Art and Design) and Prof. Joseph Feller (University College Cork).

Competency

What It Means

Delegation

Deciding what work goes to humans vs. AI; understanding your goals and AI capabilities

Description

Communicating effectively with AI; clearly defining outputs, guiding processes, specifying behaviors

Discernment

Critically evaluating AI outputs; assessing quality, accuracy, and appropriateness

Diligence

Using AI responsibly and ethically; maintaining transparency and accountability

The 3-part prompt framework (Stage, Task, Rules) is rooted in Description. Troubleshooting techniques draw on Discernment and Diligence.

﻿

﻿

Part 2

﻿

Claude 101 - Part 2

Navigating the Claude Desktop App

﻿﻿claude.com/download

﻿

Chat

Best for: Quick questions, brainstorming, drafting, iterative problem-solving.

Desktop-only extras:

Quick entry: Double-tap Option (Mac) to pull Claude up over any app in a compact overlay

Screenshots & window sharing: Capture exactly what you're looking at (Mac)

Dictation: Talk through problems instead of typing (Mac)

Desktop connectors: Connect local tools and services

﻿

Cowork

Best for: Complex, sustained work (research, analysis, finished documents and deliverables).

Claude can multitask, tackling different parts of a project simultaneously.

Key features:

Folder access: Give Claude a folder; it reads what's there, determines relevance, saves finished work back

Scheduled tasks: Recurring work on a schedule (daily briefings, weekly roundups, inbox triage)

Browser use: Connect Claude in Chrome to let Claude navigate websites and pull information directly

Plugins: Add capabilities: live financial data, internal knowledge base search, compliance frameworks

Protected environment: Runs in a contained space; only accesses folders you share

Available to Pro, Max, Team, and Enterprise users (research preview).

﻿

Code

Best for: Building software (writing, testing, running, and deploying code).

Environment options:

Local: Claude works directly with a folder on your computer, full file system and terminal access

Remote: Claude works in a cloud environment connected to a GitHub repo; sessions continue even if you close the app

Interaction modes:

Ask: Claude proposes every change and waits for your approval

Code: Claude applies file changes automatically but checks before running terminal commands

Plan: Claude outlines its full approach before touching anything

Rolling out to Pro, Max, Team, and Enterprise users.

﻿

Side-by-Side Comparison

﻿

Chat

Cowork

Code

Optimized for

Quick exchanges, drafting, iterative Q&A

Complex research, analysis, finished deliverables

Software development

Key features

Quick entry, dictation

Folder access, scheduled tasks, subagents, plugins

Ask/Code/Plan modes, visual diffs, git integration

Environments

Web, desktop, mobile

Contained workspace (folders you share)

Local or cloud/GitHub

Projects

What Are Projects?

Self-contained workspaces with their own memory, chat histories, knowledge bases, and custom instructions. Dedicated environments for specific, ongoing work streams.

When to Use Projects

Create a project when you have:

Reference materials you'll reuse repeatedly

Consistent requirements for how Claude should respond

Team collaboration needs where multiple people need the same foundation

Setting Up a Project (3 Steps)

Step 1: Create the Project

Go to claude.ai/projects or hover over the sidebar → Projects

Click + New Project

Give it a descriptive name (e.g., "Q4 Marketing Campaign")

Add a description (helps you and teammates; Claude doesn't see this directly)

Set visibility: private or shared with org (Team/Enterprise)

Step 2: Write Project Instructions

Instructions tell Claude how to behave across all conversations in the project.

Good instructions include:

Context, "This project is for creating marketing content for our B2B software product."

Process, "First consider a blog structure that will entice this audience, then write the draft."

Tone/style, "Use a professional but conversational tone. Avoid jargon when possible."

Requirements, "Always include a call-to-action at the end of marketing copy."

Step 3: Build the Knowledge Base

Upload files Claude should reference: PDF, DOCX, CSV, TXT, HTML, and more. Also connect Google Drive directly.

What to upload:

Brand guidelines, style guides, templates

Research reports, meeting notes, requirements docs

Examples of work you want Claude to emulate

Technical documentation or specifications

Tip: Name files descriptively. Claude uses file names to retrieve the right information. Q4-Brand-Guidelines.pdf beats document1.pdf.

How Large Knowledge Bases Work: RAG

When your project knowledge approaches the context limit, Claude automatically enables Retrieval Augmented Generation (RAG), intelligently searching and retrieving only the most relevant information, expanding capacity by up to 10x while maintaining response quality.

Collaboration (Team & Enterprise)

Permission levels when sharing:

Can view: Read-only access with the ability to chat

Can edit: Full collaboration: modify instructions, update knowledge, manage members

Owner: Controls everything, including who sees the project

To share: Open project → "Share project" → add members by name/email or share with everyone at your org.

Project Ideas

Project

What to Upload

Q4 Product Launch

Product specs, competitive analysis, messaging notes

Research Support

Competitive reviews, user research data, customer feedback

Client Account Hub

Brand guidelines, past deliverables, communication history

Event Planning

Venue contracts, speaker bios, attendee data

Job Description Generator

Past JDs, team charters, headcount request docs

Best Practices

Start focused, then expand

Keep your knowledge base current (outdated docs → outdated responses)

Write clear, specific instructions

Group related documents together

Reference documents by name in prompts: "Based on our Q3 report, what were the top customer concerns?"

﻿

Artifacts

What Are Artifacts?

Standalone, interactive outputs that Claude creates in a dedicated window alongside your conversation, rendered and ready to use, not buried in chat.

When Does Claude Create an Artifact?

Automatically when content:

Is significant and self-contained (typically 15+ lines)

Is something you're likely to edit, iterate on, or reuse

Represents complex content that stands alone

Is something you'll want to reference or use later

If Claude doesn't create one automatically: "Create this as an artifact."

Artifact Types

Type

Best For

Documents

(Markdown, plain text)

Meeting notes, reports, blog posts, project plans

Code snippets

Working code in Python, JavaScript, C++, and more

HTML pages

Landing pages, forms, interactive demos, prototypes

SVG images

Logos, icons, illustrations, visual elements

Mermaid diagrams

Flowcharts, sequence diagrams, Gantt charts, org charts

React components

Calculators, dashboards, games, data visualizations, with real logic

What You Can Do with Artifacts

View, toggle between preview and underlying code

Copy, grab content for use elsewhere

Download, save as a file to your computer

Share within org (Team/Enterprise), stays behind team authentication

Publish publicly (Free, Pro, Max), anyone with the link can view and interact; others can "remix" (open in their own Claude conversation to modify)

You can unpublish at any time. Your chat always remains private even when an artifact is published.

Tips for Better Artifacts

Be specific, "Build a monthly budget tracker where I can input expenses by category, see a pie chart breakdown, and get a warning when I'm over budget" beats "Build a budget tracker"

Describe the end user, "This flowchart is for new employees" vs. "for the engineering team" produces different results

Iterate incrementally, add one feature or change at a time

Request explicitly when needed, "Please create that as an artifact"

﻿

﻿

Skills

What Are Skills?

Folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized, repeatable tasks.

Think of them as expertise packages, they teach Claude how to complete specific tasks in a repeatable way.

Types of Skills

Type

Who Creates It

Examples

Anthropic Skills

Anthropic

Excel, Word, PowerPoint, PDF file creation

Custom Skills

You or your organization

Company brand guidelines, meeting note templates, data analysis workflows

Anthropic Skills are available to all paid users and invoked automatically once enabled, no per-task setup needed.

Enabling Skills

Go to Settings → Capabilities

Ensure Code execution and file creation is toggled on (Skills require this)

Scroll to the Skills section

Toggle individual skills on or off

Enterprise: Owners must enable both Code execution and Skills in Admin settings first. Team: Enabled by default at the org level.

Using Skills

You don't need to think about them: Claude selects the right skill automatically. Example triggers:

"Create an Excel spreadsheet tracking monthly expenses with formulas for totals"

"Turn this meeting notes document into a PowerPoint presentation"

"Generate a PDF report summarizing this data"

Output: a downloadable file you can save to your computer or Google Drive.

Creating a Custom Skill (via conversation)

Start a new chat and tell Claude what you want: "I want to create a skill for writing quarterly business reviews"

Answer Claude's interview questions about your workflow

Upload reference materials if you have them (templates, style guides, brand assets)

Claude generates a downloadable ZIP file with your skill

Go to Settings → Capabilities → Skills → Upload skill

﻿

﻿﻿github.com/PramodDutta/skillmasterclass/tree/main/skillmasterclass/skills/02-test-planning/test-plan-generator
