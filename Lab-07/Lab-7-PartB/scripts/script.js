window.onload = function () {
  var timeLabel = document.getElementById("timeLabel");
  var startButton = document.getElementById('button-start');
  var stopButton = document.getElementById('button-stop');
  var resetButton = document.getElementById('button-reset');
  const dateInput = document.getElementById("date");

  $('date').attr('readonly', true); 
    let startTime;
    let intervalId;
    let isRunning = false;
  
    const updateTimeDisplay = () => {
      const currentTime = new Date() - startTime;
      const [hours, minutes, seconds] = [
        Math.floor((currentTime / 3600000) % 24),
        Math.floor((currentTime / 60000) % 60),
        Math.floor((currentTime / 1000) % 60)
      ];
      timeLabel.textContent = `${hours}:${minutes}:${seconds}`
      .split(':')
      .map(component => component.padStart(2, '0'))
      .join(':');
        }
    
        
    const setTimeoutPromise = (delay) => new Promise(resolve => setTimeout(resolve, delay));
  
    startButton.addEventListener("click", async () => {
      if (!isRunning) {
        startTime = new Date() - (new Date(dateInput.value).getTime() || 0);
        isRunning = true;
        while (isRunning) {
          updateTimeDisplay();
          await setTimeoutPromise(1000);
        }
      }
    });
  

    stopButton.addEventListener("click", () => {
      isRunning = false;
    });
  
    resetButton.addEventListener("click", () => {
      isRunning = false;
      timeLabel.textContent = "00:00:00";
      dateInput.value = "";
    });
  }
  