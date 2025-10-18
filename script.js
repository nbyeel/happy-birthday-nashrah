// Modern Birthday Website - Interactive Features

// Force scroll to top immediately - works on all page loads
(function() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})();

document.addEventListener('DOMContentLoaded', function() {
    // Force scroll to top when DOM is ready
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    initializeWebsite();
});

// Force scroll to top when page is fully loaded
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

// Force scroll to top on page show (back/forward navigation)
window.addEventListener('pageshow', function() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});

function initializeWebsite() {
    // Always start from the top of the page
    window.scrollTo(0, 0);
    
    // Show delay message first
    showDelayMessage();
    
    createFloatingElements();
    initializeSmoothScrolling();
    initializePhotoGallery();
    initializeNicknameCards();
    initializeVideoAutoplay();
    initializeFrameEffects();
    initializeMusicControls();
    initializeSmoothMusicTransitions();
    initializeBirthdayCake();
    initializeScrollAnimations();
    initializeInteractiveElements();
    initializeBlowCandles();
    addEasterEggs();
}

// Create floating elements animation
function createFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    const elements = ['💖', '⭐', '🎈', '🎂', '🎁', '✨', '💕', '🌟'];
    
    setInterval(() => {
        if (Math.random() > 0.8) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.textContent = elements[Math.floor(Math.random() * elements.length)];
            element.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: 100%;
                font-size: ${Math.random() * 15 + 15}px;
                opacity: 0.7;
                pointer-events: none;
                animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
            `;
            
            floatingContainer.appendChild(element);
            
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, 7000);
        }
    }, 3000);
    
    // Add floatUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scrolling for navigation
function initializeSmoothScrolling() {
    // Add scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Hide scroll indicator after scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// Photo gallery interactions
function initializePhotoGallery() {
    const photoCards = document.querySelectorAll('.photo-gallery-item');
    console.log('Found photo cards:', photoCards.length);
    
    photoCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Photo clicked!');
            const caption = this.querySelector('.photo-caption').textContent;
            const imgSrc = this.querySelector('img').src;
            console.log('Caption:', caption, 'Image:', imgSrc);
            showPhotoModal(caption, imgSrc);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add hover sound effect
        card.addEventListener('mouseenter', function() {
            createSparkleEffect(this);
        });
    });
}

// Show photo modal
function showPhotoModal(caption, imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'photo-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 20px;
        transform: scale(0.8);
        transition: transform 0.3s ease;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    `;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 100%;
        height: auto;
        border-radius: 15px;
        margin-bottom: 20px;
    `;
    
    const captionText = document.createElement('p');
    captionText.textContent = caption;
    captionText.style.cssText = `
        color: #FF6B9D;
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.cssText = `
        background: linear-gradient(135deg, #FF6B9D, #C44569);
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 25px;
        margin-top: 20px;
        cursor: pointer;
        font-weight: 600;
        transition: transform 0.2s ease;
    `;
    
    closeBtn.addEventListener('click', () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'scale(1.05)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'scale(1)';
    });
    
    modalContent.appendChild(img);
    modalContent.appendChild(captionText);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });
}

// Nickname cards interactions
function initializeNicknameCards() {
    const nicknameCards = document.querySelectorAll('.nickname-card');
    
    nicknameCards.forEach(card => {
        card.addEventListener('click', function() {
            const nickname = this.getAttribute('data-nickname');
            showNicknameMessage(nickname);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Create confetti effect
            createConfettiEffect(this);
        });
    });
}

