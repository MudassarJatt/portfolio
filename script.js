document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. PROJECT DETAILS DATA & MODAL TRIGGERS
    // ==========================================
    const projectData = {
        supply_chain: {
            title: "AI MEDICINE SUPPLY CHAIN",
            subhead: "Distributed Drug Tracking & Verification Ecosystem",
            category: "AI & LOGISTICS PLATFORM",
            image: "brain.jpg",
            desc: "A secure medicine distribution verification platform designed to trace drug batches across transit logs using prediction networks. Prevents counterfeit medicines from entering the supply pipeline by verifying scans dynamically.",
            highlights: [
                "Designed asynchronous FastAPI routing gates connected to MongoDB document logs.",
                "Achieved 100% drug batch traceability metrics on local test environments.",
                "Optimized tracking search queries reducing average transit latency by 35%."
            ],
            tags: ["FastAPI", "MongoDB", "Python", "API Integration", "AI Automation"],
            github: "https://github.com/MudassarJatt",
            live: "#"
        },
        e_invoice: {
            title: "E-INVOICE MANAGEMENT",
            subhead: "High-Performance Full Stack Billing Dashboard",
            category: "FULL STACK WEB DEVELOPMENT",
            image: "dashboard.jpg",
            desc: "A complete invoicing system built to automate enterprise billing records tracking, calculations, and tax processing. Incorporates clean database integrations and haptic visual alerts.",
            highlights: [
                "Integrated multi-role authentication gateways for secure client portal access.",
                "Calculated real-time tax analytics pipelines reducing manual accounting errors by 98%.",
                "Engineered interactive, responsive UI layouts using React and Tailwind styling patterns."
            ],
            tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
            github: "https://github.com/MudassarJatt",
            live: "#"
        },
        video_automation: {
            title: "AI VIDEO FLOWS",
            subhead: "Automated Video Generation & Audio synthesis",
            category: "AI AUTOMATIONS & CREATIVE TECH",
            image: "js_logo.jpg",
            desc: "An automation pipeline that orchestrates AI-driven media generation. It connects Google Veo's video generator tools and ElevenLabs voice generation APIs, creating scripts and outputs programmatically.",
            highlights: [
                "Constructed fully automated video scripts synthesis pipelines using GPT models.",
                "Linked ElevenLabs voice engines via optimized REST hooks.",
                "Automated video editing processes saving creative output latency."
            ],
            tags: ["Prompt Engineering", "Google Veo", "ElevenLabs", "AI Automation", "Python"],
            github: "https://github.com/MudassarJatt",
            live: "#"
        }
    };

    const projectModal = document.getElementById('projectModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    
    // Modal Inner Selectors
    const modalImage = document.getElementById('modalImage');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubhead = document.getElementById('modalSubhead');
    const modalDesc = document.getElementById('modalDesc');
    const modalHighlights = document.getElementById('modalHighlights');
    const modalTags = document.getElementById('modalTags');
    const modalGithubLink = document.getElementById('modalGithubLink');
    const modalLiveLink = document.getElementById('modalLiveLink');

    function openProjectModal(projectId) {
        const data = projectData[projectId];
        if (!data || !projectModal) return;

        // Populate Modal Fields
        modalImage.src = data.image;
        modalImage.alt = `${data.title} Preview`;
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalSubhead.textContent = data.subhead;
        modalDesc.textContent = data.desc;
        modalGithubLink.href = data.github;
        modalLiveLink.href = data.live;

        // Populate Highlights list
        modalHighlights.innerHTML = '';
        data.highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.textContent = highlight;
            modalHighlights.appendChild(li);
        });

        // Populate Tags chips
        modalTags.innerHTML = '';
        data.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'modal-tag-chip';
            span.textContent = tag;
            modalTags.appendChild(span);
        });

        // Show Modal
        projectModal.classList.add('active');
        document.body.classList.add('modal-lock');
        lucide.createIcons(); // refresh modal icons
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('active');
        document.body.classList.remove('modal-lock');
    }

    // Attach Click Events to Project Cards
    const projectCards = document.querySelectorAll('.project-card-item');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            if (projectId) {
                openProjectModal(projectId);
            }
        });
    });

    if (modalCloseBtn && modalBackdrop) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
        modalBackdrop.addEventListener('click', closeProjectModal);
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProjectModal();
            }
        });
    }

    // ==========================================
    // 1. NEURAL NETWORK CANVAS (AI RESEARCH) - INTERACTIVE
    // ==========================================
    const neuralCanvas = document.getElementById('neuralNetworkCanvas');
    if (neuralCanvas) {
        const ctx = neuralCanvas.getContext('2d');
        let width = neuralCanvas.width = neuralCanvas.parentElement.clientWidth;
        let height = neuralCanvas.height = neuralCanvas.parentElement.clientHeight;

        window.addEventListener('resize', () => {
            if (neuralCanvas.parentElement) {
                width = neuralCanvas.width = neuralCanvas.parentElement.clientWidth;
                height = neuralCanvas.height = neuralCanvas.parentElement.clientHeight;
            }
        });

        const nodes = [
            { id: 'n1', x: width * 0.15, y: height * 0.5, size: 4, label: 'Data Source' },
            { id: 'n2', x: width * 0.35, y: height * 0.25, size: 4, label: 'FastAPI Gate' },
            { id: 'n3', x: width * 0.35, y: height * 0.75, size: 4, label: 'MongoDB Sync' },
            { id: 'central', x: width * 0.55, y: height * 0.5, size: 14, isCentral: true, label: 'AI' },
            { id: 'n4', x: width * 0.75, y: height * 0.25, size: 4, label: 'Optimizers' },
            { id: 'n5', x: width * 0.75, y: height * 0.75, size: 4, label: 'Loss Minimizer' },
            { id: 'n6', x: width * 0.9, y: height * 0.5, size: 4, label: 'Prediction' }
        ];

        const connections = [
            { from: 'n1', to: 'n2' },
            { from: 'n1', to: 'n3' },
            { from: 'n2', to: 'central' },
            { from: 'n3', to: 'central' },
            { from: 'central', to: 'n4' },
            { from: 'central', to: 'n5' },
            { from: 'n4', to: 'n6' },
            { from: 'n5', to: 'n6' },
            { from: 'n2', to: 'n4' },
            { from: 'n3', to: 'n5' }
        ];

        const pulses = [];
        function createPulse(connection) {
            pulses.push({
                connection: connection,
                progress: 0,
                speed: 0.008 + Math.random() * 0.008
            });
        }

        setInterval(() => {
            if (pulses.length < 15) {
                const randomConnection = connections[Math.floor(Math.random() * connections.length)];
                createPulse(randomConnection);
            }
        }, 300);

        // Hover node track vars
        let hoveredNode = null;

        neuralCanvas.addEventListener('mousemove', (e) => {
            const rect = neuralCanvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;

            hoveredNode = null;
            let minDist = 25; // range
            nodes.forEach(node => {
                const dist = Math.hypot(node.x - mx, node.y - my);
                if (dist < minDist) {
                    minDist = dist;
                    hoveredNode = node;
                }
            });
        });

        neuralCanvas.addEventListener('mouseleave', () => {
            hoveredNode = null;
        });

        // Trigger burst on click
        neuralCanvas.addEventListener('click', () => {
            connections.forEach(conn => {
                createPulse(conn);
                setTimeout(() => createPulse(conn), 150);
            });
        });

        function drawNeuralNetwork() {
            ctx.clearRect(0, 0, width, height);

            ctx.lineWidth = 1;
            connections.forEach(conn => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (fromNode && toNode) {
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
                    ctx.beginPath();
                    ctx.moveTo(fromNode.x, fromNode.y);
                    ctx.lineTo(toNode.x, toNode.y);
                    ctx.stroke();
                }
            });

            pulses.forEach((pulse, index) => {
                const fromNode = nodes.find(n => n.id === pulse.connection.from);
                const toNode = nodes.find(n => n.id === pulse.connection.to);
                if (fromNode && toNode) {
                    pulse.progress += pulse.speed;
                    if (pulse.progress >= 1) {
                        pulses.splice(index, 1);
                        return;
                    }
                    const px = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
                    const py = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

                    ctx.fillStyle = 'rgba(167, 139, 250, 0.8)';
                    ctx.beginPath();
                    ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                    
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = '#a78bfa';
                    ctx.fillStyle = '#ffffff';
                    ctx.beginPath();
                    ctx.arc(px, py, 1.2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            nodes.forEach(node => {
                ctx.shadowBlur = node.isCentral ? 15 : 4;
                ctx.shadowColor = node.isCentral ? '#a78bfa' : '#14b8a6';

                if (node.isCentral) {
                    ctx.fillStyle = 'rgba(167, 139, 250, 0.12)';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.size + 4, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = '#a78bfa';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = '#030304';
                    ctx.font = 'bold 10px Inter';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.shadowBlur = 0;
                    ctx.fillText(node.label, node.x, node.y);
                } else {
                    ctx.fillStyle = 'rgba(20, 184, 166, 0.15)';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.size + 3, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = '#14b8a6';
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            });

            // Draw hovered tooltip overlay
            if (hoveredNode) {
                ctx.shadowBlur = 20;
                ctx.shadowColor = '#14b8a6';
                ctx.fillStyle = 'rgba(20, 184, 166, 0.3)';
                ctx.beginPath();
                ctx.arc(hoveredNode.x, hoveredNode.y, hoveredNode.size + 8, 0, Math.PI * 2);
                ctx.fill();
                
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'rgba(3, 3, 4, 0.95)';
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 1;
                
                const boxW = 95;
                const boxH = 22;
                const bx = Math.min(width - boxW - 5, Math.max(5, hoveredNode.x - boxW / 2));
                const by = Math.min(height - boxH - 5, Math.max(5, hoveredNode.y - boxH - 10));
                
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(bx, by, boxW, boxH, 4);
                } else {
                    ctx.rect(bx, by, boxW, boxH);
                }
                ctx.fill();
                ctx.stroke();
                
                ctx.fillStyle = '#ffffff';
                ctx.font = '500 8px Fira Code';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(hoveredNode.label, bx + boxW / 2, by + boxH / 2);
            }

            requestAnimationFrame(drawNeuralNetwork);
        }
        drawNeuralNetwork();
    }

    // ==========================================
    // 2. GITHUB MATRIX GENERATION - INTERACTIVE FILTERS
    // ==========================================
    const matrixContainer = document.getElementById('githubMatrix');
    const matrixTooltip = document.getElementById('matrixTooltip');

    if (matrixContainer) {
        matrixContainer.innerHTML = '';
        const totalBlocks = 98;
        const shades = [
            'rgba(255,255,255,0.03)',
            'rgba(255,255,255,0.03)',
            '#0e4429',
            '#006d32',
            '#26a641',
            '#39d353'
        ];

        for (let i = 0; i < totalBlocks; i++) {
            const block = document.createElement('div');
            block.classList.add('matrix-block');
            let shadeIndex = 0;
            const rand = Math.random();
            if (rand > 0.45 && rand <= 0.7) shadeIndex = 1;
            else if (rand > 0.7 && rand <= 0.82) shadeIndex = 2;
            else if (rand > 0.82 && rand <= 0.92) shadeIndex = 3;
            else if (rand > 0.92 && rand <= 0.97) shadeIndex = 4;
            else if (rand > 0.97) shadeIndex = 5;

            // Associate block with a random language filter
            const langs = ["cpp", "python", "js", "mongodb"];
            const blockLang = langs[Math.floor(Math.random() * langs.length)];
            block.dataset.lang = blockLang;

            block.style.backgroundColor = shades[shadeIndex];
            if (shadeIndex >= 3) {
                block.style.boxShadow = `0 0 4px ${shades[shadeIndex]}`;
            }

            // Interactive Tooltip on hover
            block.addEventListener('mouseenter', () => {
                if (matrixTooltip) {
                    const commitCount = shadeIndex === 0 ? 0 : Math.floor(shadeIndex * 3 + Math.random() * 3);
                    matrixTooltip.textContent = `Batch: +${commitCount} ${blockLang.toUpperCase()}`;
                    matrixTooltip.style.color = 'var(--accent-teal)';
                }
            });

            block.addEventListener('mouseleave', () => {
                if (matrixTooltip) {
                    matrixTooltip.textContent = "Hover blocks";
                    matrixTooltip.style.color = '';
                }
            });

            matrixContainer.appendChild(block);
        }

        // Language Filters highlights
        const langChips = document.querySelectorAll('.lang-chip');
        langChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const targetLang = chip.dataset.filter;
                const isAlreadyActive = chip.classList.contains('active');
                
                langChips.forEach(c => c.classList.remove('active'));
                const blocks = matrixContainer.querySelectorAll('.matrix-block');

                if (isAlreadyActive) {
                    // Reset opacity
                    blocks.forEach(b => b.style.opacity = '1');
                } else {
                    chip.classList.add('active');
                    // Filter blocks
                    blocks.forEach(b => {
                        if (b.dataset.lang === targetLang) {
                            b.style.opacity = '1';
                        } else {
                            b.style.opacity = '0.15';
                        }
                    });
                }
            });
        });
    }

    // ==========================================
    // 3. SPARKLINES PLOTTER - INTERACTIVE HOVER VALUES
    // ==========================================
    function drawSparkline(canvasId, points, strokeColor, fillColor) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width = canvas.clientWidth * window.devicePixelRatio;
        const height = canvas.height = canvas.clientHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        const clientWidth = canvas.clientWidth;
        const clientHeight = canvas.clientHeight;
        const maxVal = Math.max(...points) * 1.1;
        const minVal = Math.min(...points) * 0.9;
        const range = maxVal - minVal;

        ctx.clearRect(0, 0, clientWidth, clientHeight);
        ctx.beginPath();
        const stepX = clientWidth / (points.length - 1);
        
        points.forEach((val, idx) => {
            const posX = idx * stepX;
            const posY = clientHeight - 2 - ((val - minVal) / range) * (clientHeight - 4);
            if (idx === 0) {
                ctx.moveTo(posX, posY);
            } else {
                const prevX = (idx - 1) * stepX;
                const prevY = clientHeight - 2 - ((points[idx - 1] - minVal) / range) * (clientHeight - 4);
                const cpX1 = prevX + stepX / 2;
                const cpY1 = prevY;
                const cpX2 = prevX + stepX / 2;
                const cpY2 = posY;
                ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, posX, posY);
            }
        });

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.lineTo(clientWidth, clientHeight);
        ctx.lineTo(0, clientHeight);
        ctx.closePath();
        const grad = ctx.createLinearGradient(0, 0, 0, clientHeight);
        grad.addColorStop(0, fillColor);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fill();
    }

    drawSparkline('commitsSparkline', [10, 15, 12, 22, 20, 25, 24, 30, 28, 38], '#14b8a6', 'rgba(20, 184, 166, 0.25)');
    drawSparkline('prSparkline', [2, 6, 8, 12, 15, 20, 28, 30, 38, 45], '#a78bfa', 'rgba(167, 139, 250, 0.25)');
    drawSparkline('issuesSparkline', [1, 2, 2, 3, 3, 4, 4, 5, 5, 6], '#f43f5e', 'rgba(244, 63, 94, 0.25)');

    const sparklineItems = document.querySelectorAll('.sparkline-item');
    sparklineItems.forEach(item => {
        const descEl = item.querySelector('.sparkline-sub, .sparkline-value');
        const originalText = descEl ? descEl.textContent : '';

        item.addEventListener('mouseenter', () => {
            item.style.borderColor = 'var(--accent-teal)';
            if (descEl) {
                const sparkId = item.dataset.sparkId;
                if (sparkId === 'commits') descEl.textContent = "GPA 3.8 / Division #2";
                else if (sparkId === 'pr') descEl.textContent = "99.8% Success Rate";
                else if (sparkId === 'issues') descEl.textContent = "Zero Critical Bugs";
            }
        });

        item.addEventListener('mouseleave', () => {
            item.style.borderColor = '';
            if (descEl) descEl.textContent = originalText;
        });
    });

    // ==========================================
    // 4. MAGNETIC 3D TILT EFFECT ON BENTO CELLS
    // ==========================================
    const bentoCells = document.querySelectorAll('.bento-cell');
    bentoCells.forEach(cell => {
        cell.addEventListener('mousemove', (e) => {
            const rect = cell.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = -(y - centerY) / (centerY / 3.5);
            const tiltY = (x - centerX) / (centerX / 3.5);
            
            cell.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
            
            const borderX = (x / rect.width) * 100;
            const borderY = (y / rect.height) * 100;
            cell.style.backgroundImage = `radial-gradient(circle at ${borderX}% ${borderY}%, rgba(255, 255, 255, 0.08) 0%, transparent 60%), var(--card-bg)`;
        });
        
        cell.addEventListener('mouseleave', () => {
            cell.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
            cell.style.backgroundImage = '';
        });
    });

    // ==========================================
    // 4.5. INTERACTIVE TECHNOLOGIES HOVER & TAP LOCK PANEL
    // ==========================================
    const techData = {
        react: { title: "REACT / NEXT.JS", desc: "Used to build highly interactive layouts, dashboards, and WebGL canvases." },
        node: { title: "NODE.JS / EXPRESS", desc: "Writing API backend servers, Express gateways, and MongoDB database integrations." },
        python: { title: "PYTHON & AI", desc: "Automation scripting, video processing API workflows, and system calculations." },
        cpp: { title: "ADVANCED C++", desc: "Advanced algorithm design, data structures, and CISCO network simulators." },
        mongodb: { title: "MONGODB DATABASE", desc: "Database management, document storage architectures, and indexing transaction logs." },
        gpt: { title: "PROMPT ENGINEERING", desc: "Structuring prompt pipelines, content agents, and automated video workflows." },
        git: { title: "GIT & GITHUB", desc: "Git workflows, open source versioning, and secure project collaborations." },
        veo: { title: "GOOGLE VEO & ELEVENLABS", desc: "AI-powered creative video generation, audio assets orchestration, and automatic workflows." },
        design: { title: "UI/UX & GRAPHIC DESIGN", desc: "Premium glassmorphism layouts, responsive bento grids, and typography structures." }
    };

    const techIconCards = document.querySelectorAll('.tech-icon-card');
    const techDetailPanel = document.getElementById('techDetailPanel');
    
    if (techIconCards.length > 0 && techDetailPanel) {
        const detailTitle = techDetailPanel.querySelector('.tech-detail-title');
        const detailDesc = techDetailPanel.querySelector('.tech-detail-desc');
        let activePinnedTech = null;

        techIconCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                if (activePinnedTech) return;
                const techId = card.dataset.techId;
                const info = techData[techId];
                if (info) {
                    detailTitle.textContent = info.title;
                    detailTitle.style.color = 'var(--accent-teal)';
                    detailDesc.textContent = info.desc;
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (activePinnedTech) return;
                detailTitle.textContent = "SELECT A CORE TECH";
                detailTitle.style.color = '';
                detailDesc.textContent = "Hover over an icon to inspect architectural usage details.";
            });

            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const techId = card.dataset.techId;
                const info = techData[techId];

                if (activePinnedTech === card) {
                    activePinnedTech = null;
                    techIconCards.forEach(c => c.style.borderColor = '');
                    detailTitle.textContent = "SELECT A CORE TECH";
                    detailTitle.style.color = '';
                    detailDesc.textContent = "Hover over an icon to inspect architectural usage details.";
                } else {
                    activePinnedTech = card;
                    techIconCards.forEach(c => c.style.borderColor = '');
                    card.style.borderColor = 'var(--accent-teal)';
                    if (info) {
                        detailTitle.textContent = info.title + " [PINNED]";
                        detailTitle.style.color = 'var(--accent-teal)';
                        detailDesc.textContent = info.desc;
                    }
                }
            });
        });

        document.addEventListener('click', () => {
            if (activePinnedTech) {
                activePinnedTech = null;
                techIconCards.forEach(c => c.style.borderColor = '');
                detailTitle.textContent = "SELECT A CORE TECH";
                detailTitle.style.color = '';
                detailDesc.textContent = "Hover over an icon to inspect architectural usage details.";
            }
        });
    }

    // ==========================================
    // 5. COPY EMAIL TO CLIPBOARD
    // ==========================================
    const emailActionBtn = document.getElementById('emailActionBtn');
    const emailNotification = document.getElementById('emailNotification');

    if (emailActionBtn && emailNotification) {
        emailActionBtn.addEventListener('click', () => {
            const emailAddress = "sidhuxmjatt@gmail.com";
            navigator.clipboard.writeText(emailAddress).then(() => {
                emailNotification.classList.add('active');
                emailActionBtn.style.borderColor = 'var(--accent-teal)';
                setTimeout(() => {
                    emailNotification.classList.remove('active');
                    emailActionBtn.style.borderColor = '';
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy email: ", err);
            });
        });
    }

    // ==========================================
    // 6. INTERACTIVE AI LABS PIPELINE RUNNER
    // ==========================================
    const btnWorkloads = document.querySelectorAll('.btn-workload');
    const consoleLogs = document.getElementById('consoleLogs');
    const pipelineNodes = {
        req: document.getElementById('nodeReq'),
        gateway: document.getElementById('nodeGateway'),
        inference: document.getElementById('nodeInference'),
        db: document.getElementById('nodeDB')
    };
    const flowDots = {
        dot1: document.getElementById('dot1'),
        dot2: document.getElementById('dot2'),
        dot3: document.getElementById('dot3')
    };

    let pipelineRunning = false;

    function addLogLine(text, type = '') {
        if (!consoleLogs) return;
        const line = document.createElement('div');
        line.className = `log-line ${type}`;
        line.textContent = `[${new Date().toLocaleTimeString()}] ${text}`;
        consoleLogs.appendChild(line);
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
    }

    function runPipeline(taskType) {
        if (pipelineRunning) return;
        pipelineRunning = true;

        Object.values(pipelineNodes).forEach(node => node.className = 'pipeline-node-item');
        Object.values(flowDots).forEach(dot => {
            dot.style.animation = 'none';
            dot.style.opacity = '0';
        });

        consoleLogs.innerHTML = '';
        addLogLine(`// Running workload compilation: [Task: ${taskType.toUpperCase()}]`, 'system');

        setTimeout(() => {
            pipelineNodes.req.classList.add('active');
            addLogLine(`Client packet built. Dispatching JSON payload...`);
            
            flowDots.dot1.style.opacity = '1';
            flowDots.dot1.style.animation = 'flowAlongLine 0.6s linear forwards';
        }, 100);

        setTimeout(() => {
            pipelineNodes.req.classList.remove('active');
            pipelineNodes.req.classList.add('success');
            pipelineNodes.gateway.classList.add('active');
            addLogLine(`API Gateway verified token auth. Rate limit OK.`, 'system');
            
            flowDots.dot2.style.opacity = '1';
            flowDots.dot2.style.animation = 'flowAlongLine 0.6s linear forwards';
        }, 700);

        setTimeout(() => {
            pipelineNodes.gateway.classList.remove('active');
            pipelineNodes.gateway.classList.add('success');
            pipelineNodes.inference.classList.add('active');
            
            if (taskType === 'medicine') {
                addLogLine(`Syncing medicine logistics log batch hashes...`, 'warning');
                addLogLine(`Running tensor matrix verification models on CUDA GPU...`);
                addLogLine(`Verification complete. Latency: 12.4ms.`, 'success');
            } else if (taskType === 'invoice') {
                addLogLine(`Processing digital e-invoice records...`, 'warning');
                addLogLine(`Calculating tax metrics loops on DB...`);
                addLogLine(`Gateway response payload compiled successfully.`, 'success');
            } else {
                addLogLine(`Parsing GPT script commands...`, 'warning');
                addLogLine(`Synthesizing vocal files via ElevenLabs API...`);
                addLogLine(`Compiling Google Veo video layers. Automation complete.`, 'success');
            }

            flowDots.dot3.style.opacity = '1';
            flowDots.dot3.style.animation = 'flowAlongLine 0.6s linear forwards';
        }, 1400);

        setTimeout(() => {
            pipelineNodes.inference.classList.remove('active');
            pipelineNodes.inference.classList.add('success');
            pipelineNodes.db.classList.add('active');
            addLogLine(`Indexing vector dimensions in Pinecone DB...`);
            addLogLine(`Query logged successfully in index-v1-meta.`, 'system');
        }, 2100);

        setTimeout(() => {
            pipelineNodes.db.classList.remove('active');
            pipelineNodes.db.classList.add('success');
            addLogLine(`// Workload complete. Response packet returned to client.`, 'success');
            pipelineRunning = false;
        }, 2700);
    }

    if (btnWorkloads.length > 0) {
        btnWorkloads.forEach(btn => {
            btn.addEventListener('click', () => {
                if (pipelineRunning) return;
                btnWorkloads.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                runPipeline(btn.dataset.task);
            });
        });
        
        runPipeline('medicine');
    }

    // ==========================================
    // 7. CASE STUDY TABS ACCORDION
    // ==========================================
    const tabsControllers = document.querySelectorAll('.case-study-tabs');
    tabsControllers.forEach(controller => {
        const caseName = controller.dataset.case;
        const tabButtons = controller.querySelectorAll('.tab-btn');
        const contentContainer = document.getElementById(`${caseName}Content`);
        
        if (contentContainer) {
            const panes = contentContainer.querySelectorAll('.tab-pane');
            
            tabButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    tabButtons.forEach(b => b.classList.remove('active'));
                    panes.forEach(p => p.classList.remove('active'));
                    
                    btn.classList.add('active');
                    const activeTabName = btn.dataset.tab;
                    const activePane = contentContainer.querySelector(`[data-pane="${activeTabName}"]`);
                    if (activePane) {
                        activePane.classList.add('active');
                    }
                });
            });
        }
    });

    // ==========================================
    // 8. ASK MY AI AGENT CHATBOX HANDLERS
    // ==========================================
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const chatFeed = document.getElementById('chatFeed');
    const presetQueries = document.querySelectorAll('.btn-preset-query');

    const agentResponses = {
        tech: "Muhammad Mudassar's core tech stack includes C++, Python, JavaScript/TypeScript (React, Node.js, Express.js), MongoDB, and AI tools (Google Veo, ElevenLabs, Prompt Engineering). He specializes in developing scalable full-stack web applications and integrating dynamic AI automations.",
        loc: "Yes! Mudassar is fully open to remote developer roles, internships, and relocation depending on the opportunity. You can submit details in the 'Get In Touch' form below to reach him directly.",
        medicine: "Mudassar's 'AI Medicine Supply Chain' project is a secure drug logistics and batch verification system. It leverages FastAPI endpoints and MongoDB database logs to ensure transparent pharmaceutical batch traceability.",
        certs: "Mudassar holds Cisco-accredited certifications in Modern AI, Human-Computer Interaction (HCI), as well as advanced training credentials in Advanced Python and C++ programming.",
        default: "Thank you for reaching out! Muhammad Mudassar is a Computer Science student at Riphah International University specializing in full-stack web solutions, prompt engineering, and automated AI workflows. Feel free to use the contact panel or drop an email directly at sidhuxmjatt@gmail.com."
    };

    function addMessage(sender, text, isUser = false) {
        if (!chatFeed) return;
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${isUser ? 'user' : 'agent'}`;
        
        const senderSpan = document.createElement('span');
        senderSpan.className = 'bubble-sender';
        senderSpan.textContent = sender;

        const textPara = document.createElement('p');
        textPara.className = 'bubble-text';
        
        bubble.appendChild(senderSpan);
        bubble.appendChild(textPara);
        chatFeed.appendChild(bubble);
        chatFeed.scrollTop = chatFeed.scrollHeight;

        if (isUser) {
            textPara.textContent = text;
        } else {
            let i = 0;
            textPara.textContent = '';
            function typeChar() {
                if (i < text.length) {
                    textPara.textContent += text.charAt(i);
                    i++;
                    chatFeed.scrollTop = chatFeed.scrollHeight;
                    setTimeout(typeChar, 8);
                }
            }
            typeChar();
        }
    }

    function handleUserQuery(queryText) {
        if (!queryText.trim()) return;
        
        addMessage("User Client", queryText, true);
        
        let matchedKey = 'default';
        const queryLower = queryText.toLowerCase();

        if (queryLower.includes('stack') || queryLower.includes('technology') || queryLower.includes('skills')) {
            matchedKey = 'tech';
        } else if (queryLower.includes('remote') || queryLower.includes('relocation') || queryLower.includes('work') || queryLower.includes('hire') || queryLower.includes('available')) {
            matchedKey = 'loc';
        } else if (queryLower.includes('medicine') || queryLower.includes('supply') || queryLower.includes('chain')) {
            matchedKey = 'medicine';
        } else if (queryLower.includes('certificate') || queryLower.includes('certifications') || queryLower.includes('cisco')) {
            matchedKey = 'certs';
        }

        setTimeout(() => {
            addMessage("Synthesis AI", agentResponses[matchedKey], false);
        }, 600);
    }

    if (sendChatBtn && chatInput) {
        sendChatBtn.addEventListener('click', () => {
            handleUserQuery(chatInput.value);
            chatInput.value = '';
        });

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleUserQuery(chatInput.value);
                chatInput.value = '';
            }
        });
    }

    if (presetQueries.length > 0) {
        presetQueries.forEach(btn => {
            btn.addEventListener('click', () => {
                handleUserQuery(btn.textContent);
            });
        });
    }

    // ==========================================
    // 8.5. TIMELINE NODES COLLAPSIBLE ACCORDION
    // ==========================================
    const timelineNodes = document.querySelectorAll('.timeline-node');
    timelineNodes.forEach(node => {
        node.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = node.classList.contains('active');
            timelineNodes.forEach(n => n.classList.remove('active'));
            if (!isActive) {
                node.classList.add('active');
            }
        });
    });

    // Un-accordion timeline nodes on background click
    document.addEventListener('click', () => {
        timelineNodes.forEach(n => n.classList.remove('active'));
    });

    // ==========================================
    // 9. HEADER HIGHLIGHT ON SCROLL & SMOOTH LINKS
    // ==========================================
    const sections = document.querySelectorAll('main, section[id], div[id]');
    const navButtons = document.querySelectorAll('.capsule-nav .nav-btn');

    window.addEventListener('scroll', () => {
        let currentSectionId = 'dashboard';
        
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.clientHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('href') === `#${currentSectionId}`) {
                btn.classList.add('active');
            }
        });
    });

    // ==========================================
    // 10. CONTACT FORM DELIVERIES
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const submitFormBtn = document.getElementById('submitFormBtn');
    const submitBtnText = document.getElementById('submitBtnText');
    const sendIcon = document.getElementById('sendIcon');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitFormBtn.disabled = true;
            submitBtnText.textContent = "Transmitting Packet...";
            sendIcon.setAttribute('data-lucide', 'loader');
            lucide.createIcons();
            
            setTimeout(() => {
                submitFormBtn.disabled = false;
                submitBtnText.textContent = "Transmit Message";
                sendIcon.setAttribute('data-lucide', 'send');
                lucide.createIcons();
                
                formFeedback.classList.remove('success', 'error');
                formFeedback.textContent = "Packet delivered successfully. Mudassar will respond shortly!";
                formFeedback.classList.add('success');
                contactForm.reset();
                
                setTimeout(() => {
                    formFeedback.textContent = "";
                    formFeedback.classList.remove('success');
                }, 5000);
            }, 1800);
        });
    }

    // ==========================================
    // 11. SCROLL REVEAL (INTERSECTION OBSERVER)
    // ==========================================
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    });

    scrollElements.forEach(el => scrollObserver.observe(el));
});
