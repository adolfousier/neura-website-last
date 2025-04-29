import type React from "react"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import Script from "next/script"
import Head from "next/head"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Neura AI - Your Entire Business AI-Powered!",
  description:
    "Empower your entire business with Neura's AI-powered Agents. Handle Autonomous Content, Meetings, FAQs, organize calls, and engage through voice and imagery.",
  keywords: ["AI Agents", "Autonomous AI", "Autonomous Agents", "Customer Support", "Sales Automation", "AI Assistant", "Neura AI"],
  openGraph: {
    images: [
      {
        url: '/og-new.png',
        width: 1200,
        height: 630,
        alt: 'Neura AI - Your Entire Business AI-Powered!',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K24TQX5N');
        `}
      </Script>
      <Script id="chat-bot" type="module">{`
        import Chatbot from 'https://cdn.jsdelivr.net/gh/adolfousier/ChatEmbed/dist/web.js';
        Chatbot.init({
            chatflowid: "f6c0ffc3-3ae0-4c9b-9e2e-d11cd29d9357",
            apiHost: "https://bots.meetneura.ai",
            chatflowConfig: {
                // topK: 2
            },
            theme: {
                button: {
                    backgroundColor: "#000000",
                    right: 20,
                    bottom: 20,
                    size: 48,
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://neuraai.blob.core.windows.net/uploads/mingcute_chat-2-line.png",
                    autoWindowOpen: {
                        autoOpen: false,
                        openDelay: 5,
                        autoOpenOnMobile: false,
                    },
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Hello 👋!',
                    tooltipBackgroundColor: '#000000',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                disclaimer: {
                  title: 'Disclaimer',
                  message: 'By using this chatbot, you agree to the <a target="_blank" href="https://meetneura.ai/terms">Terms & Condition</a>',
                },
                chatWindow: {
                    showTitle: true,
                    title: "NEURA AI",
                    titleAvatarSrc: "https://neuraai.blob.core.windows.net/uploads/neura-avatar2025.png",
                    titleColor: "#ffffff",
                    welcomeMessage: "Hello! I am Neura AI. Your state-of-the-art sales agent to improve customers experience, instantly. How can I help you?",
                    backgroundColor: "#ffffff",
                    fontSize: 16,
                    poweredByTextColor: "#000000",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://neuraai.blob.core.windows.net/uploads/neura-avatar2025.png",
                    },
                    userMessage: {
                        backgroundColor: "#000000",
                        textColor: "#ffffff",
                        size: "small",
                        showAvatar: true,
                        avatarSrc: "https://neuraai.blob.core.windows.net/uploads/user-avatar.png",
                    },
                    textInput: {
                        placeholder: "Write here",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#000000",
                        maxChars: 200,
                        maxCharsWarningMessage: "Character limit exceeded. Please enter less than 200 characters.",
                        autoFocus: true,
                        sendMessageSound: true,
                        receiveMessageSound: true,
                    },
                    feedback: {
                        color: "#303235",
                    },
                    dateTimeToggle: {
                        date: true,
                        time: true,
                    },
                    footer: {
                        textColor: "#303235",
                        text: "Powered by",
                        company: "Neura AI",
                        companyLink: "https://meetneura.ai",
                    }
                }
            }
        });

        // Scroll to open functionality
        (function() {
            let chatbotElement = null;
            let chatbotOpened = localStorage.getItem('chatbotHasOpened') === 'true' ? true : false;
            
            function findChatbotElement() {
                return document.querySelector('flowise-chatbot');
            }

            function toggleChatbot() {
                if (chatbotOpened) return;
                if (chatbotElement) {
                    const shadowRoot = chatbotElement.shadowRoot;
                    if (shadowRoot) {
                        const button = shadowRoot.querySelector('button');
                        if (button) {
                            button.click();
                            chatbotOpened = true;
                            localStorage.setItem('chatbotHasOpened', 'true');
                            return;
                        }
                    }
                    const event = new CustomEvent('toggle-chatbot', { bubbles: true, composed: true });
                    chatbotElement.dispatchEvent(event);
                    chatbotOpened = true;
                    localStorage.setItem('chatbotHasOpened', 'true');
                }
            }

            function initializeChatbotInteraction() {
                chatbotElement = findChatbotElement();
                if (chatbotElement) {
                } else {
                }
            }

            const intervalId = setInterval(() => {
                if (!chatbotElement) {
                    chatbotElement = findChatbotElement();
                    if (chatbotElement) {
                        console.log('Flowise Chatbot element found');
                        clearInterval(intervalId);
                    }
                }
            }, 1000);

            let scrollThreshold = 500;
            let lastScrollTop = 0;
            window.addEventListener('scroll', function() {
                let st = window.pageYOffset || document.documentElement.scrollTop;
                if (st > lastScrollTop && st > scrollThreshold && !chatbotOpened) {
                    toggleChatbot();
                }
                lastScrollTop = st <= 0 ? 0 : st;
            });
            initializeChatbotInteraction();
        })();
      `}</Script>
      <body className={`${inter.className} max-w-full overflow-x-hidden`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K24TQX5N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen mx-auto">
              {children}
              <Footer />
            </div>
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