// Show nickname message
function showNicknameMessage(nickname) {
    const messages = {
        'Gangi Churail': 'The mischievous one who always keeps things interesting! 👻✨',
        'Nashrah Shooter': 'Always on target with her goals and dreams! 🎯💪',
        'Tuntun Mausi': 'The wise one with the best advice! 🧙‍♀️💡'
    };
    
    const message = messages[nickname] || 'You have the best nicknames! 😄';
    
    // Create notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FF6B9D, #C44569);
        color: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(255, 107, 157, 0.3);
        z-index: 1000;
        max-width: 300px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    notification.innerHTML = `
        <h4 style="margin: 0 0 10px 0; font-size: 1.1rem;">${nickname}</h4>
        <p style="margin: 0; font-size: 0.9rem;">${message}</p>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Music controls
function initializeMusicControls() {
    const musicBtn = document.getElementById('musicBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const birthdayMusic = document.getElementById('birthdayMusic');
    
    let musicPlaying = false;
    let micPermissionGranted = false;
    let currentMusic = 'background'; // 'background' or 'birthday'
    let isTransitioning = false;
    
    // Auto-play music on page load
    setTimeout(() => {
        if (backgroundMusic) {
            // Try to play the music
            const playPromise = backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Music started playing automatically');
                    musicPlaying = true;
                    
                    // Update button visual state
                    if (musicBtn) {
                        musicBtn.style.opacity = '1';
                        musicBtn.style.filter = 'none';
                    }
                }).catch(e => {
                    console.log('Autoplay prevented:', e);
                    showMusicPermissionMessage();
                });
            }
        }
    }, 500);
    
    // Wait for Lottie player to be ready
    setTimeout(() => {
        if (musicBtn && musicBtn.getLottie) {
            // Lottie player is ready
        }
    }, 1000);
    
    musicBtn.addEventListener('click', () => {
        if (musicPlaying) {
            // Stop music and pause animation
            backgroundMusic.pause();
            
            // Stop Lottie animation - try multiple methods
            try {
                musicBtn.pause();
                musicBtn.setAttribute('autoplay', 'false');
                musicBtn.setAttribute('loop', 'false');
                // Try to access the internal Lottie instance
                if (musicBtn.getLottie) {
                    musicBtn.getLottie().pause();
                }
            } catch (e) {
                console.log('Error pausing Lottie:', e);
            }
            
            // Add visual feedback
            musicBtn.style.opacity = '0.6';
            musicBtn.style.filter = 'grayscale(50%)';
        } else {
            // Start music and resume animation
            backgroundMusic.play().catch(e => {
                console.log('Autoplay prevented:', e);
                showMusicPermissionMessage();
            });
            
            // Start Lottie animation - try multiple methods
            try {
                musicBtn.setAttribute('autoplay', 'true');
                musicBtn.setAttribute('loop', 'true');
                musicBtn.play();
                // Try to access the internal Lottie instance
                if (musicBtn.getLottie) {
                    musicBtn.getLottie().play();
                }
            } catch (e) {
                console.log('Error playing Lottie:', e);
            }
            
            // Add visual feedback
            musicBtn.style.opacity = '1';
            musicBtn.style.filter = 'none';
        }
        musicPlaying = !musicPlaying;
    });
}

// Smooth music transition system
function initializeSmoothMusicTransitions() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const birthdayMusic = document.getElementById('birthdayMusic');
    
    let currentMusic = 'background';
    let isTransitioning = false;
    let micPermissionGranted = false;
    
    // Smooth fade transition between musics
    function smoothTransition(fromMusic, toMusic, duration = 2000) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const fromAudio = fromMusic === 'background' ? backgroundMusic : birthdayMusic;
        const toAudio = toMusic === 'background' ? backgroundMusic : birthdayMusic;
        
        if (!fromAudio || !toAudio) {
            isTransitioning = false;
            return;
        }
        
        // Set initial volumes
        fromAudio.volume = 1.0;
        toAudio.volume = 0.0;
        
        // Start the new music
        toAudio.currentTime = 0;
        toAudio.play().catch(e => console.log('Error playing new music:', e));
        
        // Smooth fade out old, fade in new
        const fadeSteps = 50;
        const stepDuration = duration / fadeSteps;
        const volumeStep = 1.0 / fadeSteps;
        
        let step = 0;
        const fadeInterval = setInterval(() => {
            step++;
            const newVolume = 1.0 - (step * volumeStep);
            const oldVolume = step * volumeStep;
            
            fromAudio.volume = Math.max(0, newVolume);
            toAudio.volume = Math.min(1, oldVolume);
            
            if (step >= fadeSteps) {
                clearInterval(fadeInterval);
                fromAudio.pause();
                fromAudio.currentTime = 0;
                currentMusic = toMusic;
                isTransitioning = false;
            }
        }, stepDuration);
    }
    
    // Request microphone permission
    async function requestMicPermission() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            micPermissionGranted = true;
            console.log('Microphone permission granted');
            
            // Stop the stream immediately as we just needed permission
            stream.getTracks().forEach(track => track.stop());
            
            // Switch to birthday music
            if (currentMusic !== 'birthday') {
                smoothTransition(currentMusic, 'birthday', 3000);
            }
            
            return true;
        } catch (error) {
            console.log('Microphone permission denied:', error);
            micPermissionGranted = false;
            return false;
        }
    }
    
    // Intersection Observer for cake section
    const cakeSection = document.querySelector('.cake-section');
    if (cakeSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // User reached the cake section
                    if (!micPermissionGranted) {
                        requestMicPermission();
                    } else if (currentMusic !== 'birthday') {
                        smoothTransition(currentMusic, 'birthday', 3000);
                    }
                } else {
                    // User left the cake section
                    if (currentMusic !== 'background') {
                        smoothTransition(currentMusic, 'background', 2000);
                    }
                }
            });
        }, {
            threshold: 0.3 // Trigger when 30% of the section is visible
        });
        
        observer.observe(cakeSection);
    }
    
    // Handle scroll events for smooth transitions
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const cakeSection = document.querySelector('.cake-section');
            if (cakeSection) {
                const rect = cakeSection.getBoundingClientRect();
                const isInCakeSection = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isInCakeSection && currentMusic !== 'birthday') {
                    if (micPermissionGranted) {
                        smoothTransition(currentMusic, 'birthday', 3000);
                    }
                } else if (!isInCakeSection && currentMusic !== 'background') {
                    smoothTransition(currentMusic, 'background', 2000);
                }
            }
        }, 100);
    });
}

// Show music permission notification
function showMusicPermissionMessage() {
    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes notificationSlideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes notificationSlideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 30px;
        right: 20px;
        background: linear-gradient(135deg, 
            rgba(255, 107, 157, 0.95) 0%,
            rgba(167, 139, 250, 0.95) 100%
        );
        color: white;
        padding: 20px 25px;
        border-radius: 15px;
        text-align: left;
        z-index: 1000;
        max-width: 350px;
        backdrop-filter: blur(15px);
        border: 2px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 25px rgba(255, 107, 157, 0.3);
        transform: translateX(100%);
        opacity: 0;
        animation: notificationSlideIn 0.6s ease-out forwards;
    `;
    
    message.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
            <div style="font-size: 1.5rem;">🎵</div>
            <h3 style="margin: 0; color: white; font-size: 1.1rem; font-weight: 600;">Music Permission</h3>
        </div>
        <p style="margin: 0 0 15px 0; font-size: 0.9rem; line-height: 1.4; color: rgba(255, 255, 255, 0.9);">
            Click the music button in the top right corner to enable background music for the full experience!
        </p>
        <button onclick="this.parentNode.style.animation='notificationSlideOut 0.5s ease-out forwards'; setTimeout(() => this.parentNode.remove(), 500)" style="
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 8px 20px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.85rem;
            transition: all 0.3s ease;
        " onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'" 
           onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
            Got it!
        </button>
    `;
    
    document.body.appendChild(message);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.style.animation = 'notificationSlideOut 0.5s ease-out forwards';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 500);
        }
    }, 4000);
}

// Show cute delay message popup
function showDelayMessage() {
    // Add CSS animations first to prevent flash
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cutePopupSlideIn {
            from {
                opacity: 0;
                transform: translateY(-20px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        @keyframes cutePopupSlideOut {
            from {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            to {
                opacity: 0;
                transform: translateY(-20px) scale(0.9);
            }
        }
        
        @keyframes cuteBounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-8px);
            }
            60% {
                transform: translateY(-4px);
            }
        }
        
        @keyframes cuteFloat {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-5px);
            }
        }
    `;
    document.head.appendChild(style);
    
    const delayMessage = document.createElement('div');
    delayMessage.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        pointer-events: none;
    `;
    
    const cardContainer = document.createElement('div');
    cardContainer.style.cssText = `
        width: 400px;
        max-width: 90vw;
        background: linear-gradient(135deg, 
            rgba(255, 240, 245, 0.95) 0%,
            rgba(255, 220, 235, 0.95) 100%
        );
        border-radius: 25px;
        padding: 30px 25px;
        text-align: center;
        backdrop-filter: blur(15px);
        border: 3px solid rgba(255, 107, 157, 0.3);
        box-shadow: 0 15px 35px rgba(255, 107, 157, 0.2);
        opacity: 0;
        animation: cutePopupSlideIn 0.8s ease-out forwards;
        pointer-events: auto;
    `;
    
    cardContainer.innerHTML = `
        <div style="
            position: relative;
        ">
            <!-- Cute floating emojis -->
            <div style="
                position: absolute;
                top: -15px;
                left: -10px;
                font-size: 1.5rem;
                animation: cuteFloat 3s ease-in-out infinite;
            ">💝</div>
            
            <div style="
                position: absolute;
                top: -10px;
                right: -15px;
                font-size: 1.2rem;
                animation: cuteFloat 2.5s ease-in-out infinite reverse;
            ">✨</div>
            
            <div style="
                position: absolute;
                bottom: -10px;
                left: 20px;
                font-size: 1.3rem;
                animation: cuteFloat 2.8s ease-in-out infinite;
            ">🎈</div>
            
            <!-- Main content -->
            <div style="
                font-size: 2.5rem;
                margin-bottom: 15px;
                animation: cuteBounce 2s ease-in-out infinite;
            ">🎂</div>
            
            <h3 style="
                color: #FF6B9D;
                font-size: 1.4rem;
                font-weight: 600;
                margin-bottom: 12px;
                font-family: 'Space Grotesk', sans-serif;
            ">Oops! Sorry I'm late! 😅</h3>
            
            <p style="
                color: #8B4B8C;
                font-size: 0.95rem;
                line-height: 1.4;
                margin-bottom: 15px;
                font-weight: 500;
            ">I know I am late, but I was planning something special for you! 🎉</p>
            
            <p style="
                color: #A78BFA;
                font-size: 0.85rem;
                line-height: 1.3;
                margin-bottom: 20px;
                font-style: italic;
            ">Just 2 days ago, I decided to create this website as a surprise gift for you! 💝</p>
            
            <button onclick="this.parentNode.parentNode.parentNode.style.animation='cutePopupSlideOut 0.6s ease-out forwards'; setTimeout(() => this.parentNode.parentNode.parentNode.remove(), 600)" style="
                background: linear-gradient(135deg, #FF6B9D, #A78BFA);
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 5px 15px rgba(255, 107, 157, 0.3);
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(255, 107, 157, 0.4)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(255, 107, 157, 0.3)'">
                Let's Celebrate! 🎉
            </button>
        </div>
    `;
    
    delayMessage.appendChild(cardContainer);
    
    document.body.appendChild(delayMessage);
    
    // Auto-remove after 6 seconds if user doesn't click
    setTimeout(() => {
        if (delayMessage.parentNode) {
            delayMessage.style.animation = 'cutePopupSlideOut 0.6s ease-out forwards';
            setTimeout(() => {
                if (delayMessage.parentNode) {
                    delayMessage.parentNode.removeChild(delayMessage);
                }
            }, 600);
        }
    }, 6000);
}

// Show music notification
function showMusicNotification(message, emoji) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #FF6B9D, #A78BFA);
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(255, 107, 157, 0.3);
        z-index: 1000;
        font-weight: 600;
        font-size: 0.9rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.2rem;">${emoji}</span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 2 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// Birthday cake interactions (legacy - now handled by microphone system)
function initializeBirthdayCake() {
    // This function is now replaced by initializeBlowCandles()
    // which uses microphone detection instead of click events
}

// Old blow candle function removed - now using microphone system

// Create sparkle effect
function createSparkleEffect(element) {
    const rect = element.getBoundingClientRect();
    const sparkles = ['✨', '⭐', '💫', '🌟', '💖'];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleFloat 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1500);
    }
    
    // Add sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkleFloat {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Old birthday wish function removed - now using microphone-based system

// Old confetti function removed - now using Lottie animations

// Team debate functions
function showTeamMessage(team) {
    const messageDiv = document.getElementById('team-message');
    const messages = {
        conrad: `
            <h3 style="color: #4A90E2; margin-bottom: 15px;">Team Conrad - Nashrah's Choice</h3>
            <p style="margin: 0; line-height: 1.6;">
                "Conrad is the obvious choice! He's mature, responsible, and has that mysterious charm. 
                Plus, he's been there for Belly through everything. Team Conrad all the way!" 💙
            </p>
        `,
        jellyfish: `
            <h3 style="color: #FF6B6B; margin-bottom: 15px;">Team Jellyfish (Jeremiah) - My Choice</h3>
            <p style="margin: 0; line-height: 1.6;">
                "Jeremiah is the fun, adventurous one! He brings joy and laughter to Belly's life. 
                Sometimes you need someone who makes you smile, not just someone who's 'mature'!" 🪼
            </p>
        `
    };
    
    messageDiv.innerHTML = messages[team];
    messageDiv.classList.add('show');
    
    // Hide message after 8 seconds
    setTimeout(() => {
        messageDiv.classList.remove('show');
    }, 8000);
}

// Scroll animations
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add hover effects to all interactive elements
    const interactiveElements = document.querySelectorAll('.photo-card, .nickname-card, .team-card, .candle, .stat-card, .fact-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Add click effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', function() {
            createSparkleEffect(this);
        });
    });
    
    // Add click effects to fact cards
    const factCards = document.querySelectorAll('.fact-card');
    factCards.forEach(card => {
        card.addEventListener('click', function() {
            createSparkleEffect(this);
        });
    });
}

// Add easter eggs
function addEasterEggs() {
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    window.konamiIndex = window.konamiIndex || 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === konamiCode[window.konamiIndex]) {
            window.konamiIndex++;
            if (window.konamiIndex === konamiCode.length) {
                showEasterEgg();
                window.konamiIndex = 0;
            }
        } else {
            window.konamiIndex = 0;
        }
    });
    
    // Secret click sequence on title
    let clickCount = 0;
    const title = document.querySelector('.main-title');
    if (title) {
        title.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                showEasterEgg();
                clickCount = 0;
            }
        });
    }
}

// Easter egg function
function showEasterEgg() {
    const easterEgg = document.createElement('div');
    easterEgg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FF6B9D, #C44569);
        color: white;
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        z-index: 1000;
        max-width: 400px;
        margin: 20px;
        animation: easterEggPop 0.5s ease-out;
        backdrop-filter: blur(10px);
    `;
    
    easterEgg.innerHTML = `
        <h3 style="margin: 0 0 15px 0;">🎉 Easter Egg Found! 🎉</h3>
        <p style="margin: 0 0 20px 0;">You found the secret! You're as clever as Nashrah! 😄</p>
        <p style="margin: 0; font-size: 0.9rem;">This website was made with lots of love for the best friend ever! 💖</p>
    `;
    
    // Add easter egg animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes easterEggPop {
            0% {
                transform: translate(-50%, -50%) scale(0) rotate(0deg);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
            }
            100% {
                transform: translate(-50%, -50%) scale(1) rotate(360deg);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(easterEgg);
    
    setTimeout(() => {
        if (easterEgg.parentNode) {
            easterEgg.parentNode.removeChild(easterEgg);
        }
    }, 4000);
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add some fun random interactions
setInterval(() => {
    if (Math.random() > 0.95) {
        const randomElement = document.querySelector('.floating-elements');
        if (randomElement) {
            createSparkleEffect(randomElement);
        }
    }
}, 5000);

// Interactive Maleficent Prank Functions
function startPrank() {
    document.getElementById('prankContent').style.display = 'block';
    document.querySelector('.prank-intro').style.display = 'none';
}

function revealImage() {
    const blurredImage = document.getElementById('blurredImage');
    const prankContent = document.getElementById('prankContent');
    const revealedContent = document.getElementById('revealedContent');
    
    // Smooth blur dissolve animation
    blurredImage.style.filter = 'blur(0px)';
    blurredImage.style.transition = 'filter 0.8s ease-out';
    
    setTimeout(() => {
        prankContent.style.display = 'none';
        revealedContent.style.display = 'block';
    }, 800);
}

function showAlert() {
    // Lock background scroll
    document.body.style.overflow = 'hidden';
    
    // Create custom alert popup
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    alertDiv.innerHTML = `
        <div class="alert-content">
            <div class="thinking-elements">
                <div class="thinking-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="thinking-emoji">🤔</div>
            </div>
            <div class="alert-text">Ye to kahi dekhi dekhi lag rahi nahi? socho kon hy kaha dekha hy isko?</div>
            <div class="alert-buttons">
                <button class="alert-btn" onclick="handleResponse('dont-know')">I don't know her</button>
                <button class="alert-btn" onclick="handleResponse('know')">I know her</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Add click outside to close functionality
    alertDiv.addEventListener('click', function(e) {
        if (e.target === alertDiv || e.target.classList.contains('custom-alert')) {
            closeAlert();
        }
    });
}

function closeAlert() {
    const alert = document.querySelector('.custom-alert');
    if (alert) {
        alert.remove();
    }
    // Restore background scroll
    document.body.style.overflow = 'auto';
}

function handleResponse(response) {
    closeAlert();
    
    const revealedContent = document.getElementById('revealedContent');
    const finalReveal = document.getElementById('finalReveal');
    const finalText = document.getElementById('finalText');
    
    revealedContent.style.display = 'none';
    finalReveal.style.display = 'block';
    
    if (response === 'know') {
        finalText.textContent = 'Of course, clone hi to hu dono. 😭😭🫵🏻';
    } else {
        finalText.textContent = 'Dhyan se dekhu tum hi to ho, Sponsored by Disney World and Ufone 😭😭🫵🏻';
    }
}

// Interactive Blow Candles System
let audioContext;
let analyser;
let microphone;
let dataArray;
let isListening = false;
let candlesBlown = 0;
let blowThreshold = 0.3;
let blowMeterFill = 0;
let canBlowNextCandle = true;
let blowCooldown = false;

function initializeBlowCandles() {
    const cakeSection = document.querySelector('.cake-section');
    if (!cakeSection) return;

    // Create intersection observer for the cake section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isListening) {
                requestMicrophonePermission();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(cakeSection);
}

function requestMicrophonePermission() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                setupAudioAnalysis(stream);
                showBlowMeter();
                startBlowDetection();
            })
            .catch(err => {
                console.log('Microphone access denied:', err);
                showMicrophoneError();
            });
    } else {
        showMicrophoneError();
    }
}

function setupAudioAnalysis(stream) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    microphone = audioContext.createMediaStreamSource(stream);
    
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    
    microphone.connect(analyser);
}

function startBlowDetection() {
    isListening = true;
    
    function detectBlow() {
        if (!isListening) return;
        
        analyser.getByteFrequencyData(dataArray);
        
        // Calculate average volume
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
        }
        const average = sum / dataArray.length;
        const normalizedVolume = average / 255;
        
        // Update blow meter
        updateBlowMeter(normalizedVolume);
        
        // Check if blow is strong enough
        if (normalizedVolume > blowThreshold) {
            handleBlow();
        }
        
        requestAnimationFrame(detectBlow);
    }
    
    detectBlow();
}

function updateBlowMeter(volume) {
    const meterFill = document.getElementById('meterFill');
    const blowMeterContainer = document.getElementById('blowMeterContainer');
    
    if (volume > 0.1) {
        blowMeterContainer.style.display = 'block';
        blowMeterFill = Math.min(volume * 2, 1);
        meterFill.style.transform = `scale(${blowMeterFill})`;
        
        // Show breeze effects when blowing
        if (volume > 0.2) {
            showBreezeEffects();
        } else {
            hideBreezeEffects();
        }
    } else {
        hideBreezeEffects();
    }
}

function handleBlow() {
    if (candlesBlown < 3 && canBlowNextCandle && !blowCooldown) {
        candlesBlown++;
        extinguishCandle(candlesBlown);
        
        // Set cooldown to prevent multiple blows
        blowCooldown = true;
        canBlowNextCandle = false;
        
        // Reset cooldown after 3 seconds
        setTimeout(() => {
            blowCooldown = false;
            canBlowNextCandle = true;
        }, 3000);
        
        // Check if all candles are blown
        if (candlesBlown === 3) {
            setTimeout(() => {
                showConfetti();
                showSuccessMessage();
            }, 1000);
        }
    }
}

function extinguishCandle(candleNumber) {
    const candle = document.getElementById(`candle${candleNumber}`);
    const flame = document.getElementById(`flame${candleNumber}`);
    
    if (candle && flame) {
        // Add flicker effect before extinguishing
        flame.style.animation = 'none';
        flame.style.transform = 'scale(0.8)';
        flame.style.opacity = '0.5';
        
        // After a brief flicker, make the entire candle disappear
        setTimeout(() => {
            candle.style.opacity = '0';
            candle.style.transform = 'scale(0)';
            candle.style.transition = 'all 0.5s ease-out';
            
            // Completely hide the candle after animation
            setTimeout(() => {
                candle.style.display = 'none';
            }, 500);
        }, 300);
        
        // Hide instruction text and blow meter when first candle is blown
        if (candleNumber === 1) {
            const instruction = document.querySelector('.blow-instruction');
            if (instruction) {
                instruction.style.opacity = '0';
                instruction.style.transform = 'translateY(-20px)';
                instruction.style.transition = 'all 0.5s ease-out';
                setTimeout(() => {
                    instruction.style.display = 'none';
                }, 500);
            }
            
            // Hide blow meter when first candle is blown
            const blowMeterContainer = document.getElementById('blowMeterContainer');
            if (blowMeterContainer) {
                blowMeterContainer.style.opacity = '0';
                blowMeterContainer.style.transform = 'scale(0.8)';
                blowMeterContainer.style.transition = 'all 0.5s ease-out';
                setTimeout(() => {
                    blowMeterContainer.style.display = 'none';
                }, 500);
            }
        }
    }
}

function showBlowMeter() {
    const blowMeterContainer = document.getElementById('blowMeterContainer');
    if (blowMeterContainer) {
        blowMeterContainer.style.display = 'block';
    }
}

function showBreezeEffects() {
    const breezeEffects = document.getElementById('breezeEffects');
    if (breezeEffects) {
        breezeEffects.style.display = 'block';
        breezeEffects.style.opacity = '1';
        
        // Restart animations
        const particles = breezeEffects.querySelectorAll('.breeze-particle');
        particles.forEach(particle => {
            particle.style.animation = 'none';
            particle.offsetHeight; // Trigger reflow
            particle.style.animation = 'breezeFloat 2s ease-in-out infinite';
        });
    }
}

function hideBreezeEffects() {
    const breezeEffects = document.getElementById('breezeEffects');
    if (breezeEffects) {
        breezeEffects.style.opacity = '0';
        setTimeout(() => {
            breezeEffects.style.display = 'none';
        }, 500);
    }
}

function showConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    if (confettiContainer) {
        confettiContainer.style.display = 'block';
        
        // Get the lottie player and play it
        const lottiePlayer = confettiContainer.querySelector('lottie-player');
        if (lottiePlayer) {
            lottiePlayer.play();
        }
        
        // Hide confetti after animation
        setTimeout(() => {
            confettiContainer.style.display = 'none';
        }, 5000);
    }
}

function showSuccessMessage() {
    console.log('🎉 SUCCESS MESSAGE CALLED!');
    
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FF6B9D, #A78BFA);
        color: white;
        padding: 40px 50px;
        border-radius: 25px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        animation: successPop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 500px;
        margin: 20px;
    `;
    
    successMessage.innerHTML = `
        <h3 style="margin: 0 0 20px 0; font-size: 2rem; font-weight: 800;">🎂 Happy Birthday my dear shooter! 🎂</h3>
        <p style="margin: 0 0 15px 0; font-size: 1.3rem; line-height: 1.6;">You blew out all the candles! Your wish is definitely coming true! ✨</p>
        <p style="margin: 0 0 25px 0; font-size: 1.1rem; line-height: 1.5; opacity: 0.9;">May this year be filled with endless laughter, amazing adventures, and all the happiness you deserve! 💖</p>
        <button id="closeBirthdayMessage" style="
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 12px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
        ">
            Close Message 💕
        </button>
    `;
    
    document.body.appendChild(successMessage);
    
    console.log('✅ Success message added to DOM!');
    
    // Add safe close button functionality
    const closeButton = document.getElementById('closeBirthdayMessage');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            successMessage.remove();
            console.log('🗑️ Birthday message closed safely');
        });
        
        // Add hover effects
        closeButton.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.3)';
        });
        
        closeButton.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
    }
    
    // Add success animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes successPop {
            0% {
                transform: translate(-50%, -50%) scale(0) rotate(-10deg);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.1) rotate(5deg);
            }
            100% {
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Message stays visible until manually closed
}

