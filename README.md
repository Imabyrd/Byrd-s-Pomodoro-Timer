# Byrd's Pomodoro Timer

A customizable, browser-based focus timer designed with a compact interface suitable for embedding in a Notion page.

![Screenshot of the timer](https://github.com/user-attachments/assets/eebdf02b-2136-4c3e-ad78-f1c5a4276e00)

## What I built

A vanilla JavaScript timer with an SVG circular progress indicator and user-adjustable appearance. The project combines practical time-management functionality with a deliberately customizable visual design.

- Start, pause, and reset a countdown.
- Switch between a 25-minute focus session and a 5-minute break.
- Increase or decrease the session duration in one-minute increments while paused.
- Customize colors and typography from a settings panel.
- Click the heading to rename the timer.

## Try it locally

Clone this repository and open `index.html` in a modern browser. No build process or package installation is required. The interface loads Font Awesome icons from a CDN, so an internet connection is useful for the intended appearance.

To embed it in Notion, host the static files on a web-accessible HTTPS site and paste that URL into a Notion embed block.

## Built with

HTML, CSS, vanilla JavaScript, SVG, and Font Awesome.

## Implementation notes

The timer uses `setInterval` to update remaining seconds and changes the SVG circle's stroke offset to represent progress. The settings panel updates CSS styles directly in the document. No backend or account is required.

## Known limitations / next steps

- Session settings are not persisted between refreshes.
- `setInterval` can drift when browser tabs are suspended; an elapsed-time-based approach would be more robust.
- Add accessible names to icon-only buttons and keyboard-friendly modal behavior.
- Validate the circular progress styling across browsers.

## Design and authorship

Personal coding and interface-design project. The layout and customization are part of the work being showcased; third-party iconography is provided by Font Awesome.
