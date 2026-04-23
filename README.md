## Aballe 
**Module:** Module 1: Document Request
* **Framework**: Next.js (App Router)
* **Styling**: Tailwind CSS (Royal Blue & White theme)
* **Icons**: Lucide React

A Next.js web application prototype based on the Ateneo de Davao University Alumni Hub design sprint. It digitizes the process of requesting and tracking academic documents for alumni. Created by Jeross P. Aballe


## Features & Perfect Flow Navigation
1. **Login Screen (`/`)**: Common module login with Student Number and Password. "Sign In" routes to Dashboard.
2. **Dashboard (`/dashboard`)**: The main hub. Features "Quick Actions" and "What You Can Do" sections.
3. **My Profile (`/profile`)**: Displays the Verified Digital Academic Passport and quick login settings.
4. **Document Request (`/request`)**: Interface to select and request various academic documents (Transcript, Diploma, etc.).
5. **Process/Track Documents (`/tracking`)**: Real-time status tracking for pending and requested documents with Rush Processing options.


## Getting Started
**Installation:** *(A detailed instruction on how you can replicate your repo and run it in a different computer)*
1. **Prerequisites:** Ensure you have Node.js (version 20.9.0 or higher) and Git installed on your computer.
2. **Clone the Repository:** Open your terminal or command prompt and run:
   `git clone https://github.com/russyxa/firstattempt2026_aballe`
3. **Navigate to the Directory:** Change your current directory to the project folder:
   `cd alumni-hub`
4. **Install Dependencies:** Install all the required packages (Next.js, Tailwind CSS, Lucide Icons) by running:
   `npm install`
5. **Start the Server:** Run the local development server using the command:
   `npm run dev`
6. **View the App:** Open your web browser (Chrome, Edge, etc.) and navigate to `http://localhost:3000` to view the web application.

**Prompt:** Convert the design to a simple web application using the framework NEXT JS, make sure to include README file. Make sure it has perfect flow. Also, organize my directory for Staff and Alumni. Make sure to follow the color scheme and the design provided in the document. https://docs.google.com/document/d/15MJ0UUTx85zTlSI5XH1hmJZ4inzoYhlPsKg80DnidXA/edit?tab=t.qh2shoz8hbjp (Note: I converted this file document to pdf)

**AI Tools used:** Google Gemini, Claude AI.

## Activity 15: PWA Conversion (feature/pwa-ready)

**Master Prompt used for PWA Conversion:**
> "Help me convert my Next.js Alumni Knights Hub application into a fully installable Progressive Web App (PWA). Please generate the `manifest.json`, the Service Worker (`sw.js`) for offline caching, and provide the exact code to securely register the Service Worker inside my Next.js App Router `layout.js`. The app must meet Chrome's strict installability requirements."

**AI "Hallucinations", Strict Browser Rules, & Manual Fixes:**
During the PWA conversion process, several issues arose due to Next.js server-side rendering conflicts and Chrome's strict PWA requirements. These required manual debugging and targeted AI prompts to resolve:

1. **The Aspect Ratio Trap (Chrome Rejection):** * **Issue:** Chrome silently rejected the manifest and hid the Install icon. 
   * **Fix:** The AI initially assumed any high-quality logo would work. However, the original `knightslogo.png` was 1050x840 (a rectangle). Chrome strictly requires perfectly square (1:1 ratio) icons for PWAs. I had to manually edit the logo onto a transparent 512x512 square canvas.
2. **Next.js "Ghost Layout" Conflict:**
   * **Issue:** The Service Worker would not register, and the console was completely blank. 
   * **Fix:** I discovered through targeted debugging that my `app/` directory contained both a `layout.js` (where the AI told me to put the registration code) and a `layout.tsx`. Next.js automatically prioritizes TypeScript files and was silently ignoring my JavaScript layout. I manually deleted the ghost `layout.tsx` file and used the Next.js `<Script>` component to securely force the Service Worker registration.
3. **Strict Size Validation Error:**
   * **Issue:** Chrome threw an error: *"Actual size (512x512)px of icon does not match specified size (192x192px)"*.
   * **Fix:** To save time, we initially pointed the 192x192 manifest slot to the 512x512 image file. Chrome's PWA engine physically measures the image and rejected the mismatch. I had to manually create a dedicated `knightslogo-192.png` file, perfectly sized to 192x192, and update both the `manifest.json` and the `sw.js` cache array to resolve the error and finally trigger the Install icon.

## Screenshots: 

**For Alumni:**

1. Login Screen
![alt text](image.png)
2. Dashboard (Quick Actions)
![alt text](image-1.png)
3. My Profile
![alt text](image-2.png)
4. Document Request
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)
5. Process & Track Documents
![alt text](image-7.png)
![alt text](image-8.png)
![alt text](image-9.png)
![alt text](image-10.png)
![alt text](image-11.png)
![alt text](image-12.png)

**For Staff:**

1. Login Screen
![alt text](image-13.png)
   
2. Dashboard
![alt text](image-14.png)

3. Review Queue
![alt text](image-15.png)
![alt text](image-16.png)
![alt text](image-17.png)

4. Digital Logger
![alt text](image-18.png)

5. Finance Audit
![alt text](image-19.png)

6. Supply Vault 
![alt text](image-20.png)