function showMicrophoneError() {
    const errorMessage = document.createElement('div');
    errorMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #FF6B6B, #FF8E8E);
        color: white;
        padding: 30px;
        border-radius: 20px;
        text-align: center;
        z-index: 1001;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        max-width: 400px;
        margin: 20px;
    `;
    
    errorMessage.innerHTML = `
        <h3 style="margin: 0 0 15px 0;">🎤 Microphone Access Required</h3>
        <p style="margin: 0 0 20px 0;">Please allow microphone access to blow out the candles!</p>
        <button onclick="this.parentNode.remove()" style="
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
        ">Got it!</button>
    `;
    
    document.body.appendChild(errorMessage);
}

// Video autoplay when in viewport
function initializeVideoAutoplay() {
    const video = document.querySelector('.birthday-video');
    if (!video) return;

    // Ensure video is always muted and loops
    video.muted = true;
    video.loop = true;
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Video is in viewport, starting playback...');
                
                // Try to play the video
                video.play().catch(e => {
                    console.log('Autoplay prevented:', e);
                });
                
                // Stop observing once video starts playing
                observer.unobserve(video);
            }
        });
    }, {
        threshold: 0.3, // Video must be 30% visible
        rootMargin: '0px 0px -5% 0px' // Start playing when video is 5% from bottom of viewport
    });

    // Start observing the video
    observer.observe(video);
}

// Enhanced frame effects for the video
function initializeFrameEffects() {
    const videoFrame = document.querySelector('.video-frame');
    if (!videoFrame) return;

    
    // Add click effect for extra sparkles
    videoFrame.addEventListener('click', function() {
        createFrameSparkleBurst(this);
    });
    
    // Create random floating sparkles around the frame
    setInterval(() => {
        if (Math.random() > 0.7) {
            createFloatingFrameSparkle(videoFrame);
        }
    }, 2000);
}

// Create sparkle burst effect on frame click
function createFrameSparkleBurst(frame) {
    const rect = frame.getBoundingClientRect();
    const sparkles = ['✨', '⭐', '💫', '🌟', '💖', '✨', '⭐'];
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            font-size: ${Math.random() * 15 + 15}px;
            pointer-events: none;
            z-index: 1000;
            animation: frameSparkleBurst 2s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }
    
    // Add frame sparkle burst animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes frameSparkleBurst {
            0% {
                transform: translate(0, 0) scale(1) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translate(${(Math.random() - 0.5) * 300}px, ${(Math.random() - 0.5) * 300}px) scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Know Me Quiz System
let currentQuizQuestion = 1;
let totalQuizQuestions = 5;
let quizScore = 0;

const quizQuestions = [
    {
        question: "What is my full name?",
        options: ["Nabeel Arif", "Arif Ali", "Nabeel Asif", "Aina Asif"],
        correct: 0
    },
    {
        question: "What is my date of birth?",
        options: ["18 December", "9 August", "18 October", "23 July"],
        correct: 2
    },
    {
        question: "If I have to choose one thing to do all day what would it be?",
        options: ["Going for a Trip for a day", "Call with friends", "Study", "Gaming"],
        correct: 3
    },
    {
        question: "What is my birth year?",
        options: ["2002", "2003", "2005", "2001"],
        correct: 2
    },
    {
        question: "What is my age?",
        options: ["30 Years", "20 Years", "23 Years", "19 Years"],
        correct: 1
    }
];










function handleQuizAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuizQuestion - 1];
    const correctIndex = currentQuestion.correct;
    const selectedIndex = selectedOption.charCodeAt(0) - 97; // Convert 'a' to 0, 'b' to 1, etc.
    
    // Check if answer is correct
    if (selectedIndex === correctIndex) {
        // Correct answer - show success and move to next question
        quizScore++;
        showQuizMessage("Correct! 🎉", 'success');
        
        // Disable all buttons
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(btn => btn.style.pointerEvents = 'none');
        
        // Show only the correct answer
        buttons.forEach((btn, index) => {
            if (index === correctIndex) {
                btn.classList.add('correct');
            }
        });
        
        // Update progress
        updateQuizProgress();
        
        // Move to next question or show results
        setTimeout(() => {
            if (currentQuizQuestion < totalQuizQuestions) {
                nextQuizQuestion();
            } else {
                showQuizResults();
            }
        }, 2000);
    } else {
        // Wrong answer - show error message and let her try again
        showQuizMessage("Wrong! Try again! 😅", 'error');
        
        // Disable only the wrong button temporarily
        const buttons = document.querySelectorAll('.option-btn');
        const wrongButton = buttons[selectedIndex];
        wrongButton.classList.add('wrong');
        wrongButton.style.pointerEvents = 'none';
        
        // Re-enable the wrong button after a short delay so she can try other options
        setTimeout(() => {
            wrongButton.classList.remove('wrong');
            wrongButton.style.pointerEvents = 'auto';
        }, 1000);
    }
}

function showQuizMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${type === 'success' ? 'linear-gradient(135deg, #4CAF50, #45a049)' : 'linear-gradient(135deg, #FF6B6B, #FF8E8E)'};
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: 600;
        z-index: 1000;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        animation: quizMessagePop 0.5s ease-out;
    `;
    
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 1500);
}

