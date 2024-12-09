{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", () => \{\
  let totalTime = 25 * 60; // Total time in seconds (default: 25 minutes)\
  let remainingTime = totalTime;\
  let timerInterval = null;\
  let isRunning = false;\
\
  function updateTimerDisplay() \{\
    const timerElement = document.getElementById("timer");\
    const minutes = Math.floor(remainingTime / 60);\
    const seconds = remainingTime % 60;\
    timerElement.textContent = `$\{String(minutes).padStart(2, "0")\}:$\{String(\
      seconds\
    ).padStart(2, "0")\}`;\
  \}\
\
  function updateProgress() \{\
    const progressCircle = document.querySelector(".progress-ring-circle");\
    if (!progressCircle) return;\
\
    const radius = 90; // Radius of the circle\
    const circumference = 2 * Math.PI * radius;\
\
    const progress = (remainingTime / totalTime) * 100;\
    const offset = circumference - (progress / 100) * circumference;\
\
    progressCircle.style.strokeDasharray = `$\{circumference\}`;\
    progressCircle.style.strokeDashoffset = offset;\
  \}\
\
  function toggleCountdown() \{\
    const playPauseIcon = document.getElementById("play-pause-icon");\
\
    if (isRunning) \{\
      clearInterval(timerInterval);\
      isRunning = false;\
      playPauseIcon.classList.replace("fa-pause", "fa-play");\
    \} else \{\
      isRunning = true;\
      playPauseIcon.classList.replace("fa-play", "fa-pause");\
\
      timerInterval = setInterval(() => \{\
        if (remainingTime > 0) \{\
          remainingTime--;\
          updateTimerDisplay();\
          updateProgress();\
        \} else \{\
          clearInterval(timerInterval);\
          alert("Time's up!");\
          resetTimer();\
        \}\
      \}, 1000);\
    \}\
  \}\
\
  function adjustTime(type, direction) \{\
    if (isRunning) return;\
\
    const adjustment = 60; // Adjust time in 1-minute increments\
    if (direction === "increase") \{\
      totalTime += adjustment;\
    \} else if (direction === "decrease" && totalTime > adjustment) \{\
      totalTime -= adjustment;\
    \}\
\
    remainingTime = totalTime;\
    updateTimerDisplay();\
    updateProgress();\
  \}\
\
  function resetTimer() \{\
    clearInterval(timerInterval);\
    isRunning = false;\
    totalTime = 25 * 60; // Reset to default 25 minutes\
    remainingTime = totalTime;\
    updateTimerDisplay();\
    updateProgress();\
\
    const playPauseIcon = document.getElementById("play-pause-icon");\
    playPauseIcon.classList.replace("fa-pause", "fa-play");\
  \}\
\
  function toggleMode() \{\
    if (isRunning) return;\
\
    const modeIcon = document.getElementById("mode-icon");\
    if (modeIcon.classList.contains("fa-briefcase")) \{\
      // Switch to Break Mode\
      modeIcon.classList.replace("fa-briefcase", "fa-coffee");\
      totalTime = 5 * 60; // Break time: 5 minutes\
    \} else \{\
      // Switch to Study Mode\
      modeIcon.classList.replace("fa-coffee", "fa-briefcase");\
      totalTime = 25 * 60; // Study time: 25 minutes\
    \}\
\
    remainingTime = totalTime;\
    updateTimerDisplay();\
    updateProgress();\
  \}\
\
  function openSettings() \{\
    const modal = document.getElementById("settings-modal");\
    if (modal) modal.classList.remove("hidden");\
  \}\
\
  function closeSettings() \{\
    const modal = document.getElementById("settings-modal");\
    if (modal) modal.classList.add("hidden");\
  \}\
\
  function applySettings() \{\
    // Get settings values\
    const titleColor = document.getElementById("title-color")?.value || "#333";\
    const timerColor = document.getElementById("timer-color")?.value || "#333";\
    const resetTextColor =\
      document.getElementById("reset-text-color")?.value || "#f8f7ff";\
    const resetButtonColor =\
      document.getElementById("reset-button-color")?.value || "#dc3545";\
    const circleColor =\
      document.getElementById("circle-color")?.value || "#007bff";\
    const buttonColor =\
      document.getElementById("icon-color")?.value || "#007bff";\
    const fontFamily =\
      document.getElementById("font-family")?.value || "Arial, sans-serif";\
\
    // Apply Title Color\
    document.querySelector("h1").style.color = titleColor;\
\
    // Apply Timer Text Color\
    const timerElement = document.getElementById("timer");\
    if (timerElement) \{\
      timerElement.style.color = timerColor;\
    \}\
\
    // Apply Reset Button Text and Background Colors\
    const resetButton = document.querySelector(".reset");\
    if (resetButton) \{\
      resetButton.style.color = resetTextColor; // Text color for Reset button\
      resetButton.style.backgroundColor = resetButtonColor; // Background color for Reset button\
    \}\
\
    // Apply Icon Colors\
    document.querySelectorAll(".icon-button").forEach((iconButton) => \{\
      iconButton.style.color = buttonColor;\
    \});\
\
    // Update Progress Circle Color\
    const progressCircle = document.querySelector(".progress-ring-circle");\
    if (progressCircle) \{\
      progressCircle.style.stroke = circleColor;\
    \}\
\
    // Apply Font Family\
    document.body.style.fontFamily = fontFamily;\
\
    closeSettings();\
  \}\
  function resetToDefaults() \{\
    // Define default values\
    const defaultSettings = \{\
      fontFamily: "Arial, sans-serif",\
      titleColor: "#333",\
      timerColor: "#333",\
      resetTextColor: "#f8f7ff",\
      resetButtonColor: "#dc3545",\
      circleColor: "#007bff",\
      buttonColor: "#007bff"\
    \};\
\
    // Reset Font Family\
    document.getElementById("font-family").value = defaultSettings.fontFamily;\
    document.body.style.fontFamily = defaultSettings.fontFamily;\
\
    // Reset Title Color\
    document.getElementById("title-color").value = defaultSettings.titleColor;\
    document.querySelector("h1").style.color = defaultSettings.titleColor;\
\
    // Reset Timer Color\
    document.getElementById("timer-color").value = defaultSettings.timerColor;\
    const timerElement = document.getElementById("timer");\
    if (timerElement) \{\
      timerElement.style.color = defaultSettings.timerColor;\
    \}\
\
    // Reset Reset Button Text and Background Color\
    document.getElementById("reset-text-color").value =\
      defaultSettings.resetTextColor;\
    document.getElementById("reset-button-color").value =\
      defaultSettings.resetButtonColor;\
    const resetButton = document.querySelector(".reset");\
    if (resetButton) \{\
      resetButton.style.color = defaultSettings.resetTextColor;\
      resetButton.style.backgroundColor = defaultSettings.resetButtonColor;\
    \}\
\
    // Reset Circle Color\
    document.getElementById("circle-color").value = defaultSettings.circleColor;\
    const progressCircle = document.querySelector(".progress-ring-circle");\
    if (progressCircle) \{\
      progressCircle.style.stroke = defaultSettings.circleColor;\
    \}\
\
    // Reset Icon/Button Colors\
    document.getElementById("icon-color").value = defaultSettings.buttonColor;\
    document.querySelectorAll(".icon-button").forEach((iconButton) => \{\
      iconButton.style.color = defaultSettings.buttonColor;\
    \});\
\
    // Optionally close the modal after resetting\
    closeSettings();\
  \}\
\
  function makeTitleEditable() \{\
    const titleElement = document.querySelector("h1");\
\
    // Replace the title with an input\
    const input = document.createElement("input");\
    input.type = "text";\
    input.value = titleElement.textContent;\
    input.className = "editable-title";\
\
    // Replace the title with the input\
    titleElement.replaceWith(input);\
\
    // Focus the input and select its content\
    input.focus();\
    input.select();\
\
    // Save the new title on blur or Enter\
    function saveTitle() \{\
      const newTitle = input.value.trim() || "Pomodoro Timer";\
      const newTitleElement = document.createElement("h1");\
      newTitleElement.textContent = newTitle;\
\
      // Add event listener for editing again\
      newTitleElement.addEventListener("click", makeTitleEditable);\
\
      // Replace the input with the new title\
      input.replaceWith(newTitleElement);\
    \}\
\
    input.addEventListener("blur", saveTitle);\
    input.addEventListener("keydown", (e) => \{\
      if (e.key === "Enter") \{\
        saveTitle();\
      \}\
    \});\
  \}\
\
  // Attach editable functionality to the title\
  document.querySelector("h1").addEventListener("click", makeTitleEditable);\
\
  // Expose functions to global scope\
  window.toggleCountdown = toggleCountdown;\
  window.adjustTime = adjustTime;\
  window.resetTimer = resetTimer;\
  window.toggleMode = toggleMode;\
  window.openSettings = openSettings;\
  window.closeSettings = closeSettings;\
  window.applySettings = applySettings;\
\
  // Initialize Timer\
  updateTimerDisplay();\
  updateProgress();\
\});\
}