function nextQuizQuestion() {
    currentQuizQuestion++;
    const questionTitle = document.getElementById('questionTitle');
    const optionsContainer = document.getElementById('optionsContainer');
    const currentQuestionSpan = document.getElementById('currentQuestion');
    
    const currentQuestion = quizQuestions[currentQuizQuestion - 1];
    
    questionTitle.textContent = `Question ${currentQuizQuestion}: ${currentQuestion.question}`;
    currentQuestionSpan.textContent = currentQuizQuestion;
    
    // Reset options
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = `${String.fromCharCode(97 + index)}) ${option}`;
        button.onclick = () => handleQuizAnswer(String.fromCharCode(97 + index));
        button.style.pointerEvents = 'auto'; // Ensure buttons are clickable
        optionsContainer.appendChild(button);
    });
}

function updateQuizProgress() {
    const progressFill = document.getElementById('quizProgressFill');
    const percentage = (currentQuizQuestion / totalQuizQuestions) * 100;
    progressFill.style.width = `${percentage}%`;
}

function showQuizResults() {
    const quizContent = document.getElementById('quizContent');
    const quizResults = document.getElementById('quizResults');
    const scoreElement = document.getElementById('score');
    
    quizContent.style.display = 'none';
    quizResults.style.display = 'block';
    scoreElement.textContent = quizScore;
    
    // Create confetti effect
    createQuizConfetti();
}

function createQuizConfetti() {
    const confettiContainer = document.getElementById('resultsConfetti');
    const colors = ['#FF6B9D', '#A78BFA', '#4CAF50', '#FFB6C1', '#FFC0CB'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}%;
            top: -10px;
            animation: confettiFall 3s linear forwards;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 5000);
    }
    
    // Add confetti animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(-100px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100px) rotate(360deg);
                opacity: 0;
            }
        }
        @keyframes quizMessagePop {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}


// Create floating sparkles around the frame
function createFloatingFrameSparkle(frame) {
    const rect = frame.getBoundingClientRect();
    const sparkle = document.createElement('div');
    sparkle.textContent = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
    sparkle.style.cssText = `
        position: fixed;
        left: ${rect.left + Math.random() * rect.width}px;
        top: ${rect.top + Math.random() * rect.height}px;
        font-size: ${Math.random() * 10 + 10}px;
        pointer-events: none;
        z-index: 1000;
        animation: floatingFrameSparkle 3s ease-out forwards;
        opacity: 0.8;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 3000);
    
    // Add floating frame sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatingFrameSparkle {
            0% {
                transform: translateY(0) scale(0.5);
                opacity: 0.8;
            }
            50% {
                transform: translateY(-20px) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-40px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}